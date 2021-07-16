import React from "react";
import developeractivity from "../images/developer_activity.svg";
import google from "../images/certificat_google.svg";
import legacyfullstack from "../images/certificat_legacy_full_stack.svg";
import {
  ThemeProvider,
  StateLabel,
  BaseStyles,
  Box,
  Heading,
  Text,
  Link,
  Grid,
  Spinner,
  CounterLabel,
  ProgressBar,
} from "@primer/components";
import Footer from "../components/Footer";
import {
  FaReact,
  FaNodeJs,
  FaUbuntu,
  FaAws,
  FaApple,
  FaAndroid,
  FaStackOverflow,
  FaGithub,
  FaGoogle,
  FaWikipediaW,
  FaCcStripe,
  FaCcPaypal,
} from "react-icons/fa";
import {
  SiJavascript,
  SiGraphql,
  SiMdnwebdocs,
  SiJest,
  SiVisualstudiocode,
  SiTed,
  SiFlutter,
} from "react-icons/si";
import { Helmet, HelmetProvider } from "react-helmet-async";
// eslint-disable-next-line no-unused-vars
import fetchGraphQL from '../fetchGraphQL';
import graphql from 'babel-plugin-relay/macro';
import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
} from 'react-relay/hooks';
import RelayEnvironment from '../RelayEnvironment';

const { Suspense } = React;

// Define a query
const RepositoryNameQuery = graphql`
  query AboutRepositoryNameQuery {
    repository(owner: "monproweb", name: "monproweb") {
      name
    }
  }
`;

// Immediately load the query as our app starts. For a real app, we'd move this
// into our routing configuration, preloading data as we transition to new routes.
const preloadedQuery = loadQuery(RelayEnvironment, RepositoryNameQuery, {
  /* query variables */
});

// Inner component that reads the preloaded query results via `usePreloadedQuery()`.
// This works as follows:
// - If the query has completed, it returns the results of the query.
// - If the query is still pending, it "suspends" (indicates to React that the
//   component isn't ready to render yet). This will show the nearest <Suspense>
//   fallback.
// - If the query failed, it throws the failure error. For simplicity we aren't
//   handling the failure case here.
function About(props) {
  const data = usePreloadedQuery(RepositoryNameQuery, props.preloadedQuery);

  return (
    <ThemeProvider>
      <HelmetProvider>
        <div className="Mpw-about">
          <Helmet>
            <meta charSet="utf-8" />
            <title>MPW | À-propos</title>
            <link rel="canonical" href="https://monproweb.io/a-propos" />
          </Helmet>

          <BaseStyles>
            <Box m={4}>
              <Box p={3}>
                <img
                  src={developeractivity}
                  alt="Developer Activity"
                  className="Mpw-undraw hover-grow"
                />
              </Box>

              <Heading as="h1" mb={2} className="anim-fade-in">
                À-propos
              </Heading>

              <Box p={3}>
                <Text as="p" mr={3} className="anim-fade-up">
                  Actuellement en train d'apprendre React.
                </Text>
                <StateLabel status="pullOpened">
                  {data.repository.name}
                </StateLabel>
              </Box>

              <Grid gridTemplateColumns="repeat(2, auto)" gridGap={3}>
                <Box p={3} className="hover-grow">
                  <SiJavascript size={42} /> <SiVisualstudiocode size={42} />
                </Box>

                <Box p={3} className="hover-grow">
                  <FaReact size={42} className="anim-rotate" color="#61DBFB" />
                  <SiFlutter size={42} /> <SiJest size={42} />{" "}
                  <FaNodeJs size={42} /> <SiGraphql size={42} />{" "}
                  <FaUbuntu size={42} color="#dd4814" /> <FaAws size={42} />
                </Box>
              </Grid>

              <Grid gridTemplateColumns="repeat(2, auto)" gridGap={3}>
                <Box p={3} className="hover-grow">
                  <FaGithub size={42} /> <FaStackOverflow size={42} />
                  <SiMdnwebdocs size={42} /> <FaGoogle size={42} />
                 <FaWikipediaW size={42} /> <SiTed size={42} />
                </Box>

                <Box p={3} className="hover-grow">
                  <FaApple size={42} /> <FaAndroid size={42} />
                </Box>
              </Grid>

              <Box p={3} className="hover-grow">
                <FaCcStripe size={42} /> <FaCcPaypal size={42} />
              </Box>

              <Box p={3} className="hover-grow">
                <img
                  src={google}
                  alt="Google IT Automation with Python"
                  className="Mpw-certificat"
                />
                <Box p={3}>
                  <Link
                    mb={1}
                    href="https://coursera.org/share/7e3de15dc9292c8949d518a86bb8c640"
                  >
                    Google IT Automation with Python
                  </Link>
                </Box>
              </Box>

              <Box p={3} className="hover-grow">
                <img
                  src={legacyfullstack}
                  alt="Legacy Full Stack"
                  className="Mpw-certificat"
                />
                <Box p={3}>
                  <Link
                    mb={1}
                    href="https://www.freecodecamp.org/certification/thomaserhel/full-stack"
                  >
                    Legacy Full Stack
                  </Link>
                </Box>
              </Box>

              <Box p={3}>
                <Text mr={3}>
                  EcoIndex <CounterLabel>B</CounterLabel>
                </Text>
                <ProgressBar progress={72} inline width="100px" />
              </Box>
            </Box>

            <Footer />
          </BaseStyles>
        </div>
      </HelmetProvider>
    </ThemeProvider>
  );
};

// The above component needs to know how to access the Relay environment, and we
// need to specify a fallback in case it suspends:
// - <RelayEnvironmentProvider> tells child components how to talk to the current
//   Relay Environment instance
// - <Suspense> specifies a fallback in case a child suspends.
function AboutRoot(props) {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={<Spinner />}>
        <About preloadedQuery={preloadedQuery} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default AboutRoot;