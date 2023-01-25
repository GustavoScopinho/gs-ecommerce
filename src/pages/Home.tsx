import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Navbar } from '../components/navbar/Navbar'

const theme = createTheme({
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(',')
  }
})

export const Home = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <h1>Home</h1>
      </ThemeProvider>
    </>
  )
}
