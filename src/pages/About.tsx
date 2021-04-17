/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import '../css/About.css';
import {
    TerminalIcon,
    CodeIcon,
} from '@primer/octicons-react';
import { FcGoogle } from 'react-icons/fc';
import {
    ThemeProvider,
    StateLabel,
    BaseStyles,
    Box,
    Heading,
    Text,
    Link,
} from '@primer/components';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import fetchGraphQL from '../fetchGraphQL';

const { useState, useEffect } = React;

function About() {
    // We'll load the name of a repository, initially setting it to null
    const [name, setName] = useState(null);

    // When the component mounts we'll fetch a repository name
    useEffect(() => {
        let isMounted = true;
        fetchGraphQL(`
      query RepositoryNameQuery {
        # feel free to change owner/name here
        repository(owner: "monproweb" name: "monproweb") {
          name
        }
      }
    `).then(response => {
            // Avoid updating state if the component unmounted before the fetch completes
            if (!isMounted) {
                return;
            }
            const data = response.data;
            setName(data.repository.name);
        }).catch(error => {
            console.error(error);
        });

        return () => {
            isMounted = false;
        };
    }, [fetchGraphQL]);

    return (
        <HelmetProvider>
            <div className="App-a-propos">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>MPW | À-propos</title>
                    <link rel="canonical" href="https://monproweb.io/a-propos" />
                </Helmet>
                <ThemeProvider>
                    <BaseStyles>
                        <Box m={4}>
                            <Heading as="h1" mb={2}>À-propos</Heading>
                        </Box>
                        <Box m={4}>
                            <Text as="p" mr={3}>Je suis actuellement en train d'apprendre React.</Text>
                        </Box>
                        <Box m={4}>
                            {name != null ? `Repository: ${name}` : "⚛️ Chargement..."}
                        </Box>
                        <Box m={4}>
                            <StateLabel status="issueOpened">Open</StateLabel>
                        </Box>
                        <Box m={4}>
                            <FcGoogle size={42} />
                            <Link
                                mb={1}
                                href="https://coursera.org/share/7e3de15dc9292c8949d518a86bb8c640"
                            >
                                Google IT Automation with Python
            </Link>
                        </Box>
                        <Box m={4}>
                            <TerminalIcon aria-label="Icône terminal" size={100} />
                        </Box>
                        <Box m={4}>
                            <CodeIcon aria-label="Icône code" size={100} />
                        </Box>
                        <Box m={4}>
                            <Link mb={1} href="mailto:thomas.erhel@gmail.com">
                                Contactez-moi
</Link>
                        </Box>
                    </BaseStyles>
                </ThemeProvider>
            </div>
        </HelmetProvider>
    );
}

export default About;