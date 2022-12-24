import { Box, PageLayout, Heading, Text, Flash } from '@primer/react'
import Ethereum from '../components/Ethereum';

function Home() {
  return (
    <>
<PageLayout>
  <PageLayout.Content aria-label="content">
    <Box p={3}>
      <Heading sx={{ fontSize: 42, mb: 2 }}>I build Web and mobile applications.</Heading>
    </Box>
    <Box p={3}>
      <Ethereum />
    </Box>
  </PageLayout.Content>
  <PageLayout.Footer aria-label="footer">
    <Box>
      <Text>
              
      </Text>
    </Box>
  </PageLayout.Footer>
</PageLayout>
    </>
  );
}

export default Home;