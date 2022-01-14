import Styled from './styles';

const Card = ({ children, ...rest }) => (
  <Styled.Container {...rest}>{children}</Styled.Container>
);
Card.Header = ({ children, ...rest }) => (
  <Styled.Header {...rest}>{children}</Styled.Header>
);
Card.Body = ({ children, ...rest }) => (
  <Styled.Body {...rest}>{children}</Styled.Body>
);
Card.Text = ({ children, ...rest }) => (
  <Styled.Span {...rest}>{children}</Styled.Span>
);

export default Card;
