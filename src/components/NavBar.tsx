import { Suspense, lazy } from 'react';
import logo from '../logo.svg';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
    BaseStyles,
    ThemeProvider,
    Header,
    Spinner,
    Avatar,
} from '@primer/components';

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Team = lazy(() => import('../pages/Team'));

const NavBar = () => (
    <div className="Mpw-navbar">
        <ThemeProvider>
            <BaseStyles>
                <Router>
                    <Suspense fallback={<div className="Mpw-chargement"><Spinner /></div>}>
                        <Header>
                            <Header.Item>Black Lives Matter.</Header.Item>
                            <Header.Item>
                                <Header.Link mb={1} href="https://support.eji.org/give/153413/#!/donation/checkout">Soutenez la Equal Justice Initiative.</Header.Link>
                            </Header.Item>
                        </Header>
                        <Header>
                            <Header.Item>
                                <Header.Link href="/" fontSize={2}>
                                    <Avatar square src={logo} size={32} mr={2} />
                                    <span>Mon Pro Web</span>
                                </Header.Link>
                            </Header.Item>
                            <Header.Item>
                                <Header.Link href="/à-propos">À-propos</Header.Link>
                            </Header.Item>
                            <Header.Item>
                                <Header.Link href="/equipe">L'équipe</Header.Link>
                            </Header.Item>
                        </Header>

                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/à-propos" component={About} />
                            <Route path="/equipe" component={Team} />
                        </Switch>
                    </Suspense>
                </Router>
            </BaseStyles>
        </ThemeProvider>
    </div >
);

export default NavBar;