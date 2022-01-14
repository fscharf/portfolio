import { createGlobalStyle } from 'styled-components';
import { theme } from '..';
import Background from '../../assets/images/background.svg';

const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'DM Sans', 'Segoe UI', sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    word-wrap: break-word;
    scroll-behavior: smooth;
  }
  a {
    text-decoration: none;
    color: ${theme.colors.dark};
    &:active, &:focus {
      color: inherit;
    }
  }
  body {
    color: ${theme.colors.dark};   
    background: url(${Background}) no-repeat center top;
    background-size: cover;

    @media (min-width: 1024px) {     
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
`;

export default GlobalStyles;
