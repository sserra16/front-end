import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }
  body {
    background-color: #282a36;
    height: 100vh;
    width: 100vw;
    font: 14px 'Roboto', sans-serif;
  }
  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }
  a {
    text-decoration: none;
  }
  button {
    cursor: pointer;
  } 
`;