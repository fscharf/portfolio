import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Figtree', 'Segoe UI', sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    word-wrap: break-word;
    scroll-behavior: smooth;
  }
  body {
    color: ${props => props.theme.colors.dark};   
    font-size: ${props => props.theme.sizes.xs};
  }
  button, input {
    cursor: pointer;
    border: none;
    background-color: transparent;
    outline: none;
  }
`
