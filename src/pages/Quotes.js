import React from "react";
import {
  ThemeProvider,
  BaseStyles,
  Box,
  Heading,
  Text,
  ProgressBar,
  CounterLabel,
  CircleBadge,
} from "@primer/components";
import {ZapIcon} from '@primer/octicons-react'
import { Helmet, HelmetProvider } from "react-helmet-async";

function Quotes() {
  return (
    <ThemeProvider>
      <HelmetProvider>
        <div className="Mpw-quotes">
          <Helmet>
            <meta charSet="utf-8" />
            <title>MPW | Citations</title>
            <link rel="canonical" href="https://monproweb.io/citations" />
          </Helmet>

          <BaseStyles>
            <Box m={4}>
              <Box p={3}>
                <CircleBadge>
                  <CircleBadge.Icon icon={ZapIcon} />
                </CircleBadge>
              </Box>

              <Heading as="h1" mb={2}>
                Citations
              </Heading>

              <Box p={3}>
                <Text mr={3}>Relay avec Express</Text>
              </Box>

              <Box p={3}>
                <Text mr={3}>
                  EcoIndex <CounterLabel>A</CounterLabel>
                </Text>
                <ProgressBar progress={77} inline width="100px" />
              </Box>
            </Box>

          </BaseStyles>
        </div>
      </HelmetProvider>
    </ThemeProvider>
  );
};

export default Quotes;
