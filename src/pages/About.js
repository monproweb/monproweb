import React from "react";
import {
  ThemeProvider,
  StateLabel,
  BaseStyles,
  Box,
  Heading,
  Text,
  Link,
  Spinner,
  CounterLabel,
  ProgressBar,
  CircleBadge,
} from "@primer/components";
import { MortarBoardIcon } from "@primer/octicons-react";
import { FaReact } from "react-icons/fa";
import { Helmet, HelmetProvider } from "react-helmet-async";
// eslint-disable-next-line no-unused-vars
import fetchGraphQL from "../fetchGraphQL";
import graphql from "babel-plugin-relay/macro";
import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
} from "react-relay/hooks";
import RelayEnvironment from "../RelayEnvironment";
import Footer from "../components/Footer";

const { Suspense } = React;

// Define a query
const RepositoryNameQuery = graphql`
  query AboutRepositoryNameQuery {
    repository(owner: "monproweb", name: "monproweb") {
      name
      updatedAt
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
            <link rel="canonical" href="https://monproweb.io/à-propos" />
          </Helmet>

          <BaseStyles>
            <Box m={4}>
              <Box p={3}>
                <CircleBadge>
                  <CircleBadge.Icon icon={MortarBoardIcon} />
                </CircleBadge>
              </Box>

              <Box p={3}>
                <Heading as="h1" mb={2}>
                  À-propos
                </Heading>
                <Text as="p" mr={3}>
                  Actuellement en train d'apprendre React.
                </Text>
                <StateLabel status="pullOpened">
                  {data.repository.name}
                </StateLabel>
              </Box>

              <Box p={3}>
                <FaReact size={256} color="#61DBFB" />
              </Box>

              <Box p={3}>
                <Link
                  mb={1}
                  href="https://coursera.org/share/7e3de15dc9292c8949d518a86bb8c640"
                >
                  Google IT Automation with Python
                </Link>
              </Box>

              <Box p={3}>
                <Link
                  mb={1}
                  href="https://www.freecodecamp.org/certification/thomaserhel/full-stack"
                >
                  Legacy Full Stack
                </Link>
              </Box>

              <Box p={3}>
                <Heading as="h2" mb={2}>
                  Dernière mise à jour :
                </Heading>
                <Text as="p" mr={3}>
                  {data.repository.updatedAt}
                </Text>
              </Box>

              <Box p={3}>
                <Text mr={3}>
                  EcoIndex <CounterLabel>A</CounterLabel>
                </Text>
                <ProgressBar progress={77} inline width="100px" />
              </Box>
            </Box>

            <Footer />
          </BaseStyles>
        </div>
      </HelmetProvider>
    </ThemeProvider>
  );
}

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
