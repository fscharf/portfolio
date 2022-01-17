import styled from 'styled-components';
import { theme } from '../../components';

const Styled = {
  Section: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    gap: 32px;

    @media (max-width: 768px) {
      align-items: center;
    }
  `,

  Title: styled.h2`
    font-size: 32px;
    color: ${theme.colors.light};
  `,
};

export default Styled;
