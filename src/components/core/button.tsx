import styled, { CSSObject } from 'styled-components'

const Button = styled.button<{ css?: CSSObject }>`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.sizes.xs};
  color: ${props => props.theme.colors.light};
  font-size: 1rem;
  font-weight: 500;
  padding: ${props => props.theme.sizes.xxxs};
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  ${props => props.css}
`

export default Button
