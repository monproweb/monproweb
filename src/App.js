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
} from "@primer/octicons-react";
import {
  BaseStyles,
  Box,
  Heading,
  Button,
  Text,
  ButtonPrimary,
} from "@primer/components";
import { MdAccessibility } from "react-icons/md";
import { IconContext } from "react-icons";
import { GiAutoRepair } from "react-icons/gi";
import { FaReact } from "react-icons/fa";
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
        <link rel="canonical" href="https://monproweb.com/a-propos" />
      </Helmet>
      <BaseStyles>
        <Box m={4}>
          <img src={logo} className="App-logo" alt="logo" />
          <Heading className="anim-fade-up" mb={2}>
            Nous construisons des applications Web et mobiles.
          </Heading>
          <p>
            <Text className="anim-fade-in" mr={3}>
              Bienvenue sur Mon Pro Web, nous vous aidons à développer votre
              visibilité en ligne à l'aide d'applications performantes qui
              suivent les bonnes pratiques en matière d'accessibilité.
            </Text>
          </p>
          <IconContext.Provider
            value={{
              color: "dark",
              className: "global-class-name",
              size: "6em",
              title: "Accessibility",
            }}
          >
            <div className="anim-pulse">
              <MdAccessibility />
            </div>
          </IconContext.Provider>
          <Button
            as="a"
            className="App-link"
            href="https://facebook.com/monproweb/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Notre page Facebook
          </Button>
        </Box>
        <div className="App-footer">
          <Box m={4}>
            <Text mr={3}>
              Réalisé avec <Emoji symbol="💕" label="amour" /> par Mon Pro Web
            </Text>
          </Box>
        </div>
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
          <Heading className="anim-fade-up" mb={2}>
            À-propos
          </Heading>
          <p>
            <Text className="anim-fade-in" mr={3}>
              Nous faisons également du dépannage Informatique.
            </Text>
          </p>
          <IconContext.Provider
            value={{
              color: "dark",
              className: "global-class-name",
              size: "6em",
              title: "Réparation",
            }}
          >
            <div className="anim-pulse">
              <GiAutoRepair />
            </div>
          </IconContext.Provider>
          <IconContext.Provider
            value={{
              color: "dark",
              className: "global-class-name",
              size: "6em",
              title: "React",
            }}
          >
            <div className="anim-pulse">
              <FaReact />
            </div>
          </IconContext.Provider>
          <Button as="a" href="mailto:contact@monproweb.com">
            Contactez-nous
          </Button>
        </Box>
        <div className="App-footer">
          <Box m={4}>
            <Text mr={3}>
              Réalisé avec <Emoji symbol="💕" label="amour" /> par Mon Pro Web
            </Text>
          </Box>
        </div>
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
          <img src={logo} className="App-logo" alt="logo" />
          <Heading className="anim-fade-up" mb={2}>
            Un développeur :
            <Box m={4}>
              <VerifiedIcon size={24} arial-label="Icone vérifié" /> Thomas
              Erhel{" "}
            </Box>
          </Heading>
          <Box m={4}>
            <h1>
              <a href="https://github.com/ThomasErhel/">
                <LogoGithubIcon size="large" aria-label="GitHub" />
              </a>
            </h1>
            <p>
              <Text className="anim-fade-in" mr={3}>
                Passioné depuis toujours par le Web, je suis autodidacte.
                #zeroknowledge
              </Text>
            </p>
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
              <BookIcon aria-label="Documentations" /> Docs
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
        </Box>
        <Box m={4}>
          <Heading className="anim-fade-up" mb={2}>
            Un chef de projets :
            <Box m={4}>
              <VerifiedIcon size={24} arial-label="Icone vérifié" /> Antoine
              Lachaud{" "}
            </Box>
          </Heading>
          <Box m={4}>
            <p>
              <Text className="anim-fade-in" mr={3}>
                L'option informatique et réseaux est tournée vers les réseaux et
                leur sécurité, les systèmes embarqués, le cloud computing et la
                programmation des systèmes. Elle ne s'applique pas à
                l'informatique de gestion et de service à l'usager. L'objectif
                de ce BTS est de former l'élève au maintien en état de
                fonctionnement des réseaux, à la sécurisation ainsi qu'au bon
                fonctionnement de la programmation (client/serveur, cloud
                computing). À partir d'un cahier des charges et de contraintes
                de production, le technicien supérieur définit des
                spécifications techniques. Il peut installer un système
                d'exploitation, une bibliothèque logicielle, un dispositif de
                correction ou de mise à jour de logiciel. Il rédige un cahier de
                recette permettant de recenser les points à tester en fonction
                des demandes identifiées dans le cahier des charges. Il exerce
                son activité chez les prestataires informatiques : service
                interne d'une entreprise, SSII… Avec de l'expérience, le diplômé
                peut se voir confier la responsabilité de projets ou des
                fonctions de management d'équipe.
              </Text>
            </p>
          </Box>
        </Box>
        <div className="App-footer">
          <Box m={4}>
            <Text mr={3}>
              Réalisé avec <Emoji symbol="💕" label="amour" /> par Mon Pro Web
            </Text>
          </Box>
        </div>
      </BaseStyles>
    </div>
  );
}
