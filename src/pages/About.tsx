import React from 'react';
import '../styles/About.scss';
import developer_activity from "../images/developer_activity.svg";
import contact_us from "../images/contact_us.svg";
import certificat_google from "../images/certificat_google.webp";
import certificat_freecodecamp_javascript from "../images/certificat_freecodecamp_javascript.webp";
import {
    ThemeProvider,
    StateLabel,
    BaseStyles,
    Box,
    Heading,
    Text,
    Link,
    Grid,
} from '@primer/components';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import fetchGraphQL from '../fetchGraphQL';

const { useState, useEffect } = React;

const About = () => {
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
    }, []);

    return (
        <HelmetProvider>
            <div className="Mpw-about">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>MPW | À-propos</title>
                    <link rel="canonical" href="https://monproweb.io/a-propos" />
                </Helmet>

                <ThemeProvider>
                    <BaseStyles>
                        <Box m={4}>
                            <Heading as="h1" mb={2} className="anim-fade-in prose">À-propos</Heading>

                            <Grid gridTemplateColumns="repeat(2, auto)" gridGap={3}>
                                <Box p={3}>
                                    <Text as="p" mr={3} className="anim-fade-up prose">Je suis actuellement en train d'apprendre React.</Text>
                                </Box>

                                <Box p={3}>
                                    <img src={developer_activity} alt="Developer Activity" className="Mpw-undraw Box hover-grow m-3 p-4" />
                                </Box>
                            </Grid>


                            <Box p={3}>
                                <StateLabel status="pullOpened"><span className="AnimatedEllipsis">{name != null ? `${name}` : "⚛️ Chargement"}</span></StateLabel>
                            </Box>


                            <Grid gridTemplateColumns="repeat(2, auto)" gridGap={3}>
                                <Box p={3}>
                                    <img src={certificat_google} alt="Google IT Automation with Python" className="Mpw-undraw Box hover-grow m-3 p-4" />
                                    <Link
                                        mb={1}
                                        href="https://coursera.org/share/7e3de15dc9292c8949d518a86bb8c640"
                                        className="prose"
                                    >Google IT Automation with Python</Link>
                                </Box>

                                <Box p={3}>
                                    <img src={certificat_freecodecamp_javascript} alt="JavaScript Algorithms and Data Structures" className="Mpw-undraw Box hover-grow m-3 p-4" />
                                    <Link
                                        mb={1}
                                        href="https://www.freecodecamp.org/certification/thomaserhel/javascript-algorithms-and-data-structures"
                                        className="prose"
                                    >JavaScript Algorithms and Data Structures</Link>
                                </Box>
                            </Grid>


                            <Box p={3}>
                                <img src={contact_us} alt="Contact Us" className="Mpw-undraw" />
                            </Box>

                            <Box p={3}>
                                <Link mb={1} href="mailto:thomas.erhel@gmail.com" className="prose">Contactez-moi</Link>
                            </Box>

                        </Box>
                    </BaseStyles>
                </ThemeProvider>
            </div>
        </HelmetProvider>
    );
}

export default About;