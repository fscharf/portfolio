import styled, { CSSObject } from 'styled-components'

const Text = styled.p<{ css?: CSSObject }>`
  color: ${props => props.theme.colors.light};
  font-weight: 500;
  line-height: 1.5;
  margin: 0;
  padding: 0;
  ${props => props.css};
`

export default Text
