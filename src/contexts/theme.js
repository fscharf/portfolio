import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react'
import { useStorage } from '../hooks/use-storage'
import { theme } from '../theme'

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const { getItem, setItem } = useStorage()

  const [primaryColor, setPrimaryColor] = useState(
    getItem('primaryColor') || theme.colors.primary
  )

  const updateColor = useCallback(
    value => {
      if (value) {
        return setItem('primaryColor', value)
      }
      setItem('primaryColor', theme.colors.primary)
    },
    [setItem]
  )

  useEffect(() => {
    updateColor(primaryColor)
  }, [primaryColor, updateColor])

  return (
    <ThemeContext.Provider value={{ primaryColor, setPrimaryColor }}>
      {children}
    </ThemeContext.Provider>
  )
}

const useTheme = () => useContext(ThemeContext)

export { ThemeProvider, useTheme }
