import styled from 'styled-components';
import { css } from 'styled-components';

const Styled = {
  Wrapper: styled.div`
    display: flex;
    align-items: center;
    width: max-content;
    position: relative;

    &:hover .tooltipText {
      visibility: visible;
      opacity: 1;
    }
  `,
  Text: styled.p`
    position: absolute;
    background-color: #333;
    visibility: hidden;
    opacity: 0;
    padding: 8px;
    font-size: 14px;
    color: #fff;
    margin: 0;
    border-radius: 8px;
    transition: opacity 0.2s linear;
    z-index: 999;

    ${(p) =>
      p.top
        ? css`
            left: 50%;
            bottom: 110%;
            transform: translateX(-50%);
          `
        : css`
            left: 110%;
            top: 50%;
            transform: translateY(-50%);
          `}
  `,
};

export default Styled;
