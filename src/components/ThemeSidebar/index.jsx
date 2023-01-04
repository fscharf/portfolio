import { memo } from 'react'
import { Sidebar, toggleSidebar } from '..'
import { useTheme } from '../../contexts/theme'

import Styled from './styles'

const ThemeSidebar = () => {
  const colors = [
    '#1847e2',
    '#f20727',
    '#970ce8',
    '#1fcf3c',
    '#545454',
    '#dbbf1f',
    '#cc29b3',
    '#d65504'
  ]
  const { primaryColor, setPrimaryColor } = useTheme()

  const elementId = 'colorSidebar'

  return (
    <Sidebar title="Theme" id={elementId}>
      <Styled.Wrapper>
        {colors.map((color, index) => (
          <Styled.Input
            type="radio"
            name="colors"
            value={color}
            bgColor={color}
            checked={primaryColor === color}
            key={index}
            onChange={() => {
              setPrimaryColor(color)
              window.innerWidth < 768 && toggleSidebar(elementId)
            }}
          />
        ))}
      </Styled.Wrapper>
    </Sidebar>
  )
}

export default memo(ThemeSidebar)
