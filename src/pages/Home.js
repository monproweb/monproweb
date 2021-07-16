import React from "react";
import react from "../images/react.svg";
import nature from "../images/nature.svg";
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

const Home = () => {
  return (
    <ThemeProvider>
      <HelmetProvider>
        <div className="Mpw-home">
          <Helmet>
            <meta charSet="utf-8" />
            <title>MPW | Mon Pro Web</title>
            <link rel="canonical" href="https://monproweb.io/a-propos" />
          </Helmet>

          <BaseStyles>
            <Box m={4}>
              <Box p={3}>
                <img
                  src={react}
                  alt="React"
                  className="Mpw-undraw hover-grow"
                />
              </Box>

              <Heading as="h1" mb={2} className="anim-fade-in">
                Je construis des applications Web et mobiles.
              </Heading>

              <Box p={3}>
                <Text as="p" mr={3} className="anim-fade-up">
                  Développer votre visibilité en ligne à l'aide d'applications
                  performantes qui suivent les bonnes pratiques.
                </Text>
                <img
                  src={nature}
                  alt="React"
                  className="Mpw-undraw hover-grow"
                />
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

export default Home;
