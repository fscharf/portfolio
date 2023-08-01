import styled, { CSSObject } from 'styled-components'

const Stack = styled.div<{ css?: CSSObject }>`
  width: 100%;
  height: 100%;
  ${props => props.css}
`

export default Stack
