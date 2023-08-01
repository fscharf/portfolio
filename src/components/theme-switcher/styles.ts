import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.sizes.xxs};
  align-items: center;
`

export const Button = styled.button<{ active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 2px;
  transition: all 300ms;
  background-color: ${props => props.active && props.theme.colors.light};
`

export const Span = styled.div<{ bgColor?: string }>`
  border-radius: 50%;
  background-color: ${props => props.bgColor};
  width: 32px;
  height: 32px;
`
