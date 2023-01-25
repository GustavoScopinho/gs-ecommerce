import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Navbar } from '../components/navbar/Navbar'
import { Section } from '../components/section/Section'

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
        <Section />
      </ThemeProvider>
    </>
  )
}
