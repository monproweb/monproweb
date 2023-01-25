/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, PageLayout, Heading, Button } from '@primer/react';
import Footer from '../components/Footer';
import { RocketIcon } from '@primer/octicons-react'
import '../styles/Home.scss';
import Programming from '../images/programming.svg'

function Home() {
  return (
    <Box p={3} bg="canvas.default" className='section'>
      <PageLayout>
        <PageLayout.Content aria-label="content">
          <Box p={3}>
            <img className='programming' src={Programming} alt="programming" />
          </Box>
          <Box p={3}>
            <Heading sx={{ fontSize: 42, mb: 2 }}>I build Web and mobile applications.</Heading>
          </Box>
          <Box p={3}>
            <Button leadingIcon={RocketIcon} aria-label="Get in touch">Get in touch</Button>
          </Box>
        </PageLayout.Content>
        <Footer />
      </PageLayout>
    </Box>
  );
}

export default Home;
