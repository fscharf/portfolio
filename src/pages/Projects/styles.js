import { darken } from 'polished';
import styled from 'styled-components';
import { theme } from '../../components';

const Styled = {
  Section: styled.section`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  `,

  Container: styled.article`
    display: flex;
    gap: 16px;
    height: 100%;
    align-items: center;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  `,

  Tools: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    gap: 8px;
    align-items: center;

    @media (max-width: 768px) {
      justify-content: center;
    }
  `,

  Span: styled.span`
    display: flex;
    align-items: center;
    gap: 8px;
    text-transform: lowercase;
    color: ${darken(0.3, theme.colors.light)};
    font-size: 12px;
    svg {
      color: ${(p) => p.variant};
    }
  `,

  ImgWrapper: styled.section`
    width: 55%;

    @media (max-width: 768px) {
      width: 100%;
    }
  `,

  Wrapper: styled.section`
    display: flex;
    flex-direction: column;
    gap: 8px;
    border-radius: 32px;
    border-bottom-left-radius: 0;
    width: 100%;
    padding: 32px;

    @media (max-width: 768px) {
      width: 100%;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 16px;
    }
  `,

  Title: styled.h2`
    font-size: 24px;
    color: ${(p) => (p.variant ? p.variant : theme.colors.light)};
    display: flex;
    align-items: center;
    gap: 8px;
  `,

  Text: styled.p`
    font-size: 16px;
    color: ${darken(0.3, theme.colors.light)};
    margin: 8px 0 24px;
    min-height: 100px;
    overflow-y: auto;
  `,

  Strip: styled.hr`
    margin: 16px 0 0;
    border-radius: 4px;
    border: 1px solid ${darken(0.15, theme.colors.light)};
  `,

  Link: styled.a`
    background: ${(p) => (p.outline ? `transparent` : p.variant)};
    border: 2px solid ${(p) => p.variant};
    color: ${(p) => (p.outline ? p.variant : theme.colors.light)};
    padding: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
    border-radius: 8px;
    transition: 0.2s ease;

    @media (max-width: 300px) {
      font-size: 12px;
    }
  `,

  LinkWrapper: styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
  `,

  Img: styled.img`
    width: 100%;
    object-fit: cover;
    border-radius: 16px;

    @media (max-width: 758px) {
      width: 100%;
    }
  `,
};

export default Styled;
