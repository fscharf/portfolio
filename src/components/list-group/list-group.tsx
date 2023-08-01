import { Item, List, Text } from './styles'

type Props = {
  children?: React.ReactNode
}

const ListGroup = ({ children }: Props) => <List>{children}</List>
ListGroup.Item = ({ children }: Props) => <Item>{children}</Item>
ListGroup.Text = ({ children }: Props) => <Text>{children}</Text>

export default ListGroup
