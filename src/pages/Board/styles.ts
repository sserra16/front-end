import styled from "styled-components";

export const Container = styled.ul`
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;

  height: 100vh;

  align-items: center;
  color: #fff;
  #collapse {
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }
  }
`;

export const Input = styled.input`
  background: transparent;
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 5px 10px;
  width: 18rem;  
  color: #fff;
  &::placeholder {
    color: #fff;
    opacity: 0.3;
  }

  & + input {
    margin-top: 10px;
  }
`;


export const Message = styled.div`
  background: rgba(0, 0, 0, 0.3);
  padding: 2rem;

  border-radius: 0.8rem;

  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  transition: ease-in-out .3s;

  width: 18rem;

  span {
    opacity: 0.8;
  }

  div {
    display: flex;
    flex-direction: column;
  }
`;

export const Button = styled.button`
  border: none;
  padding: 0.5rem 0.8rem;
  background-color: #7bade2;
  border-radius: 0.8rem;
  width: 13rem;
  transition: ease-in-out 0.3s;

  &:hover {
    filter: opacity(0.8);
  }
`;
