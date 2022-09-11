import React, { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import { Container, Button, Input, Content } from "./styles";
import { gql, useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";

const CREATE_OR_LOGIN_USER = gql`
  mutation ($email: String!, $name: String!) {
    createOrLoginUser(data: { email: $email, name: $name }) {
      id
      name
    }
  }
`;

function Home()  {
  const history = useNavigate();
  
  const [input, setInput] = useState<string>('');
  const [name, setName] = useState<string>('');

  const [createOrLoginUser, { data }] = useMutation(CREATE_OR_LOGIN_USER);

  useEffect(() => {
    if (data) {
      const { createOrLoginUser } = data;
      const { id, name } = createOrLoginUser;

      history(`/dashboard/${id}`, { state: name as string });
    }
  });

  async function handleRegister(e: React.MouseEvent) {
    e.preventDefault();

    if (input.length < 1) {
      alert("Insira um email valido");
      return;
    }

    await createOrLoginUser({ variables: { email: input, name: name } });
    setInput('');
  }

  return (
    <Container>
      <Content>
        <form>
          <Input
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            type="email"
            placeholder="E-Mail"
            required
          />
          <Input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            placeholder="Name"
            required
          />

          <Button onClick={handleRegister}>
            <FaCheck size={24} color="#FFF" />
            <span>Login or Register</span>
          </Button>
        </form>
      </Content>
    </Container>
  );
};

export default Home;
