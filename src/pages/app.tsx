import Aos from 'aos'
import 'aos/dist/aos.css'
import { Header } from 'components'
import { Background } from 'components/core'
import { useEffect, useMemo } from 'react'
import styled, { DefaultTheme, ThemeProvider } from 'styled-components'
import { GlobalStyle, theme, useThemeHandler } from 'theme'
import About from './about'
import Home from './home'

const Main = styled.main`
  width: 100%;
  position: relative;
`

export default function App() {
  const { primaryColor } = useThemeHandler()

  const getTheme: DefaultTheme = useMemo(
    () => ({
      ...theme,
      colors: {
        ...theme.colors,
        primary: primaryColor
      }
    }),
    [primaryColor]
  )

  useEffect(() => {
    Aos.init({
      duration: 3000
    })
  }, [])

  return (
    <ThemeProvider theme={getTheme}>
      <GlobalStyle />
      <Header />
      <Main>
        <Background
          style={{
            objectFit: 'cover',
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: 'auto',
            zIndex: -1
          }}
        />
        <Home />
        <About />
      </Main>
    </ThemeProvider>
  )
}
