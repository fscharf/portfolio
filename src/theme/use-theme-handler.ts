import { useLocalStorage } from 'usehooks-ts'
import { theme } from './theme'

export const useThemeHandler = () => {
  const [primaryColor, setPrimaryColor] = useLocalStorage(
    'theme:primary',
    theme.colors.primary
  )

  return { primaryColor, setPrimaryColor }
}
