import { Link } from 'components/core'
import { darken } from 'polished'
import styled, {
  keyframes,
  type CSSProperties,
  type Keyframes
} from 'styled-components'

const rotate: Keyframes = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const NavWrapper = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  transition: all 0.3s ease;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
`

export const Wrapper = styled.div<{ fixed?: boolean }>`
  padding: ${props => props.theme.sizes.xs};
  margin-top: ${props => props.theme.sizes.xs};
  width: 100%;
  height: 100%;
  max-width: 1024px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: ${props => props.theme.sizes.xs};

  @media (max-width: 1024px) {
    padding: 0 16px;
  }
  background: ${props => props.theme.colors.dark800};
  backdrop-filter: blur(15px);
`

export const SocialWrapper = styled.aside<{ color?: string }>`
  position: fixed;
  top: 50%;
  left: 0;
  padding: 32px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 24px;

  a:hover {
    color: ${props => props.color};
  }

  @media (max-width: 768px) {
    display: none;
  }
`

export const NavLink = styled(Link)<{
  color?: string
  highlight?: boolean
  active?: boolean
}>`
  color: ${props =>
    props.active
      ? props.theme.colors.light
      : darken(0.3, props.theme.colors.light)};
  gap: ${props => props.theme.sizes.xxxs};

  &:hover {
    color: ${props => props.theme.colors.light};
  }

  ${props =>
    props.highlight && {
      borderRadius: '50%',
      backgroundColor: props.theme.colors.primary,
      color: props.theme.colors.light,
      padding: '8px'
    }}
`

export const ScrollTopButton = styled.button<{
  display?: CSSProperties['display']
  highlight?: boolean
}>`
  position: fixed;
  right: 16px;
  bottom: 16px;
  z-index: 999;
  display: ${props => props.display};

  ${props =>
    props.highlight && {
      borderRadius: '50%',
      backgroundColor: props.color,
      color: props.theme.colors.light,
      padding: '8px'
    }}
`

export const Text = styled.span`
  color: ${props => props.theme.colors.light};
  font-weight: bold;
`

export const LogoButton = styled.button<{ color?: string }>`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: 800;

  svg {
    color: ${props => props.color};
    animation: ${rotate} 6s infinite;
    margin: 0 -4px;
  }

  @media (min-width: 1025px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    font-size: 32px;
  }
`

export const Column = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 16px;
`
