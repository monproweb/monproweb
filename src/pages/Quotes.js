import React from "react";
import theworldismine from "../images/the_world_is_mine.svg";
import {
  ThemeProvider,
  BaseStyles,
  Box,
  Heading,
  Text,
  ProgressBar,
  CounterLabel,
} from "@primer/components";
import Footer from "../components/Footer";
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
                <img
                  src={theworldismine}
                  alt="The world is mine"
                  className="Mpw-undraw hover-grow"
                />
              </Box>

              <Heading as="h1" mb={2} className="anim-fade-in">
                Citations
              </Heading>

              <Box p={3}>
                <Text mr={3}>Relay avec Express</Text>
              </Box>

              <Box p={3}>
                <Text mr={3}>
                  EcoIndex <CounterLabel>A</CounterLabel>
                </Text>
                <ProgressBar progress={80} inline width="100px" />
              </Box>
            </Box>

            <Footer />
          </BaseStyles>
        </div>
      </HelmetProvider>
    </ThemeProvider>
  );
};

export default Quotes;
