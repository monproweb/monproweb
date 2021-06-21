import React from 'react';
import '../styles/About.scss';
import developer_activity from "../images/developer_activity.svg";
import certificat_google from "../images/certificat_google.svg";
import certificat_legacy_full_stack from "../images/certificat_legacy_full_stack.svg";
import {
    ThemeProvider,
    StateLabel,
    BaseStyles,
    Box,
    Heading,
    Text,
    Link,
    Grid,
    Spinner,
} from '@primer/components';
import Footer from '../components/Footer';
import { FaHtml5, FaCss3, FaSass, FaReact, FaNodeJs, FaUbuntu, FaAws, FaApple, FaAndroid, FaStackOverflow, FaGithub, FaGoogle, FaWikipediaW, FaAppStore, FaGooglePlay, FaCcStripe, FaCcPaypal } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiGraphql, SiMdnwebdocs, SiJest, SiVisualstudiocode, SiGooglemybusiness, SiExpo, SiTed, SiW3C, SiLighthouse } from 'react-icons/si';
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
        <ThemeProvider>
            <HelmetProvider>
                <div className="Mpw-about">

                    <Helmet>
                        <meta charSet="utf-8" />
                        <title>MPW | À-propos</title>
                        <link rel="canonical" href="https://monproweb.io/a-propos" />
                    </Helmet>

                    <BaseStyles>

                        <Box m={4} >

                            <Box p={3}>
                                <img src={developer_activity} alt="Developer Activity" className="Mpw-undraw hover-grow" />
                            </Box>

                            <Heading as="h1" mb={2} className="anim-fade-in">À-propos</Heading>

                            <Box p={3}>
                                <Text as="p" mr={3} className="anim-fade-up">Actuellement en train d'apprendre React.</Text>
                                <StateLabel status="pullOpened">{name != null ? `${name}` : <Spinner size="small" />}</StateLabel>
                            </Box>

                            <Grid gridTemplateColumns="repeat(2, auto)" gridGap={3}>
                                <Box p={3} className="hover-grow">
                                    <FaHtml5 size={42} /> <FaCss3 size={42} /> <FaSass size={42} /> <SiJavascript size={42} /> <SiTypescript size={42} /> <SiVisualstudiocode size={42} />
                                </Box>

                                <Box p={3} className="hover-grow">
                                    <FaReact size={42} className="anim-rotate" /> <SiJest size={42} /> <FaNodeJs size={42} /> <SiGraphql size={42} />  <FaUbuntu size={42} /> <FaAws size={42} /> <SiExpo size={42} /> <SiLighthouse size={42} /> <SiGooglemybusiness size={42} />
                                </Box>
                            </Grid>

                            <Grid gridTemplateColumns="repeat(2, auto)" gridGap={3}>
                                <Box p={3} className="hover-grow">
                                    <FaGithub size={42} /> <FaStackOverflow size={42} /> <SiMdnwebdocs size={42} /> <SiW3C size={42} /> <FaGoogle size={42} /> <FaWikipediaW size={42} /> <SiTed size={42} />
                                </Box>

                                <Box p={3} className="hover-grow">
                                    <FaApple size={42} /> <FaAndroid size={42} /> <FaAppStore size={42} /> <FaGooglePlay size={42} />
                                </Box>
                            </Grid>

                            <Box p={3} className="hover-grow">
                                <FaCcStripe size={42} /> <FaCcPaypal size={42} />
                            </Box>

                            <Box p={3} className="hover-grow">
                                <img src={certificat_google} alt="Google IT Automation with Python" className="Mpw-certificat" />
                                <Box p={3}>
                                    <Link
                                        mb={1}
                                        href="https://coursera.org/share/7e3de15dc9292c8949d518a86bb8c640"
                                    >Google IT Automation with Python</Link>
                                </Box>
                            </Box>

                            <Box p={3} className="hover-grow">
                                <img src={certificat_legacy_full_stack} alt="Legacy Full Stack" className="Mpw-certificat" />
                                <Box p={3}>
                                    <Link
                                        mb={1}
                                        href="https://www.freecodecamp.org/certification/thomaserhel/full-stack"
                                    >Legacy Full Stack</Link>
                                </Box>
                            </Box>

                        </Box>

                        <Footer />

                    </BaseStyles>
                </div>
            </HelmetProvider>
        </ThemeProvider>
    );
}

export default About;