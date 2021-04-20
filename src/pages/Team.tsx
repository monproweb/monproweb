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
    Grid,
    Avatar,
    Label,
} from '@primer/components';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Team = () => {
    return (
        <HelmetProvider>
            <div className="App-team">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>MPW | L'équipe</title>
                    <link rel="canonical" href="https://monproweb.io/equipe" />
                </Helmet>
                <ThemeProvider>
                    <BaseStyles>
                        <Box m={4}>
                            <Grid gridTemplateColumns="repeat(2, auto)" gridGap={3}>
                                <Box p={3}>
                                    <Heading as="h1" mb={2} className="anim-fade-in prose">Thomas Erhel</Heading>
                                    <Text as="p" mr={3} className="anim-fade-up prose">#zeroknowledge #practicemakesperfect #blacklivesmatter</Text>
                                    <Grid gridTemplateColumns="repeat(2, auto)" gridGap={1}>
                                        <Box p={3}>
                                            <CircleOcticon icon={CheckIcon} size={32} bg="icon.success" color="text.inverse" />
                                        </Box>
                                        <Box p={3}>
                                            <StarIcon className="Mpw-star" size={16} /><span>  </span><Label color="#a371f7" className="Mpw-label">mpw</Label>
                                        </Box>
                                    </Grid>
                                </Box>

                                <Box p={3}>
                                    <img src={programming} alt="Programming" className="Mpw-undraw Box hover-grow m-3 p-4" />
                                </Box>
                            </Grid>

                            <Grid gridTemplateColumns="repeat(2, auto)" gridGap={3}>
                                <Box m={4}>
                                    <Avatar src="https://avatars.githubusercontent.com/ThomasErhel" /><span>  </span>
                                    <Link mb={1} className="prose" href="https://github.com/ThomasErhel/">Thomas Erhel</Link>
                                </Box>
                                <Box m={4}>
                                    <Avatar square src="https://avatars.githubusercontent.com/monproweb" /><span>  </span>
                                    <Link mb={1} href="https://github.com/monproweb/">Mon Pro Web</Link>

                                </Box>
                            </Grid>

                            <Grid gridTemplateColumns="repeat(2, auto)" gridGap={3}>
                                <Box m={4}>
                                    <div className="Mpw-notice">
                                        <Avatar square src="https://avatars.githubusercontent.com/ubuntu" className="anim-rotate" /><span>  </span>
                                        <Link mb={1} href="https://ubuntu.com/download/desktop">Desktop</Link>
                                    </div>
                                </Box>
                                <Box m={4}>
                                    <div className="Mpw-notice">
                                        <Avatar square src="https://avatars.githubusercontent.com/ubuntu" className="anim-rotate" /><span>  </span>
                                        <Link mb={1} href="https://ubuntu.com/download/server">Server</Link>
                                    </div>
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