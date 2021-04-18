import React from 'react';
import '../styles/Home.css';
import react from '../images/react.svg'
import {
    ThemeProvider,
    BaseStyles,
    Box,
    Heading,
    Text,
    Link,
    Grid,
} from '@primer/components';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function Home() {
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
                        <Box m={4}>
                            <Heading as="h1" mb={2}>Je construis des applications Web et mobile.</Heading>
                            <Grid gridTemplateColumns="repeat(2, auto)" gridGap={3}>
                                <Box p={3}>
                                    <Text as="p" mr={3}>Bienvenue sur Mon Pro Web, je vous aide à développer votre visibilité en ligne à l'aide d'applications performantes qui suivent les bonnes pratiques.</Text>
                                </Box>
                                <Box p={3}>
                                    <img src={react} alt="React" className="Mpw-undraw" />
                                </Box>
                            </Grid>
                            <Box m={4}>
                                <Link mb={1} href="https://facebook.com/monproweb/">Page Facebook</Link>
                            </Box>
                        </Box>
                    </BaseStyles>
                </ThemeProvider>
            </div>
        </HelmetProvider >
    );
}

export default Home;