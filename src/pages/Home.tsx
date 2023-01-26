import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Footer } from '../components/footer/Footer'
import { Navbar } from '../components/navbar/Navbar'
import { Section } from '../components/section/Section'
import { Container } from './Home.styled'

const theme = createTheme({
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(',')
  }
})

export const Home = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <Navbar />
          <Section />
          <Footer />
        </Container>
      </ThemeProvider>
    </>
  )
}
