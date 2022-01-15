import styled from 'styled-components';
import { darken } from 'polished';
import { theme } from '..';

const Styled = {
  Header: styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    gap: 8px;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    background-color: ${(p) => darken(0.05, String(p.variant))};
    font-size: 24px;
  `,

  Span: styled.span`
    text-transform: lowercase;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 8px;
  `,

  Body: styled.section`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 24px;
  `,

  Container: styled.article`
    border-radius: 16px;
    width: 100%;
    color: ${theme.colors.light};
    background-color: ${(p) => p.variant};

    ${(p) => p.customStyle && { ...p.customStyle }}
  `,
};

export default Styled;
