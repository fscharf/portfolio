import Styled from './styles';

const Tooltip = ({ children, text, top }) => {
  return (
    <Styled.Wrapper>
      {children}
      <Styled.Text top={top} className="tooltipText">
        {text}
      </Styled.Text>
    </Styled.Wrapper>
  );
};

export default Tooltip;
