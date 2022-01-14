import styled from 'styled-components';

const Styled = {
  Wrapper: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    align-items: center;
  `,

  Input: styled.input`
    appearance: none;
    border-radius: 50%;
    background-color: ${(p) => p.bgColor};
    width: 32px;
    height: 32px;
    border: none;
    cursor: pointer;
    &:focus {
      outline: none;
    }
    &:checked {
      border: 2px solid #fff;
    }
  `,
};

export default Styled;
