import React from 'react';
import '../styles/Home.scss';
import react from '../images/react.svg'
import {
    ThemeProvider,
    BaseStyles,
    Box,
    Heading,
    Text,
    Link,
} from '@primer/components';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Home = () => {
    return (
        <HelmetProvider>
            <div className="App-home">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>MPW | Mon Pro Web</title>
                    <link rel="canonical" href="https://monproweb.io/a-propos" />
                </Helmet>
                <ThemeProvider>
                    <BaseStyles>
                        <Box m={4} >
                            <Box p={3}>
                                <img src={react} alt="React" className="Mpw-undraw hover-grow" />
                            </Box>
                            <Heading as="h1" mb={2} className="anim-fade-in">Je construis des applications Web et mobile.</Heading>
                            <Box p={3}>
                                <Text as="p" mr={3} className="anim-fade-up">Développer votre visibilité en ligne à l'aide d'applications performantes qui suivent les bonnes pratiques.</Text>
                            </Box>
                            <Box m={4}>
                                <Link mb={1} href="https://facebook.com/monproweb/" className="btn-primary">Page Facebook</Link>
                            </Box>
                        </Box>
                    </BaseStyles>
                </ThemeProvider>
            </div>
        </HelmetProvider >
    );
}

export default Home;