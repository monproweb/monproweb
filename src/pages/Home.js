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
import { DeviceDesktopIcon, DeviceMobileIcon } from "@primer/octicons-react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <ThemeProvider>
      <HelmetProvider>
        <div className="Mpw-home">
          <Helmet>
            <meta charSet="utf-8" />
            <title>MPW | Mon Pro Web</title>
            <link rel="canonical" href="https://monproweb.io/" />
          </Helmet>

          <BaseStyles>
            <Box m={4}>
              <Heading as="h1" mb={2}>
                Je construis des applications Web et mobiles.
              </Heading>

              <Box p={3}>
                <Text as="p" mr={3}>
                  Développer votre visibilité en ligne à l'aide d'applications
                  performantes qui suivent les bonnes pratiques.
                </Text>
              </Box>

              <Box p={3}>
                <CircleBadge>
                  <CircleBadge.Icon icon={DeviceDesktopIcon} />
                </CircleBadge>
              </Box>
              <Box p={3}>
                <CircleBadge>
                  <CircleBadge.Icon icon={DeviceMobileIcon} />
                </CircleBadge>
              </Box>

              <Box p={3}>
                <Text mr={3}>
                  EcoIndex <CounterLabel>A</CounterLabel>
                </Text>
                <ProgressBar progress={78} inline width="100px" />
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
