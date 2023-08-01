import { darken } from 'polished'
import styled, { CSSProperties } from 'styled-components'

export const Header = styled.section<{ variant?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  gap: 8px;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  background: ${props => darken(0.1, props.variant || '#fff')};
  backdrop-filter: blur(12px);
  font-size: 20px;
  text-transform: uppercase;
`

export const Text = styled.span`
  font-weight: 800;
  display: flex;
  align-items: center;
  gap: 8px;
`

export const Body = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 24px;
  font-weight: 700;
`

export const Container = styled.article<{
  variant?: string
  styles?: CSSProperties
}>`
  border-radius: 32px;
  width: 100%;
  color: ${props => props.theme.colors.light};
  background: ${props => props.variant};
  backdrop-filter: blur(12px);
  ${props => ({ ...props.styles })}
`
