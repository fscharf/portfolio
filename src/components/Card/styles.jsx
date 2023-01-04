import { darken } from 'polished'
import styled from 'styled-components'
import { theme } from '../../theme'

const Styled = {
  Header: styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    gap: 8px;
    border-top-left-radius: 32px;
    border-top-right-radius: 32px;
    background: ${p => darken(0.1, p.variant || '#fff')};
    backdrop-filter: blur(12px);
    font-size: 20px;
    text-transform: uppercase;
  `,

  Span: styled.span`
    font-weight: 800;
    display: flex;
    align-items: center;
    gap: 8px;
  `,

  Body: styled.section`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 24px;
    font-weight: 700;
  `,

  Container: styled.article`
    border-radius: 32px;
    width: 100%;
    color: ${theme.colors.light};
    background: ${p => p.variant};
    backdrop-filter: blur(12px);

    ${p =>  ({ ...p.customStyle })}
  `
}

export default Styled
