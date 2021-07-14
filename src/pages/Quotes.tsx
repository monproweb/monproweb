/* eslint-disable @typescript-eslint/no-unused-vars */
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
  Button,
  Spinner,
} from "@primer/components";
import { Get } from "react-axios";
import Footer from "../components/Footer";
import { Helmet, HelmetProvider } from "react-helmet-async";

const axios = require("axios").default;

const Quotes = () => {
  return (
    <ThemeProvider>
      <HelmetProvider>
        <div className="Mpw-quotes">
          <Helmet>
            <meta charSet="utf-8" />
            <title>MPW | Mon Pro Web</title>
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
                <Get url="http://quotes.stormconsultancy.co.uk/random.json">
                  {(
                    error: {
                      message:
                        | string
                        | number
                        | boolean
                        | {}
                        | React.ReactElement<
                            any,
                            string | React.JSXElementConstructor<any>
                          >
                        | React.ReactNodeArray
                        | React.ReactPortal
                        | null
                        | undefined;
                    },
                    response: {
                      data: {
                        message:
                          | string
                          | number
                          | boolean
                          | {}
                          | React.ReactElement<
                              any,
                              string | React.JSXElementConstructor<any>
                            >
                          | React.ReactNodeArray
                          | React.ReactPortal
                          | null
                          | undefined;
                      };
                    } | null,
                    isLoading: any,
                    makeRequest: (arg0: {
                      params: { reload: boolean } | { refresh: boolean };
                    }) => void,
                    axios: any
                  ) => {
                    if (error) {
                      return (
                        <Text as="p" mr={3} className="anim-fade-up">
                          Something bad happened: {error.message}{" "}
                          <Button
                            onClick={() =>
                              makeRequest({ params: { reload: true } })
                            }
                          >
                            Retry
                          </Button>
                        </Text>
                      );
                    } else if (isLoading) {
                      return <Spinner size="small" />;
                    } else if (response !== null) {
                      return (
                        <Text as="p" mr={3} className="anim-fade-up">
                          {response.data.message}{" "}
                          <Button
                            onClick={() =>
                              makeRequest({ params: { refresh: true } })
                            }
                          >
                            Refresh
                          </Button>
                        </Text>
                      );
                    }
                    return (
                      <Text as="p" mr={3} className="anim-fade-up">
                        Default message before request is made.
                      </Text>
                    );
                  }}
                </Get>
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
