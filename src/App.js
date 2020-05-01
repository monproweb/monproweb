import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import logo from "./logo.svg";
import "./App.scss";
import Emoji from "a11y-react-emoji";
import Octicon, { Terminal, MarkGithub } from "@primer/octicons-react";
import {
  BaseStyles,
  Box,
  Heading,
  Button,
  Text,
  ProgressBar,
} from "@primer/components";
import { Helmet } from "react-helmet";
import Amplify, { Analytics } from "aws-amplify";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);
Analytics.enable();

export default function App() {
  return (
    <div className="App">
      <Router>
        <div className="Header">
          <div className="Header-item">
            <Link className="Header-link" to="/">
              Mon Pro Web
            </Link>
          </div>
          <div className="Header-item">
            <Link className="Header-link" to="/a-propos">
              À-propos
            </Link>
          </div>
          <div className="Header-item">
            <Link className="Header-link" to="/sujets">
              Les sujets
            </Link>
          </div>
        </div>
        <Switch>
          <Route path="/a-propos">
            <About />
          </Route>
          <Route path="/sujets">
            <Topics />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

function Home() {
  return (
    <div className="App-home">
      <Helmet>
        <meta charSet="utf-8" />
        <title>MPW | Mon Pro Web</title>
        <link rel="canonical" href="https://monproweb.com/about" />
      </Helmet>
      <BaseStyles>
        <Box m={4}>
          <img src={logo} className="App-logo" alt="logo" />
          <Heading mb={2}>
            Nous construisons des applications Web et mobiles.
          </Heading>
          <p>
            Bienvenue sur Mon Pro Web, nous vous aidons à développer votre
            visibilité en ligne à l'aide d'applications performantes qui suivent
            les bonnes pratiques en matière d'accessibilité.{" "}
            <Emoji symbol="🚀" label="fusée" />
            <button>
              <Octicon icon={Terminal} ariaLabel="Terminal" />
            </button>{" "}
          </p>
          <Button
            as="a"
            className="App-link"
            href="https://facebook.com/monproweb/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Notre page Facebook
          </Button>
          <p>
            Réalisé avec <Emoji symbol="💕" label="amour" /> par Mon Pro Web
          </p>
        </Box>
      </BaseStyles>
    </div>
  );
}

function About() {
  return (
    <div className="App-a-propos">
      <Helmet>
        <meta charSet="utf-8" />
        <title>MPW | À-propos</title>
        <link rel="canonical" href="https://monproweb.com/a-propos" />
      </Helmet>
      <BaseStyles>
        <Box m={4}>
          <img src={logo} className="App-logo" alt="logo" />
          <Heading mb={2}>À-propos</Heading>
          <p>
            Nous faisons également du dépannage Informatique.{" "}
            <Emoji symbol="🌍" label="Globe montrant l'Europe-Afrique" />
            <Octicon icon={MarkGithub} />{" "}
          </p>
          <>
            <p>
              <Text mr={3}>0 sur 8</Text>
              <ProgressBar progress={0} inline width="100px" />
            </p>
          </>
          <Button
            as="a"
            className="App-link"
            href="https://github.com/ThomasErhel/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Button>
        </Box>
      </BaseStyles>
    </div>
  );
}

function Topics() {
  let match = useRouteMatch();

  return (
    <div className="App-sujets">
      <Helmet>
        <meta charSet="utf-8" />
        <title>MPW | Les sujets</title>
        <link rel="canonical" href="https://monproweb.com/sujets" />
      </Helmet>
      <h2>Les sujets</h2>

      <ul>
        <li>
          <Link className="App-link" to={`${match.url}/components`}>
            Components
          </Link>
        </li>
        <li>
          <Link className="App-link" to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Veuillez sélectionner un sujet.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>ID de sujet demandé: {topicId}</h3>;
}
