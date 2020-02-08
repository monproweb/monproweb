import React from "react";
import logo from "./logo.svg";
import ThomasErhel from "./pp-thomas.png";
import AntoineLachaud from "./pp-antoine.jpg";
import "./App.scss";
import "@material/react-card/index.scss";
import Card, {
  CardPrimaryContent,
  CardMedia,
  CardActions,
  CardActionIcons
} from "@material/react-card";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Nous construisons des applications Web et mobile de haute qualité.
        </h1>
        <Card>
          <CardPrimaryContent>
            <p className="App-card">Thomas Erhel</p>
            <CardMedia square imageUrl={ThomasErhel} />
          </CardPrimaryContent>

          <CardActions>
            <CardActionIcons>
              <i>Développeur</i>
            </CardActionIcons>
          </CardActions>
        </Card>
        <h2>Nous faisons également du dépannage informatique.</h2>
        <Card>
          <CardPrimaryContent>
            <p className="App-card">Antoine Lachaud</p>
            <CardMedia square imageUrl={AntoineLachaud} />
          </CardPrimaryContent>

          <CardActions>
            <CardActionIcons>
              <i>Chef de projet</i>
            </CardActionIcons>
          </CardActions>
        </Card>
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
