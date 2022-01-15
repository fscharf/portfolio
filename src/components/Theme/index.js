import { createContext, useEffect, useState } from 'react';
import ThemeSidebar from './components/ThemeSidebar';

const ThemeContext = createContext();

const primaryColor = localStorage.getItem('primaryColor');
const setPrimaryColor = value => localStorage.setItem('primaryColor', value)

const theme = {
  colors: {
    primary: primaryColor,
    light: '#eeeeee',
    dark: '#0d0d0d',
  },
  updateColors: async (value) => {
    if (value) {
      return setPrimaryColor(value)
    } 
    setPrimaryColor('#1847e2');
  },
};

const ThemeProvider = ({ children }) => {
  const [state, setState] = useState({
    colorPrimary: primaryColor ? primaryColor : '#1847e2',
  });

  useEffect(() => {
    theme.updateColors(state.colorPrimary);
  }, [state.colorPrimary]);

  return (
    <ThemeContext.Provider value={{ state, setState }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext, theme, ThemeSidebar };
