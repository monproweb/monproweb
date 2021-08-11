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
            <meta property="og:url" content="https://monproweb.io" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="MPW | Mon Pro Web" />
            <meta
              property="og:description"
              content="Je construis des applications Web et mobiles."
            />
            <meta
              property="og:image"
              content="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Logo_Mon_Pro_Web.png/1077px-Logo_Mon_Pro_Web.png"
            />
            <meta property="twitter:card" content="summary" />
            <meta property="twitter:creator" content="Thomas Erhel" />
            <meta property="twitter:title" content="MPW | Mon Pro Web" />
            <meta
              property="twitter:description"
              content="Je construis des applications Web et mobiles."
            />
            <meta
              property="twitter:image"
              content="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Logo_Mon_Pro_Web.png/1077px-Logo_Mon_Pro_Web.png"
            />
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
              <Box display="flex">
                <Box p={3} flexGrow={1}></Box>
                <Box p={3} flexGrow={1}>
                  <CircleBadge>
                    <CircleBadge.Icon icon={DeviceDesktopIcon} />
                  </CircleBadge>
                </Box>
                <Box p={3} flexGrow={1}>
                  <CircleBadge>
                    <CircleBadge.Icon icon={DeviceMobileIcon} />
                  </CircleBadge>
                </Box>
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
