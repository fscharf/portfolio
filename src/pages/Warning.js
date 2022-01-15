import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #0d0d0d;
  color: #eeeeee;
  img {
    max-width: 250px;
  }
  h2 {
    font-size: 32px;
  }
  h4 {
    font-size: 24px;
    color: #a9a9a9;
  }
`;

const Icons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  span {
    font-size: 75px;
    font-weight: bold;
  }

  svg {
    animation: ${rotate} 6s infinite;
    width: 75px;
    height: auto;
    color: #1500ff;

    &:first-child {
      margin-right: -25px;
    }
    &:last-child {
      margin-left: -25px;
    }
  }
`;

export const Warning = () => {
  return (
    <Wrapper>
      <Icons>
        <HiOutlineChevronLeft />
        <span>fs</span>
        <HiOutlineChevronRight />
      </Icons>
      <h2>novidades em breve ;)</h2>
      <h4> site em manutenção</h4>
    </Wrapper>
  );
};
