import React from "react";
import logo from "./logo.svg";
import ThomasErhel from "./pp-thomas.webp";
import AntoineLachaud from "./pp-antoine.webp";
import PracticeMakePerfect from "./practice-make-perfect.webp";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Nous construisons des applications Web et mobile.</h1>
        <p>
          Bonjour je m'appelle Thomas aka Agnizab, j'ai 29 ans et je suis
          passionné depuis toujours par le développement et le hacking. J'ai
          donc tout naturellement décidé d'en faire mon métier parce que j'adore
          lire la Docs, trainer sur GitHub, trainer sur le Web, regarder des
          conférences de toutes sortes sur YouTube et parfois en vrai.
          Prochainement élève chez O'clock pour devenir un développeur certifié
          par l'état. Si jamais ça foire et qu'il y a des bugs je pourrais
          toujours dire que c'est de la faute de Dario.
        </p>
        <code>
          Le virtuel est le véritable domaine du hacker. C’est à partir du
          virtuel que le hacker produit de nouvelles interprétations de
          l’actuel. Pour le hacker, ce qui est représenté comme étant réel est
          toujours partiel, limité, et peut­être même faux. Pour le hacker, il y
          a toujours dans l’actuel l’expression d’un excèdent de possible,
          l’excèdent du virtuel. C’est le domaine incompressible de ce qui est
          réel sans être actuel, ce qui n’est pas mais qui pourrait être.
          Hacker, c’est libérer le virtuel dans l’actuel, pour exprimer la
          différence du réel.
        </code>
        <img src={ThomasErhel} className="Thomas" alt="Thomas Erhel" />
        <img
          src={PracticeMakePerfect}
          className="Practice-make-perfect"
          alt="Rapport Lighthouse"
        />
        <h2>Nous faisons également du dépannage informatique.</h2>
        <p>
          Fort de son expérience en tant que Technicien support
          informatique/Administrateur systèmes et réseaux, c'est Antoine qui est
          en contact avec vous et vous accompagne tout au long de votre projet.
          Il rédige le cahier des charges avec vous et vous tiens au courant de
          l'avancé. Intervention possible sur place en région Parisienne ou à
          Distance.
        </p>
        <img src={AntoineLachaud} className="Antoine" alt="Antoine Lachaud" />
        <h3>Ils nous font confiance</h3>
        <p>
          Parce que c'est important de tenir ces engagements et ces promesses
          même si ça prend du temps.
        </p>
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
}

export default App;
