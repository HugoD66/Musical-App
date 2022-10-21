import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    transition: linear 0.45s;
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.mainColor};
    font-family: Montserrat, serif;
  }

  button {
    font-family: Montserrat, sans-serif;
    padding: 12px 20px;
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.mainColor};
  }

  button:hover {
    color: ${(props) => props.theme.backgroundColor};
    background-color: ${(props) => props.theme.mainColor};
    transition: linear 0.45s;
    cursor: pointer;
    border: solid 1px;
  }

  h1 {
    font-size: 1.6rem;
    letter-spacing: 2px;
  }

  h2 {
    font-size: 1.4rem;
  }

`;

export default GlobalStyle;