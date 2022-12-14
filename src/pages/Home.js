import { Box, PageLayout, Heading, Text, Avatar } from '@primer/react'
import nft from '../images/nft.png'
import cat from '../images/cat.png'
import ship from '../images/ship.png'
import '../styles/Home.scss'

function Home() {
  return (
    <>
<PageLayout>
  <PageLayout.Header aria-label="header">
          <Box
            label="Header"
            maxWidth="1280px"
            minHeight="100vh"
            noOfLines={1}
          >
            <Box p={3}>
              <Avatar src={nft} size="xl" />
            </Box>
            <Box p={3}>
              <Heading sx={{ fontSize: 42, mb: 2 }}>I build Web and mobile applications.</Heading>
              </Box>
            </Box>
        </PageLayout.Header>
  <PageLayout.Content aria-label="content">
          <Box label="Content" maxWidth="1280px" minHeight="100vh" sx={{ fontSize: 20, mb: 2 }}>
            <Box marginBottom={2} className='Avatar'>
              <Avatar src={cat} size="100" />
              </Box>
            <Box marginBottom={2}>
            <Text>
              Monproweb is a startup that specializes in building web and mobile applications with a focus on sustainability and the use of Ethereum blockchain technology. Our team of experienced developers utilizes the React framework to create intuitive and user-friendly apps that deliver powerful functionality.
              </Text>
            </Box>
            <Box marginBottom={2}>
            <Text>
              As an eco-friendly company, we prioritize the use of clean and renewable technologies in all aspects of our work. This not only benefits the environment, but also allows us to provide our clients with cutting-edge solutions that are built to last.
              </Text>
            </Box>
            <Box marginBottom={2} className='Avatar'>
              <Avatar src={ship} size="100" />
              </Box>
            <Box marginBottom={2}>
            <Text>
              In addition to our focus on sustainability, we also have extensive experience with Ethereum blockchain technology. This allows us to build applications that are secure, transparent, and highly scalable. Whether you need a simple web application or a complex decentralized application, we have the skills and expertise to deliver the solution you need.
              </Text>
            </Box>
            <Box>
            <Text>
              At Monproweb, we pride ourselves on our ability to deliver high-quality web and mobile solutions that meet the unique needs of each of our clients. Contact us today to discuss your project and learn more about how we can help bring your vision to life.
              </Text>
              </Box>
          </Box>
  </PageLayout.Content>
  <PageLayout.Footer aria-label="footer">
          <Box label="Footer" height={64}>
            <Text></Text>
          </Box>
  </PageLayout.Footer>
</PageLayout>  
    </>
  );
}

export default Home;