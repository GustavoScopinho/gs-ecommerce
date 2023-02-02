import { Container } from './Home.styled'

import { ThemeProvider } from '@mui/material/styles'
import { Footer } from '../../components/footer/Footer'
import { theme } from '../../shared/utils/theme'
import { Navbar } from '../../components/navbar/Navbar'
import { Section } from '../../components/section/Section'

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
