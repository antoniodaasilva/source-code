import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    border: none;
  }
  

  body {
    width: 100vw;
    height: 100vh;
    background: #f0f2f5;
    font-family: Poppins;
  }

`

export default GlobalStyle