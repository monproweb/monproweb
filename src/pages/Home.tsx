/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, PageLayout, Heading, Text } from '@primer/react';

function Home() {
  return (
    <>
      <PageLayout>
        <PageLayout.Content aria-label="content">
          <Box p={3}>
            <Heading sx={{ fontSize: 42, mb: 2 }}>I build Web and mobile applications.</Heading>
          </Box>
        </PageLayout.Content>
        <PageLayout.Footer aria-label="footer">
          <Box>
            <Text />
          </Box>
        </PageLayout.Footer>
      </PageLayout>
    </>
  );
}

export default Home;
