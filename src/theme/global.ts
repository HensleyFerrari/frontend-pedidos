import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

    *{
        margin: 0;
        padding: 0;
        font-family: "Montserrat", sans-serif;
        box-sizing: border-box;        
    }

    html {
        max-width: 100vw;  
        min-height: 100vh;
        overflow-x: hidden;
  }
`;