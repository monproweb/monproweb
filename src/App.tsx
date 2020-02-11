import React from "react";
import logo from "./logo.svg";
import ThomasErhel from "./pp-thomas.png";
import AntoineLachaud from "./pp-antoine.jpg";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Nous construisons des applications Web et mobile de haute qualité.
        </h1>
        <article>
          <p>
            Bonjour je m'appelle Thomas, j'ai 29 ans et je suis passionné depuis
            toujours par le développement et le hacking.
          </p>
          <p>
            J'ai donc tout naturellement décidé d'en faire mon métier parce que
            j'adore lire la Docs, trainer sur GitHub, trainer sur le Web,
            regarder des conférences de toutes sortes sur YouTube et parfois en
            vrai.
          </p>
          <p>
            O'clock prochainement pour devenir un développeur certifié par
            l'état. Si jamais ça foire et qu'il y a des bugs je pourrais
            toujours dire que c'est de la faute de Dario.
          </p>
          <p>
            Le virtuel est le véritable domaine du hacker. C’est à partir du
            virtuel que le hacker produit de nouvelles interprétations de
            l’actuel. Pour le hacker, ce qui est représenté comme étant réel est
            toujours partiel, limité, et peut­être même faux. Pour le hacker, il
            y a toujours dans l’actuel l’expression d’un excèdent de possible,
            l’excèdent du virtuel. C’est le domaine incompressible de ce qui est
            réel sans être actuel, ce qui n’est pas mais qui pourrait être.
            Hacker, c’est libérer le virtuel dans l’actuel, pour exprimer la
            différence du réel.
          </p>
          <p>ISFP Aventurier</p>
        </article>
        <img src={ThomasErhel} className="App-thomas" alt="Thomas Erhel" />
        <a
          className="App-link"
          href="https://github.com/ThomasErhel/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mon GitHub
        </a>
        <h2>Nous faisons également du dépannage informatique.</h2>
        <article>
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
          <p>ESTJ Directeur</p>
        </article>
        <img
          src={AntoineLachaud}
          className="App-antoine"
          alt="Antoine Lachaud"
        />
        <h3>Ils nous font confiance</h3>
        <p>
          Parce que c'est important de tenirs ces engagements et ces promesses
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
};

export default App;
