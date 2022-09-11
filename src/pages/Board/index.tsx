import React, { useState } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import { Button, Container, Input, Message } from "./styles";
import { useLocation, useParams } from "react-router-dom";
import { AiOutlinePlusCircle } from "react-icons/ai";
import "bootstrap/dist/js/bootstrap.bundle.min";

interface IMessage {
  id: number;
  content: string;
  user: {
    email: string;
    name: string;
  };
}

const GET_ALL_MESSAGES = gql`
  query {
    getMessages {
      content
      id
      user {
        email
        name
      }
    }
  }
`;

const CREATE_MESSAGE = gql`
  mutation ($userId: number!, $content: String!) {
    createMessage(data: { userId: $userId, content: $content }) {
      content
    }
  }
`;

export default function Board() {
  const { state } = useLocation();
  const [message, setMessage] = useState<string>("");

  const params = useParams();

  const { loading, error, data } = useQuery<{ getMessages: IMessage[] }>(
    GET_ALL_MESSAGES
  );

  const [createMessage, { error: errorM, data: dataM }] = useMutation(
    CREATE_MESSAGE,
    { variables: { userId: params.id, content: message } }
  );

  async function handleMessage() {
    await createMessage();
    setMessage("");
  }

  if (loading) return <p>Loading...</p>;
  else if (error) return <p>Ops... Algo deu errado: {error.message}</p>;

  return (
    <Container>
      <p>Olá {String(state)} </p>
      <a
        data-bs-toggle="collapse"
        href="#collapse"
        aria-controls="collapseExample"
        aria-expanded="false">
        <Button>
          <AiOutlinePlusCircle size={24} color={"#FFF"} />
        </Button>
      </a>
      <div className={`collapse collapse-horizontal`} id="collapse">
        <div>
          <Input
            type={"text"}
            placeholder={"Digite uma nova mensagem"}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button onClick={handleMessage}>Salvar</Button>
        </div>
      </div>

      {errorM ? <p>Oh no! {errorM.message}</p> : null}
      {dataM ? <p>Saved!</p> : null}

      {data?.getMessages.map((message) => (
        <Message key={message.id}>
          <div>
            <span>{message.user.name}</span>
            <span>{message.user.email}</span>
          </div>

          <h1>{message.content}</h1>
        </Message>
      ))}
    </Container>
  );
}
