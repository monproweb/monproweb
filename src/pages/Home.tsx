/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, PageLayout, Heading, Text } from '@primer/react';
import Ethereum from '../components/Ethereum';
import { useMemo, useCallback } from 'react';
import React from 'react';

const MemoizedEthereum = React.memo(Ethereum);

function Home() {
  const expensiveCalculation = useMemo(() => {
    // Expensive calculation goes here
  }, [] as readonly any[]);

  const callback = useCallback(() => {
    // Callback function goes here
  }, [] as readonly any[]);

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
