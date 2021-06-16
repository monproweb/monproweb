import React from 'react';
import '../styles/Team.scss';
import programming from '../images/programming.svg';
import {
    CheckIcon,
    StarIcon,
} from '@primer/octicons-react';
import {
    ThemeProvider,
    CircleOcticon,
    BaseStyles,
    Box,
    Heading,
    Text,
    Link,
    Avatar,
    Label,
    Tooltip,
} from '@primer/components';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Team = () => {
    return (
        <HelmetProvider>
            <div className="Mpw-team">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>MPW | L'équipe</title>
                    <link rel="canonical" href="https://monproweb.io/equipe" />
                </Helmet>
                <ThemeProvider>
                    <BaseStyles>
                        <NavBar />

                        <Box m={4} >

                            <Box p={3}>
                                <img src={programming} alt="Programming" className="Mpw-undraw hover-grow" />
                            </Box>

                            <Heading as="h1" mb={2} className="anim-fade-in">Thomas Erhel</Heading>

                            <Box p={3}>
                                <Text as="p" mr={3} className="anim-fade-up">#ZeroKnowledge #PracticeMakesPerfect #NeverGiveUp</Text>

                                <Box p={3}>
                                    <CircleOcticon icon={CheckIcon} size={32} bg="icon.success" color="text.inverse" />
                                </Box>

                                <Box p={3}>
                                    <Tooltip aria-label="Mon Pro Web"><StarIcon className="Mpw-star" size={16} /><span>  </span><Label color="#a371f7" className="Mpw-label">mpw</Label></Tooltip>
                                </Box>

                                <Box p={3}>
                                    <iframe width="auto" height="auto" src="https://www.youtube-nocookie.com/embed/EAmmUIEsN9A" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                                    <figure >
                                        <blockquote cite="https://youtu.be/EAmmUIEsN9A">
                                            <p>Once we start to act, hope is everywhere.</p>
                                        </blockquote>
                                        <figcaption>—Greta Thunberg, <cite>School strike for climate - save the world by changing the rules</cite></figcaption>
                                    </figure>
                                </Box>
                            </Box>

                            <Box m={4}>
                                <Avatar src="https://avatars.githubusercontent.com/ThomasErhel" /><span>  </span>
                                <Link mb={1} href="https://github.com/ThomasErhel/">Thomas Erhel</Link>
                            </Box>

                            <Box m={4}>
                                <Avatar square src="https://avatars.githubusercontent.com/monproweb" /><span>  </span>
                                <Link mb={1} href="https://github.com/monproweb/">Mon Pro Web</Link>
                            </Box>

                        </Box>

                        <Footer />
                    </BaseStyles>
                </ThemeProvider>
            </div>
        </HelmetProvider >
    );
}

export default Team;