import { Box, PageLayout, Heading, Text, Avatar } from '@primer/react'
import nft from '../images/nft.webp'

function Home() {
  return (
    <>
<PageLayout>
  <PageLayout.Content aria-label="content">
    <Box p={3}>
      <Avatar src={nft} size="300" alt='Non Fungible Token' />
    </Box>
    <Box p={3}>
      <Heading sx={{ fontSize: 42, mb: 2 }}>I build Web and mobile applications.</Heading>
    </Box>          
  </PageLayout.Content>
  <PageLayout.Footer aria-label="footer">
    <Box label="Footer" height={64}>
      <Text>
              
      </Text>
    </Box>
  </PageLayout.Footer>
</PageLayout>
    </>
  );
}

export default Home;