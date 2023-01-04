import Styled from './styles'

const ListGroup = ({ children, ...rest }) => (
  <Styled.List {...rest}>{children}</Styled.List>
)
ListGroup.Item = ({ children, ...rest }) => (
  <Styled.Item {...rest}>{children}</Styled.Item>
)
ListGroup.Text = ({ children, ...rest }) => (
  <Styled.Text {...rest}>{children}</Styled.Text>
)

export default ListGroup
