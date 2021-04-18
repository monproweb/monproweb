import React, { Suspense, lazy } from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  RocketIcon,
} from '@primer/octicons-react';
import {
  BaseStyles,
  ThemeProvider,
  Header,
  StyledOcticon,
  Box,
} from '@primer/components';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Team = lazy(() => import('./pages/Team'));

const App = () => (
  <div className="App">
    <ThemeProvider>
      <BaseStyles>
        <Router>
          <Suspense fallback={<div className="Mpw-chargement AnimatedEllipsis">⚛️ Chargement</div>}>
            <Header>
              <Header.Item>
                <Header.Link href="/" fontSize={2}>
                  <StyledOcticon icon={RocketIcon} size={32} mr={2} />
                  <span>Mon Pro Web</span>
                </Header.Link>
              </Header.Item>
              <Header.Item>
                <Header.Link href="/a-propos">À-propos</Header.Link>
              </Header.Item>
              <Header.Item>
                <Header.Link href="/equipe">L'équipe</Header.Link>
              </Header.Item>
            </Header>
            <Box m={4}>
              <img src={logo} className="App-logo" alt="logo" />
            </Box>

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/a-propos" component={About} />
              <Route path="/equipe" component={Team} />
            </Switch>
          </Suspense>
        </Router>
      </BaseStyles>
    </ThemeProvider>
  </div>
);

<Home />

export default App;