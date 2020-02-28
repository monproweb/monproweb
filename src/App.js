import React, { Component } from "react";
import Amplify, {
  Interactions,
  Analytics,
  AWSKinesisProvider
} from "aws-amplify";
import { ChatBot, AmplifyTheme } from "aws-amplify-react";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);
Analytics.addPluggable(new AWSKinesisProvider());

// Imported default theme can be customized by overloading attributes
const myTheme = {
  ...AmplifyTheme,
  sectionHeader: {
    ...AmplifyTheme.sectionHeader,
    backgroundColor: "#ff6600"
  }
};

class App extends Component {
  handleComplete(err, confirmation) {
    if (err) {
      alert("La conversation du bot a échoué");
      return;
    }

    alert("Success: " + JSON.stringify(confirmation, null, 2));
    return "Dev réservé. Merci! Que voulez-vous faire ensuite?";
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Monproweb</h1>
          <p>Nous construisons des applications Web et mobile.</p>
        </header>
        <main className="App-main">
          <ChatBot
            title="Bender Tordeur Rodríguez"
            theme={myTheme}
            botName="BenderTordeurRodriguez_prod"
            welcomeMessage="Bienvenue, comment puis-je vous aider aujourd'hui?"
            onComplete={this.handleComplete.bind(this)}
            clearOnComplete={true}
            conversationModeOn={false}
          />
          <h2>TODO</h2>
          <ul>
            <li>[X] Api, Auth, Interactions, Analytics </li>
            <li>[] Customiser Bender</li>
            <li>[] Ecrire des tests</li>
            <li>[] Modèle Projets</li>
            <li>[] Modèle Tickets</li>
            <li>[] Mocking tests API</li>
          </ul>
          <h3>Ils nous font confiance</h3>
          <p>
            Un grand merci à eux
            <span role="img" aria-label="Chien">
              🐕
            </span>
          </p>
          <a
            className="App-link"
            href="https://eduquetouschiens.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Eduque tous chiens loisirs canins
          </a>
        </main>
        <footer className="App-footer">
          <p>© monproweb.com</p>
          <p>
            Make
            <span role="img" aria-label="Notre planète">
              🌍
            </span>
            Great Again
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
