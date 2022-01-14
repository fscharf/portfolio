import { darken } from 'polished';
import styled from 'styled-components';
import { theme } from '..';

const Styled = {
  Footer: styled.footer`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 64px 0;
    gap: 24px;

    @media (max-width: 1024px) {
      align-items: center;
    }
  `,

  Wrapper: styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
  `,

  Img: styled.img`
    max-width: 32px;
    border-radius: 50%;
  `,

  Text: styled.span`
    color: ${(p) =>
      p.light ? darken(0.3, theme.colors.light) : theme.colors.dark};
    font-weight: ${(p) => p.bold && `bold`};
  `,

  Socials: styled.section`
    align-items: center;
    gap: 32px;
    display: none;

    @media (max-width: 768px) {
      display: flex;
    }
  `,

  Link: styled.a`
    display: flex;
    align-items: center;
    color: ${darken(0.3, theme.colors.light)};
  `,
};

export default Styled;
