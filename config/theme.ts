import { rgba } from 'polished'

export const theme = {
  primary: '#434AFF',
  secondary: '#42DDE7',
  danger: '#EF5F5F',
  warning: '#F4C54C',
  success: '#6FCF97',
  black: '#0D0F33',
  white: '#FFFFFF',
  get dark() {
    return [
      rgba(theme.black, .85),
      rgba(theme.black, .75),
      rgba(theme.black, .65),
      rgba(theme.black, .55),
      rgba(theme.black, .45),
      rgba(theme.black, .35),
      rgba(theme.black, .25),
      rgba(theme.black, .15),
      rgba(theme.black, .08),
    ]
  },
  get light() {
    return [
      rgba(theme.black, .85),
      rgba(theme.black, .75),
      rgba(theme.black, .65),
      rgba(theme.black, .55),
      rgba(theme.black, .45),
      rgba(theme.black, .35),
      rgba(theme.black, .25),
      rgba(theme.black, .15),
      rgba(theme.black, .08),
    ]
  },
  get boxShadow() {
    return `0 4px 15px ${theme.dark[8]}`
  }
}
