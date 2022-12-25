import { Box, PageLayout, Heading, Text } from '@primer/react';
import Ethereum from '../components/Ethereum';
import { useMemo, useCallback } from 'react';
import React from 'react';

const MemoizedEthereum = React.memo(Ethereum);

function Home() {
  const expensiveCalculation = useMemo(() => {
    // Expensive calculation goes here
    return 'some expensive calculation result';
  }, []); // Make sure to pass an array literal here

  const callback = useCallback(() => {
    // Callback function goes here
  }, []); // Make sure to pass an array literal here

  return (
    <>
      <PageLayout>
        <PageLayout.Content aria-label="content">
          <Box p={3}>
            <Heading sx={{ fontSize: 42, mb: 2 }}>I build Web and mobile applications.</Heading>
          </Box>
          <Box p={3}>
            <MemoizedEthereum callback={callback} />
          </Box>
          <Box p={3}>
            <Text>{expensiveCalculation}</Text>
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
