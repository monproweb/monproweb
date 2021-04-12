import React from 'react';
import '../css/Home.css';
import {
    ThemeProvider,
    BaseStyles,
    Box,
    Heading,
    Text,
    Link,
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
                            <Heading as="h1" mb={2}>
                                Je construis des applications Web et mobile.
            </Heading>
                            <Text as="p" mr={3}>
                                Bienvenue sur Mon Pro Web, je vous aide à développer votre
                                visibilité en ligne à l'aide d'applications performantes qui suivent
                                les bonnes pratiques.
            </Text>
                            <Box m={4}>
                                <Link mb={1} href="https://facebook.com/monproweb/">
                                    Page Facebook
</Link>
                            </Box>
                        </Box>
                    </BaseStyles>
                </ThemeProvider>
            </div>
        </HelmetProvider>
    );
}

export default Home;