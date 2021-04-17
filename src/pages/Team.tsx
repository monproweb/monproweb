import React from 'react';
import '../styles/Team.css';
import programming from '../images/programming.svg';
import {
    MarkGithubIcon,
    CheckIcon,
} from '@primer/octicons-react';
import { FaUbuntu } from 'react-icons/fa';
import {
    ThemeProvider,
    CircleOcticon,
    BaseStyles,
    Box,
    Heading,
    Text,
    Link,
    Grid,
} from '@primer/components';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function Team() {
    return (
        <HelmetProvider>
            <div className="App-equipe">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>MPW | L'équipe</title>
                    <link rel="canonical" href="https://monproweb.io/equipe" />
                </Helmet>
                <ThemeProvider>
                    <BaseStyles>
                        <Grid gridTemplateColumns="repeat(2, auto)" gridGap={3}>
                            <Box p={3}>
                                <Heading as="h1" mb={2}>Un développeur : Thomas Erhel</Heading>
                                <Text as="p" mr={3}>#zeroknowledge #practicemakesperfect #blacklivesmatter</Text>
                                <Box p={3}>
                                    <CircleOcticon icon={CheckIcon} size={42} bg="icon.success" color="text.inverse" />
                                </Box>
                            </Box>
                            <Box p={3}>
                                <img src={programming} alt="Programming" className="Mpw-undraw" />
                            </Box>
                        </Grid>

                        <Grid gridTemplateColumns="repeat(4, auto)" gridGap={3}>
                            <Box m={4}>
                                <MarkGithubIcon size={42} />
                                <Link mb={1} href="https://github.com/ThomasErhel/">Thomas Erhel</Link>
                            </Box>
                            <Box m={4}>
                                <MarkGithubIcon size={42} />
                                <Link mb={1} href="https://github.com/monproweb/">Mon Pro Web</Link>
                            </Box>
                            <Box m={4}>
                                <FaUbuntu aria-label="Icône Ubuntu" size="42" />
                                <Link mb={1} href="https://ubuntu.com/download/desktop">Desktop</Link>
                            </Box>
                            <Box m={4}>
                                <FaUbuntu aria-label="Icône Ubuntu" size="42" />
                                <Link mb={1} href="https://ubuntu.com/download/server">Server</Link>
                            </Box>
                        </Grid>
                    </BaseStyles>
                </ThemeProvider>
            </div>
        </HelmetProvider >
    );
}

export default Team;