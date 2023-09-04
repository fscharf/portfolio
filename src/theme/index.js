import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

export * from './theme'

export const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'Figtree', 'Segoe UI', sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    word-wrap: break-word;
    scroll-behavior: smooth;
  }
  a {
    text-decoration: none;
    &:active, &:focus, &:focus-visible {
      color: initial;
    }
  }
  body {
    color: ${theme.colors.dark}; 
    background-color: #0D0D0D;

    @media (min-width: 1024px) {     
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
`
