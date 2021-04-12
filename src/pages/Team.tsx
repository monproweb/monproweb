import React from 'react';
import '../css/Team.css';
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
                            <Heading as="h1" mb={2}>Un développeur : Thomas Erhel
              <CircleOcticon
                                    icon={CheckIcon}
                                    size={32}
                                    bg="green.5"
                                    color="white"
                                />
                            </Heading>
                        </Box>
                        <Box m={4}>
                            <Text as="p" mr={3}>#zeroknowledge #practicemakesperfect #blacklivesmatter</Text>
                        </Box>
                        <Box m={4}>
                            <MarkGithubIcon size={16} />
                            <Link mb={1} href="https://github.com/ThomasErhel/">Thomas Erhel</Link>
                        </Box>
                        <Box m={4}>
                            <MarkGithubIcon size={16} />
                            <Link mb={1} href="https://github.com/monproweb/">Mon Pro Web</Link>
                        </Box>
                        <Box m={4}>
                            <FaUbuntu aria-label="Icône Ubuntu" size="16" />
                            <Link mb={1} href="https://ubuntu.com/download/desktop">Desktop</Link>
                        </Box>
                        <Box m={4}>
                            <FaUbuntu aria-label="Icône Ubuntu" size="16" />
                            <Link mb={1} href="https://ubuntu.com/download/server">Server</Link>
                        </Box>
                    </BaseStyles>
                </ThemeProvider>
            </div>
        </HelmetProvider >
    );
}

export default Team;