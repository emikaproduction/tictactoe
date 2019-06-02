import { createGlobalStyle } from 'styled-components';
import { generalBlue, generalRed } from './variables';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

  body {
    overflow-y: scroll;
    background: linear-gradient(to bottom, ${generalBlue} 0%,${generalBlue} 0%,${generalRed} 100%,${generalRed} 100%);
    background-repeat: no-repeat;
    height: 100vh;
    font-family: 'Montserrat', sans-serif;
  }
`;

export default GlobalStyle;