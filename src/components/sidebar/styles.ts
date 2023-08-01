import styled from 'styled-components'

export const Wrapper = styled.aside<{ open?: boolean }>`
  position: fixed;
  transform: translateX(${props => (props.open ? '0' : '100%')});
  top: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 300px;
  background-color: ${props => props.theme.colors.dark};
  transition: transform 200ms cubic-bezier(0.23, 1, 0.32, 1);
  z-index: 999;

  @media screen and (max-width: 450px) {
    width: 100%;
  }
`

export const WrapperOverlay = styled.div<{ open?: boolean }>`
  position: absolute;
  inset: 0;
  width: 100vw;
  transform: translateX(${props => (props.open ? '-100%' : '100%')});
  background-color: ${props => props.theme.colors.dark800};
  backdrop-filter: blur(15px);
  transition: transform 200ms cubic-bezier(0.23, 1, 0.32, 1);
`
