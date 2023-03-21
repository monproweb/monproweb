import { Box, Heading, Button, Text, Link } from '@primer/react'
import { RocketIcon } from '@primer/octicons-react'
import Programming from '../images/programming.svg'

function Home() {
    return (
        <>
            <Box p={3}>
                <img
                    className="programming"
                    src={Programming}
                    alt="programming"
                    width="300px"
                    height="300px"
                />
            </Box>
            <Box p={3}>
                <Heading sx={{ fontSize: 42, mb: 2 }}>
                    I build Web and mobile applications.
                </Heading>
                <Text>
                    Passionate about programming and designing Web and mobile
                    applications.
                </Text>
                <Box>
                    <Text>
                        I put my skills at the service of your projects.
                    </Text>
                </Box>
            </Box>
            <Box p={3}>
                <Button
                    leadingIcon={RocketIcon}
                    aria-label="Get in touch"
                    variant="primary"
                    onClick={() => {
                        window.open('https://twitter.com/ThomasErhel', '_blank')
                    }}
                >
                    Get in touch
                </Button>
                <Link href="/about" aria-label="Learn more about Monproweb">
                    Learn more
                </Link>
            </Box>
        </>
    )
}

export default Home
