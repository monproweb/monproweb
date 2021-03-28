import React from 'react';
import '../scss/Team.scss';
import {
    LogoGithubIcon,
    CheckIcon,
} from '@primer/octicons-react';
import { FaUbuntu } from 'react-icons/fa';
import {
    CircleOcticon,
    BaseStyles,
    Box,
    Heading,
    Text,
    ButtonPrimary,
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
                <BaseStyles>
                    <Box m={4}>
                        <Heading as="h1" mb={2}>
                            Un développeur : Thomas Erhel
              <CircleOcticon
                                icon={CheckIcon}
                                size={32}
                                bg="green.5"
                                color="white"
                            />
                        </Heading>
                    </Box>
                    <Box m={4}>
                        <Text as="p" mr={3}>
                            #zeroknowledge #practicemakesperfect #blacklivesmatter
            </Text>
                    </Box>
                    <Box m={4}>
                        <a href="https://github.com/ThomasErhel/">
                            <LogoGithubIcon size="large" aria-label="Icône logo GitHub" />
                        </a>
                    </Box>
                    <Box m={4}>
                        <ButtonPrimary
                            as="a"
                            className="App-link"
                            href="https://ubuntu.com/download/desktop"
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="large"
                        >
                            <FaUbuntu aria-label="Icône Ubuntu" size="20" /> Télécharger ubuntu
            </ButtonPrimary>
                    </Box>
                </BaseStyles>
            </div>
        </HelmetProvider>
    );
}

export default Team;