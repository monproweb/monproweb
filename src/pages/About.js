import React from 'react';
import '../scss/About.scss';
import {
    TerminalIcon,
    CodeIcon,
} from '@primer/octicons-react';
import { FcGoogle } from 'react-icons/fc';
import {
    StateLabel,
    BaseStyles,
    Box,
    Heading,
    Button,
    Text,
    Link,
} from '@primer/components';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function About() {
    return (
        <HelmetProvider>
            <div className="App-a-propos">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>MPW | À-propos</title>
                    <link rel="canonical" href="https://monproweb.io/a-propos" />
                </Helmet>
                <BaseStyles>
                    <Box m={4}>
                        <Heading as="h1" mb={2}>À-propos</Heading>
                    </Box>
                    <Box m={4}>
                        <Text as="p" mr={3}>Je suis actuellement en train d'apprendre React.</Text>
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
                        <Button as="a" href="mailto:thomas.erhel@gmail.com">
                            Contactez-moi
            </Button>
                    </Box>
                </BaseStyles>
            </div>
        </HelmetProvider>
    );
}

export default About;