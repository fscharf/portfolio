import { lighten } from 'polished';
import styled, { keyframes } from 'styled-components';
import { theme } from '../../components';

const rotate = keyframes`
  from { transform: rotate(0deg) };
  to { transform: rotate(360deg) };
`;

const Styled = {
  Section: styled.section`
    height: 100vh;
    display: flex;
    align-items: center;
    gap: 32px;

    @media (max-width: 1024px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  `,

  Column: styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
  `,

  Img: styled.img`
    max-width: 300px;

    @media (max-width: 1024px) {
      max-width: 200px;
    }
  `,

  ImgWrapper: styled.div`
    position: relative;
    align-self: flex-end;

    svg {
      position: absolute;
      top: 0;
      left: 0;
      max-width: 300px;
      height: auto;
      z-index: -1;
      animation: ${rotate} 8s linear infinite;

      @media (max-width: 1024px) {
        max-width: 200px;
      }
    }
    @media (max-width: 1024px) {
      align-self: center;
    }
  `,

  Icon: styled.span`
    color: ${lighten(0.3, theme.colors.dark)};
    font-size: 32px;
    display: flex;
    align-items: center;
  `,

  IconsWrapper: styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    margin: 16px 0;

    @media (max-width: 1024px) {
      justify-content: center;
    }
  `,

  Title: styled.h2`
    font-size: 32px;
    color: ${theme.colors.light};
  `,

  Subtitle: styled.h4`
    font-size: 24px;
    color: ${(p) => p.variant};
  `,

  Text: styled.p`
    font-size: 16px;
    color: ${theme.colors.light};
    line-height: 1.6;
    max-width: 75vw;

    @media (max-width: 1024px) {
      align-self: center;
    }
  `,

  BgBlob: (props) => (
    <svg
      width="450"
      height="450"
      viewBox="0 0 450 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_730_49)">
        <path
          d="M28.0336 266.983C8.62278 230.004 14.2368 184.857 42.1129 153.758L116.75 70.4927L160.032 31.9975C204.467 -7.52407 273.367 0.234361 307.901 48.6482L388.75 161.993L419.382 210.697C454.384 266.35 427.078 340.058 364.267 359.475L196.184 411.436C150.145 425.669 100.504 405.043 78.1067 362.375L28.0336 266.983Z"
          fill={props.variant}
        />
      </g>
      <defs>
        <clipPath id="clip0_730_49">
          <rect width="450" height="450" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
};

export default Styled;
