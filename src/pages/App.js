import React from 'react';
import Styled from './App.styles';
import Home from './Home';
import Skills from './Skills';
import Projects from './Projects';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Footer, GlobalStyles, Header, ThemeProvider } from '../components';

const App = () => {
  Aos.init({
    duration: 2000,
  });
  
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
  );
};

export default App;
