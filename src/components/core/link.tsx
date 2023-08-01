import styled, { CSSObject } from 'styled-components'

const Link = styled.a<{ css?: CSSObject }>`
  color: ${props => props.theme.colors.light};
  cursor: pointer;
  font-weight: 500;
  text-decoration: none;
  padding: ${props => props.theme.sizes.xxxs};
  transition: all 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
  ${props => props.css}
`

export default Link
