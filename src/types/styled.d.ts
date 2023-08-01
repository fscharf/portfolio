import 'styled-components'

interface IColor {
  primary: string
  light: string
  light400: string
  light600: string
  light800: string
  dark: string
  dark400: string
  dark600: string
  dark800: string
}

interface ISize {
  nano: string
  xxxs: string
  xxs: string
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
  xxl: string
  xxxl: string
  full: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: IColor
    sizes: ISize
  }
}
