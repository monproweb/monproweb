import React from 'react';
import '../styles/Team.css';
import programming from '../images/programming.svg';
import {
    CheckIcon,
} from '@primer/octicons-react';
import {
    ThemeProvider,
    CircleOcticon,
    BaseStyles,
    Box,
    Heading,
    Text,
    Link,
    Grid,
    Avatar,
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
                        <Box m={4}>
                            <Heading as="h1" mb={2}>Thomas Erhel</Heading>
                            <Grid gridTemplateColumns="repeat(2, auto)" gridGap={3}>
                                <Box p={3}>
                                    <Text as="p" mr={3}>#zeroknowledge #practicemakesperfect #blacklivesmatter</Text>
                                    <Box p={3}>
                                        <CircleOcticon icon={CheckIcon} size={32} bg="icon.success" color="text.inverse" />
                                    </Box>
                                </Box>
                                <Box p={3}>
                                    <img src={programming} alt="Programming" className="Mpw-undraw" />
                                </Box>
                            </Grid>

                            <Grid gridTemplateColumns="repeat(4, auto)" gridGap={3}>
                                <Box m={4}>
                                    <Avatar src="https://avatars.githubusercontent.com/ThomasErhel" />
                                    <Link mb={1} href="https://github.com/ThomasErhel/">Thomas Erhel</Link>
                                </Box>
                                <Box m={4}>
                                    <Avatar square src="https://avatars.githubusercontent.com/monproweb" />
                                    <Link mb={1} href="https://github.com/monproweb/">Mon Pro Web</Link>
                                </Box>
                                <Box m={4}>
                                    <Avatar square src="https://avatars.githubusercontent.com/ubuntu" />
                                    <Link mb={1} href="https://ubuntu.com/download/desktop">Desktop</Link>
                                </Box>
                                <Box m={4}>
                                    <Avatar square src="https://avatars.githubusercontent.com/ubuntu" />
                                    <Link mb={1} href="https://ubuntu.com/download/server">Server</Link>
                                </Box>
                            </Grid>
                        </Box>
                    </BaseStyles>
                </ThemeProvider>
            </div>
        </HelmetProvider >
    );
}

export default Team;