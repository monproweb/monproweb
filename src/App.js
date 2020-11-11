import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import logo from "./logo.svg";
import "./App.scss";
import {
  LogoGithubIcon,
  ZapIcon,
  BookIcon,
  CheckIcon,
  DownloadIcon,
  TerminalIcon,
  CodeIcon,
  RocketIcon,
} from "@primer/octicons-react";
import {
  Header,
  StyledOcticon,
  Avatar,
  CircleOcticon,
  ProgressBar,
  StateLabel,
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
        <Header>
          <Header.Item>
            <Header.Link as={NavLink} to="/" fontSize={2}>
              <StyledOcticon icon={RocketIcon} size={32} mr={2} />
              <span>Mon Pro Web</span>
            </Header.Link>
          </Header.Item>
          <Header.Item>
            <Header.Link as={NavLink} to="/a-propos">
              À-propos
            </Header.Link>
          </Header.Item>
          <Header.Item>
            <Header.Link as={NavLink} to="/equipe">
              L'équipe
            </Header.Link>
          </Header.Item>
          <Header.Item mr={0}>
            <Avatar
              src="https://avatars3.githubusercontent.com/u/16942870?s=460&u=7fd22d4450ad09c4a062c06d91f05247eeed00f9&v=4"
              size={20}
              square
              alt="@ThomasErhel"
            />
          </Header.Item>
        </Header>
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
    </div>
  );
}

function Home() {
  return (
    <div className="App-home">
      <Helmet>
        <meta charSet="utf-8" />
        <title>MPW | Mon Pro Web</title>
        <link rel="canonical" href="https://monproweb.io/a-propos" />
      </Helmet>
      <BaseStyles>
        <Box m={4}>
          <Heading as="h1" mb={2}>
            Je construis des applications Web et mobile.
          </Heading>
          <Text as="p" mr={3}>
            Bienvenue sur Mon Pro Web, je vous aide à développer votre
            visibilité en ligne à l'aide d'applications performantes qui suivent
            les bonnes pratiques.
          </Text>
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
        <link rel="canonical" href="https://monproweb.io/a-propos" />
      </Helmet>
      <BaseStyles>
        <Box m={4}>
          <Heading as="h1" mb={2}>
            À-propos
          </Heading>
        </Box>
        <Box m={4}>
          <Text as="p" mr={3}>
            Je suis actuellement en train d'apprendre Python.
          </Text>
        </Box>
        <Box m={4}>
          <StateLabel status="issueOpened">Open</StateLabel>
        </Box>
        <Box m={4}>
          <Text mr={3}>3 sur 6</Text>
          <ProgressBar progress={50} inline width="100px" />
        </Box>
        <Box m={4}>
          <TerminalIcon aria-label="Icône terminal" size={100} />
        </Box>
        <Box m={4}>
          <CodeIcon aria-label="Icône code" size={100} />
        </Box>
        <Box m={4}>
          <Button as="a" href="mailto:thomas.erhel@gmail.com">
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
        <link rel="canonical" href="https://monproweb.io/equipe" />
      </Helmet>
      <BaseStyles>
        <Box m={4}>
          <Heading as="h1" mb={2}>
            Un développeur : Thomas Erhel
            <CircleOcticon
              icon={CheckIcon}
              size={32}
              bg="green.5"
              color="white"
            />
          </Heading>
        </Box>
        <Box m={4}>
          <Text as="p" mr={3}>
            #zeroknowledge
          </Text>
        </Box>
        <Box m={4}>
          <a href="https://github.com/ThomasErhel/">
            <LogoGithubIcon size="large" aria-label="Icône logo GitHub" />
          </a>
        </Box>
        <Box m={4}>
          <Button
            as="a"
            className="App-link"
            href="https://blog.monproweb.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ZapIcon aria-label="Icône éclair" /> Blog
          </Button>
        </Box>
        <Box m={4}>
          <Button
            as="a"
            className="App-link"
            href="https://docs.monproweb.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BookIcon aria-label="Icône livre" /> Docs
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
            <DownloadIcon aria-label="Icône télécharger" /> Télécharger ubuntu
          </ButtonPrimary>
        </Box>
      </BaseStyles>
    </div>
  );
}
