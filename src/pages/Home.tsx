import React from 'react';
import '../styles/Home.scss';
import react from '../images/react.svg'
import {
    ThemeProvider,
    BaseStyles,
    Box,
    Heading,
    Text,
} from '@primer/components';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Home = () => {
    return (
        <HelmetProvider>
            <div className="Mpw-home">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>MPW | Mon Pro Web</title>
                    <link rel="canonical" href="https://monproweb.io/a-propos" />
                </Helmet>
                <ThemeProvider>
                    <BaseStyles>
                        <NavBar />

                        <Box m={4} >
                            <Box p={3}>
                                <img src={react} alt="React" className="Mpw-undraw hover-grow" />
                            </Box>
                            <Heading as="h1" mb={2} className="anim-fade-in">Je construis des applications Web et mobiles.</Heading>
                            <Box p={3}>
                                <Text as="p" mr={3} className="anim-fade-up">Développer votre visibilité en ligne à l'aide d'applications performantes qui suivent les bonnes pratiques.</Text>
                            </Box>
                        </Box>

                        <Footer />
                    </BaseStyles>
                </ThemeProvider>
            </div>
        </HelmetProvider >
    );
}

export default Home;