import { Body, Container, Header, Text } from './styles'

type Props = {
  children?: React.ReactNode
}

const Card = (props: Props) => <Container>{props.children}</Container>

Card.Header = (props: Props) => <Header>{props.children}</Header>
Card.Body = (props: Props) => <Body>{props.children}</Body>
Card.Text = (props: Props) => <Text>{props.children}</Text>

export default Card
