import { darken } from 'polished';
import styled, { keyframes } from 'styled-components';
import { theme } from '..';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Styled = {
  Nav: styled.nav`
    width: 100%;
    padding: 32px 16px;
    display: flex;
    justify-content: center;
    transition: all 0.3s ease;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    &.fixed {
      padding: 16px;
      background: ${theme.colors.dark};
    }
  `,

  Socials: styled.aside`
    position: fixed;
    top: 50%;
    left: 0;
    padding: 32px;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    gap: 24px;

    a:hover {
      color: ${(p) => p.variant};
    }

    @media (max-width: 768px) {
      display: none;
    }
  `,

  NavLink: styled.a`
    font-size: 16px;
    color: ${darken(0.3, theme.colors.light)};
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;

    &:hover,
    &.active,
    &.highlight {
      color: ${theme.colors.light};
    }

    &.highlight {
      border-radius: 50%;
      background: ${(p) => p.variant};
      padding: 8px;
    }

    &#scrollTopButton {
      position: fixed;
      right: 16px;
      bottom: 16px;
      z-index: 999;

      &.d-none {
        display: none;
      }
    }
  `,

  Wrapper: styled.div`
    max-width: 1024px;
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,

  Span: styled.span`
    color: ${theme.colors.light};
    font-weight: bold;
  `,

  Brand: styled.a`
    display: flex;
    align-items: center;
    font-size: 24px;

    svg {
      color: ${(p) => p.variant};
      animation: ${rotate} 6s infinite;
      margin: 0 -4px;
    }

    @media (min-width: 1025px) {
      width: 100%;
    }
    @media (max-width: 768px) {
      font-size: 32px;
    }
  `,

  Column: styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 16px;
  `,
};

export default Styled;
