import { Box, Text, Avatar, Heading } from '@primer/react'
import cat from '../images/cat.webp'
import rsm from '../images/rsm.webp'
import ship from '../images/ship.webp'
import mind from '../images/mind.webp'

const About = () => {
    return (
        <>
            <Heading sx={{ fontSize: 42, mb: 2 }}>About Monproweb</Heading>
            <Box
                sx={{
                    '> *': {
                        borderWidth: 1,
                        borderColor: 'border.default',
                        borderStyle: 'solid',
                        borderBottomWidth: 0,
                        padding: 2,
                        ':last-child': {
                            borderBottomWidth: 1,
                        },
                        ':hover': {
                            bg: 'neutral.muted',
                        },
                    },
                }}
            >
                <Box>
                    <Box sx={{ textAlign: 'center' }}>
                        <Avatar src={cat} size={100} alt="Cat in space" />
                    </Box>
                    <Text>
                        Monproweb is a startup that specialized in building web
                        and mobile applications with a focus on sustainability
                        and the use of Ethereum blockchain technology. Our team
                        of experienced developers utilizes the React library to
                        create intuitive and user-friendly apps that deliver
                        powerful functionality.
                    </Text>
                </Box>
                <Box>
                    <Box sx={{ textAlign: 'center' }}>
                        <Avatar
                            src={rsm}
                            size={100}
                            alt="Positive change ambassador badge from RSM"
                        />
                    </Box>
                    <Text>
                        As an eco-friendly company, we prioritize the use of
                        clean and renewable technologies in all aspects of our
                        work. This not only benefits the environment, but also
                        allows us to provide our clients with cutting-edge
                        solutions that are built to last.
                    </Text>
                </Box>
                <Box>
                    <Box sx={{ textAlign: 'center' }}>
                        <Avatar
                            src={ship}
                            size={100}
                            alt="A boat with Ethereum sail"
                        />
                    </Box>
                    <Text>
                        In addition to our focus on sustainability, we also have
                        extensive experience with Ethereum blockchain
                        technology. This allows us to build applications that
                        are secure, transparent, and highly scalable. Whether
                        you need a simple web application or a complex
                        decentralized application, we have the skills and
                        expertise to deliver the solution you need.
                    </Text>
                </Box>
                <Box>
                    <Box sx={{ textAlign: 'center' }}>
                        <Avatar src={mind} size={100} alt="ChatGPT mind" />
                    </Box>
                    <Text>
                        At Monproweb, we pride ourselves on our ability to
                        deliver high-quality web and mobile solutions that meet
                        the unique needs of each of our clients. Contact us
                        today to discuss your project and learn more about how
                        we can help bring your vision to life.
                    </Text>
                </Box>
            </Box>
        </>
    )
}

export default About
