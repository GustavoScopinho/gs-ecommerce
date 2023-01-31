import { createTheme } from '@mui/material/styles'
export const theme = createTheme({
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(',')
  },
  palette: {
    secondary: {
      main: '#BFBFBF'
    }
  },
  breakpoints: {
    values: {
      xs: 420,
      sm: 700,
      md: 900,
      lg: 1200,
      xl: 1536
    }
  }
})
