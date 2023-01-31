import { Footer } from '../components/footer/Footer'
import { Navbar } from '../components/navbar/Navbar'
import { Section } from '../components/section/Section'
import { Container } from './Home.styled'
import { theme } from '../shared/utils/theme'
import { ThemeProvider } from '@mui/material/styles'

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
