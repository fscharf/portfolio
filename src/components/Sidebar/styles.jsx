import styled from 'styled-components';
import { theme } from '..';

const Styled = {
  Aside: styled.aside`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 350px;
    transform: translateX(350px);
    transition: transform 0.3s ease;
    background: ${theme.colors.dark};
    z-index: 999;

    &.open {
      transform: translateX(0);
    }
    @media (max-width: 768px) {
      transform: translateX(100%);
      width: 100%;
    }
  `,

  Header: styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 32px;
  `,

  Wrapper: styled.section`
    padding: 32px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  `,

  Title: styled.h2`
    color: ${theme.colors.light};
  `,
  
  CloseButton: styled.a`
    cursor: pointer;
    display: flex;
    align-items: center;
  `
};

export default Styled;
