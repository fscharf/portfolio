import styled from 'styled-components';
import { theme } from '../components';

const Styled = {
  Main: styled.main`
    max-width: 1024px;

    @media (max-width: 1024px) {
      width: 100%;
      padding: 0 16px;
    }
  `,

  Title: styled.h2`
    font-size: 32px;
    color: ${(p) => (p.dark ? theme.colors.dark : theme.colors.light)};
  `,

  Subtitle: styled.h4`
    font-size: 24px;
    color: ${theme.colors.primary};
  `,

  Text: styled.p`
    font-size: 16px;
    color: ${(p) => (p.dark ? theme.colors.dark : theme.colors.light)};
    line-height: 1.6;
  `,
  
  Section: styled.section`
    height: ${(p) => (p.fullHeight ? `100vh` : `100%`)};
    ${(p) => p.customStyle && { ...p.customStyle }}
    min-width: 100%;
  `,
};

export default Styled;
