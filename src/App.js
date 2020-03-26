import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import logo from './logo.svg';
import './App.scss';
import Emoji from 'a11y-react-emoji'
import Octicon, { Rocket, MarkGithub, FileBinary } from '@primer/octicons-react'
import { BaseStyles, Box, Heading, ButtonPrimary, Button, ButtonOutline, Text, ProgressBar } from '@primer/components'
import { Helmet } from "react-helmet";

export default function App() {
    return (
        <div className="App">
            <Router>
                <div className="Header">
                    <div className="Header-item"><Link className="Header-link" to="/">Mon Pro Web</Link>
                    </div>
                    <div className="Header-item"><Link className="Header-link" to="/about">À propos</Link></div>
                    <div className="Header-item"><Link className="Header-link" to="/topics">Les sujets</Link></div>
                </div>
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/admin">
                        <Admin />
                    </Route>
                    <Route path="/topics">
                        <Topics />
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
                <link rel="canonical" href="https://monproweb.com/about" />
            </Helmet>
            <BaseStyles>
                <Box m={4}>
                    <img src={logo} className="App-logo" alt="logo" />
                    <Heading mb={2}>Nous construisons des applications Web et mobile.</Heading>
                    <p>Bienvenue sur Mon Pro Web, nous vous aidons à développer votre visibilité en ligne à l'aide d'applications performantes qui suivent les bonnes pratiques en matière d'accessibilité.
                        {' '}
                        <Emoji symbol="🚀" label="fusée" />
                        <Octicon icon={Rocket} />
                        {' '}
                    </p>
                    <ButtonPrimary
                        as='a'
                        className="App-link"
                        href="https://facebook.com/monproweb/"
                        target="_blank"
                        rel="noopener noreferrer">
                        Notre page Facebook
                    </ButtonPrimary>
                    <p>
                        Réalisé avec
                        {' '}
                        <Emoji symbol="💕" label="amour" />
                        {' '}
                        par Mon Pro Web
                    </p>
                </Box>
            </BaseStyles>
        </div >
    );
}

function About() {
    return (
        <div className="App-about">
            <Helmet>
                <meta charSet="utf-8" />
                <title>MPW | À propos</title>
                <link rel="canonical" href="https://monproweb.com/about" />
            </Helmet>
            <BaseStyles>
                <Box m={4}>
                    <img src={logo} className="App-logo" alt="logo" />
                    <Heading mb={2}>À propos</Heading>
                    <p>Lorem Ipsum
                    {' '}
                        <Emoji symbol="🌍" label="Globe montrant l'Europe-Afrique" />
                        <Octicon icon={MarkGithub} />
                        {' '}</p>
                    <>
                        <p><Text mr={3}>0 sur 8</Text>
                            <ProgressBar progress={0} inline width='100px' /></p>
                    </>
                    <Button
                        as='a'
                        className="App-link"
                        href="https://github.com/ThomasErhel/"
                        target="_blank"
                        rel="noopener noreferrer">
                        GitHub
                    </Button>
                </Box>
            </BaseStyles>
        </div >
    );
}

function Topics() {
    let match = useRouteMatch();

    return (
        <div className="App-topics">
            <Helmet>
                <meta charSet="utf-8" />
                <title>MPW | Les sujets</title>
                <link rel="canonical" href="https://monproweb.com/topics" />
            </Helmet>
            <h2>Les sujets</h2>

            <ul>
                <li>
                    <Link className="App-link" to={`${match.url}/components`}>Components</Link>
                </li>
                <li>
                    <Link className="App-link" to={`${match.url}/props-v-state`}>
                        Props v. State
          </Link>
                </li>
            </ul>

            {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
            <Switch>
                <Route path={`${match.path}/:topicId`}>
                    <Topic />
                </Route>
                <Route path={match.path}>
                    <h3>Veuillez sélectionner un sujet.</h3>
                </Route>
            </Switch>
        </div>
    );
}

function Topic() {
    let { topicId } = useParams();
    return <h3>ID de sujet demandé: {topicId}</h3>;
}

function Admin() {
    return (
        <div className="App-admin">
            <Helmet>
                <meta charSet="utf-8" />
                <title>MPW | Admin | Rick Rolled</title>
                <link rel="canonical" href="https://monproweb.com/admin" />
            </Helmet>
            <BaseStyles>
                <Box m={4}>
                    <img src={logo} className="App-logo" alt="logo" />
                    <Heading mb={2}>Admin</Heading>
                    <p>Rick Rolled !!
                    {' '}
                        <Emoji symbol="🐦" label="Twitter" />
                        <Octicon icon={FileBinary} />
                        {' '}</p>
                    <iframe title="Rick Astley - Never Gonna Give You Up (Video)" width="300" height="150" src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <div><ButtonOutline
                        as='a'
                        className="App-link"
                        href="https://twitter.com/ThomasErhel/"
                        target="_blank"
                        rel="noopener noreferrer">
                        Follow me sur twitter je follow back
                    </ButtonOutline></div>
                </Box>
            </BaseStyles>
        </div >
    );
}
