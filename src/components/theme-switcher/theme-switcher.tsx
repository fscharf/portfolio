import { Button } from 'components/core'
import { memo } from 'react'
import { useTheme } from 'styled-components'
import { useThemeHandler } from 'theme'
import { Wrapper } from './styles'

const ThemeSwitcher = () => {
  const theme = useTheme()
  const { setPrimaryColor } = useThemeHandler()

  const colors: string[] = [
    '#4870ff',
    '#e23232',
    '#ee7e22',
    '#bea513',
    '#128a8a',
    '#2846a8',
    '#9211ce',
    '#91195f'
  ]

  return (
    <Wrapper>
      {colors.map((color, index) => (
        <Button
          css={{
            backgroundColor: color,
            color: theme.colors.light,
            width: '32px',
            height: '32px',
            border:
              theme.colors.primary === color
                ? `3px solid ${theme.colors.light}`
                : ''
          }}
          key={index}
          onClick={() => setPrimaryColor(color)}
        ></Button>
      ))}
    </Wrapper>
  )
}

export default memo(ThemeSwitcher)
