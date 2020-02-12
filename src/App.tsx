import React from "react";
import logo from "./logo.svg";
import ThomasErhel from "./pp-thomas.png";
import AntoineLachaud from "./pp-antoine.jpg";
import "./App.scss";
import Button from "@material/react-button";
import MaterialIcon from "@material/react-material-icon";
import {
  Body1,
  Body2,
  Caption,
  Headline1,
  Headline2,
  Headline3,
  Headline4,
  Headline5,
  Headline6,
  Overline,
  Subtitle1,
  Subtitle2
} from "@material/react-typography";
import TopAppBar, {
  TopAppBarFixedAdjust,
  TopAppBarIcon,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle
} from "@material/react-top-app-bar";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <TopAppBar>
          <TopAppBarRow>
            <TopAppBarSection align="start">
              <TopAppBarIcon navIcon tabIndex={0}>
                <MaterialIcon
                  hasRipple
                  icon="menu"
                  onClick={() => console.log("click")}
                />
              </TopAppBarIcon>
              <TopAppBarTitle>Monproweb</TopAppBarTitle>
            </TopAppBarSection>
            <TopAppBarSection align="end" role="toolbar">
              <TopAppBarIcon actionItem tabIndex={0}>
                <MaterialIcon
                  aria-label="github"
                  hasRipple
                  icon="code"
                  onClick={() => console.log("https://github.com/ThomasErhel/")}
                />
              </TopAppBarIcon>
            </TopAppBarSection>
          </TopAppBarRow>
        </TopAppBar>
        <TopAppBarFixedAdjust>My exciting content!</TopAppBarFixedAdjust>
        <img src={logo} className="App-logo" alt="logo" />
        <Headline1>
          Nous construisons des applications Web et mobile de haute qualité.
        </Headline1>
        <Body1>
          Bonjour je m'appelle Thomas, j'ai 29 ans et je suis passionné depuis
          toujours par le développement et le hacking.
        </Body1>
        <Body1>
          J'ai donc tout naturellement décidé d'en faire mon métier parce que
          j'adore lire la Docs, trainer sur GitHub, trainer sur le Web, regarder
          des conférences de toutes sortes sur YouTube et parfois en vrai.
        </Body1>
        Prochainement élève chez O'clock pour devenir un développeur certifié
        par l'état.
        <Body1>
          Si jamais ça foire et qu'il y a des bugs je pourrais toujours dire que
          c'est de la faute de Dario.
        </Body1>
        <Body2>
          Le virtuel est le véritable domaine du hacker. C’est à partir du
          virtuel que le hacker produit de nouvelles interprétations de
          l’actuel. Pour le hacker, ce qui est représenté comme étant réel est
          toujours partiel, limité, et peut­être même faux. Pour le hacker, il y
          a toujours dans l’actuel l’expression d’un excèdent de possible,
          l’excèdent du virtuel. C’est le domaine incompressible de ce qui est
          réel sans être actuel, ce qui n’est pas mais qui pourrait être.
          Hacker, c’est libérer le virtuel dans l’actuel, pour exprimer la
          différence du réel.
        </Body2>
        <Button
          raised
          className="boutton-aventurier"
          href="https://www.16personalities.com/fr/la-personnalite-isfp"
        >
          <span>ISFP Aventurier</span>
        </Button>
        <img src={ThomasErhel} className="App-thomas" alt="Thomas Erhel" />
        <Headline2>Nous faisons également du dépannage informatique.</Headline2>
        <Body2>
          <p>
            Fort de son expérience en tant que Technicien support
            informatique/Administrateur systèmes et réseaux c'est lui qui est en
            contact avec vous et vous accompagne tout au long de votre projet.
          </p>
          <p>
            Il rédige le cahier des charges avec vous et vous tiens au courant
            de l'avancé.
          </p>
          <p>
            Intervention possible sur place en région Parisienne ou à Distance.
          </p>
          <Button
            className="boutton-directeur"
            href="https://www.16personalities.com/fr/la-personnalite-estj"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>ESTJ Directeur</span>
          </Button>
        </Body2>
        <img
          src={AntoineLachaud}
          className="App-antoine"
          alt="Antoine Lachaud"
        />
        <Headline3>Ils nous font confiance</Headline3>
        <Body1>
          Parce que c'est important de tenirs ces engagements et ces promesses
          même si ça prend du temps.
        </Body1>
        <a
          className="App-link"
          href="https://eduquetouschiens.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Eduque tous chiens loisirs canins
        </a>
      </header>
    </div>
  );
};

export default App;
