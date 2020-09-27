import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.scss";
import Emoji from "a11y-react-emoji";
import {
  LogoGithubIcon,
  ZapIcon,
  BookIcon,
  VerifiedIcon,
  DownloadIcon,
  TerminalIcon,
  CodeIcon,
  MarkGithubIcon,
} from "@primer/octicons-react";
import {
  BaseStyles,
  Box,
  Heading,
  Button,
  Text,
  ButtonPrimary,
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
            <Link className="Header-link" to="/equipe">
              L'équipe
            </Link>
          </div>
        </div>
        <Box m={4}>
          <img src={logo} className="App-logo" alt="logo" />
        </Box>
        <Switch>
          <Route path="/equipe">
            <Team />
          </Route>
          <Route path="/a-propos">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <div className="App-footer">
        <Box m={4}>
          <Text mr={3}>
            Réalisé avec <Emoji symbol="💕" label="amour" /> par Mon Pro Web
          </Text>
        </Box>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="App-home">
      <Helmet>
        <meta charSet="utf-8" />
        <title>MPW | Mon Pro Web</title>
        <link rel="canonical" href="https://monproweb.com/a-propos" />
      </Helmet>
      <BaseStyles>
        <Box m={4}>
          <Heading className="anim-fade-up" mb={2}>
            Je construis des applications Web et mobile.
          </Heading>
          <p>
            <Text className="anim-fade-in" mr={3}>
              Bienvenue sur Mon Pro Web, je vous aide à développer votre
              visibilité en ligne à l'aide d'applications performantes qui
              suivent les bonnes pratiques.
            </Text>
          </p>
          <Box m={4}>
            <MarkGithubIcon aria-label="GitHub" size={100} />
          </Box>
          <Box m={4}>
            <Button
              as="a"
              className="App-link"
              href="https://facebook.com/monproweb/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Page Facebook
            </Button>
          </Box>
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
          <Heading className="anim-fade-up" mb={2}>
            À-propos
          </Heading>
        </Box>
        <Box m={4}>
          <Text className="anim-fade-in" mr={3}>
            Je suis actuellement en train d'apprendre Python.
          </Text>
        </Box>
        <Box m={4}>
          <div className="anim-pulse">
            <TerminalIcon size={100} />
          </div>
        </Box>
        <Box m={4}>
          <div className="anim-pulse">
            <CodeIcon size={100} />
          </div>
        </Box>
        <Box m={4}>
          <Button as="a" href="mailto:contact@monproweb.com">
            Contactez-moi
          </Button>
        </Box>
      </BaseStyles>
    </div>
  );
}

function Team() {
  return (
    <div className="App-equipe">
      <Helmet>
        <meta charSet="utf-8" />
        <title>MPW | L'équipe</title>
        <link rel="canonical" href="https://monproweb.com/equipe" />
      </Helmet>
      <BaseStyles>
        <Box m={4}>
          <Heading className="anim-fade-up" mb={2}>
            Un développeur : Thomas Erhel{" "}
            <VerifiedIcon size={24} arial-label="Icone vérifié" />
          </Heading>
        </Box>
        <Box m={4}>
          <Text className="anim-fade-in" mr={3}>
            Passioné par le Web. #zeroknowledge
          </Text>
        </Box>
        <Box m={4}>
          <a href="https://github.com/ThomasErhel/">
            <LogoGithubIcon size="large" aria-label="GitHub" />
          </a>
        </Box>
        <Box m={4}>
          <Button
            as="a"
            className="App-link"
            href="https://blog.monproweb.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ZapIcon aria-label="Blog" /> Blog
          </Button>
        </Box>
        <Box m={4}>
          <Button
            as="a"
            className="App-link"
            href="https://docs.monproweb.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BookIcon aria-label="Documentation" /> Docs
          </Button>
        </Box>
        <Box m={4}>
          <ButtonPrimary
            as="a"
            className="App-link"
            href="https://ubuntu.com/download/desktop"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DownloadIcon aria-label="Ubuntu" /> Télécharger ubuntu
          </ButtonPrimary>
        </Box>
      </BaseStyles>
    </div>
  );
}
