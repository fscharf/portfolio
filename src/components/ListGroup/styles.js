import styled from 'styled-components';

const Styled = {
  List: styled.ul`
    display: flex;
    flex-direction: column;
    gap: 16px;
  `,

  Item: styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,

  Text: styled.span`
    width: 100%;
    white-space: nowrap;
  `,
};

export default Styled;
