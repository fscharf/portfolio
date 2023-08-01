import styled, { CSSObject } from 'styled-components'

const Flex = styled.div<{ css?: CSSObject }>`
  display: flex;
  ${props => props.css}
`

export default Flex
