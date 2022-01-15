import { createContext, useEffect, useState } from 'react';
import ThemeSidebar from './components/ThemeSidebar';

const ThemeContext = createContext();

const theme = {
  colors: {
    primary: String(localStorage.getItem('primaryColor')),
    light: String('#eeeeee'),
    dark: String('#0d0d0d'),
  },
  updateColors: async (value) => {
    if (value) {
      localStorage.setItem('primaryColor', value);
    } else {
      localStorage.setItem('primaryColor', '#1847e2');
    }
  },
};

const ThemeProvider = ({ children }) => {
  const [state, setState] = useState({
    colorPrimary: '' || localStorage.getItem('primaryColor'),
  });

  useEffect(() => {
    theme.updateColors(String(state.colorPrimary));
  }, [state.colorPrimary]);

  return (
    <ThemeContext.Provider value={{ state, setState }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext, theme, ThemeSidebar };
