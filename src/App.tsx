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
        <img src={ThomasErhel} className="App-thomas" alt="Thomas Erhel" />
        <h2>Nous faisons également du dépannage informatique.</h2>
        <img
          src={AntoineLachaud}
          className="App-antoine"
          alt="Antoine Lachaud"
        />
        <h3>Il nous font confiance</h3>
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
