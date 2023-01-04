import Aos from 'aos'
import 'aos/dist/aos.css'
import React from 'react'
import { Footer, Header } from '../components'
import { ThemeProvider } from '../contexts/theme'
import { GlobalStyles } from '../theme'
import Styled from './App.styles'
import Home from './Home'
import Projects from './Projects'
import Skills from './Skills'

const App = () => {
  Aos.init({
    duration: 2000
  })

  return (
    <ThemeProvider>
      <GlobalStyles />
      <Header />
      <Styled.Main>
        <Home />
        <Skills />
        <Projects />
      </Styled.Main>
      <Footer />
    </ThemeProvider>
  )
}

export default App
