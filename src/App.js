import React, { Component } from "react";
import {
  ChatBot,
  AmplifyTheme,
  S3Album,
  withAuthenticator,
  Connect
} from "aws-amplify-react";
import Amplify, {
  Interactions,
  Analytics,
  AWSKinesisProvider,
  Storage,
  API,
  graphqlOperation
} from "aws-amplify";
import awsconfig from "./aws-exports";
import * as queries from "./graphql/queries";
import * as subscriptions from "./graphql/subscriptions";
import * as mutations from "./graphql/mutations";
Amplify.configure(awsconfig);
Analytics.addPluggable(new AWSKinesisProvider());
Storage.configure({ level: "private" });

// Imported default theme can be customized by overloading attributes
const myTheme = {
  ...AmplifyTheme,
  sectionHeader: {
    ...AmplifyTheme.sectionHeader,
    backgroundColor: "#ff6600"
  }
};

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.state = {
      name: "",
      description: ""
    };
  }

  handleChange(name, event) {
    this.setState({ [name]: event.target.value });
  }

  async submit() {
    const { onCreate } = this.props;
    const input = {
      name: this.state.name,
      description: this.state.description
    };
    console.log(input);

    try {
      await onCreate({ input });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return (
      <div>
        <input
          name="name"
          placeholder="name"
          onChange={event => {
            this.handleChange("name", event);
          }}
        />
        <input
          name="description"
          placeholder="description"
          onChange={event => {
            this.handleChange("description", event);
          }}
        />
        <button onClick={this.submit}>Add</button>
      </div>
    );
  }
}

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
    const ListView = ({ todos }) => (
      <div>
        <h3>All Todos</h3>
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>{todo.name}</li>
          ))}
        </ul>
      </div>
    );

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
          <Connect
            query={graphqlOperation(queries.listTodos)}
            subscription={graphqlOperation(subscriptions.onCreateTodo)}
            onSubscriptionMsg={(prev, { onCreateTodo }) => {
              console.log(onCreateTodo);
              return prev;
            }}
          >
            {({ data: { listTodos }, loading, error }) => {
              if (error) return <h3>Error</h3>;
              if (loading || !listTodos) return <h3>Loading...</h3>;
              return <ListView todos={listTodos ? listTodos.items : []} />;
            }}
          </Connect>
          <Connect mutation={graphqlOperation(mutations.createTodo)}>
            {({ mutation }) => <AddTodo onCreate={mutation} />}
          </Connect>

          <Connect
            query={graphqlOperation(queries.listTodos)}
            subscription={graphqlOperation(subscriptions.onCreateTodo)}
            onSubscriptionMsg={(prev, { onCreateTodo }) => {
              console.log("Subscription data:", onCreateTodo);
              return prev;
            }}
          >
            {({ data: { listTodos }, loading, error }) => {
              if (error) return <h3>Error</h3>;
              if (loading || !listTodos) return <h3>Loading...</h3>;
              return <ListView todos={listTodos.items} />;
            }}
          </Connect>
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

export default withAuthenticator(App, true);
