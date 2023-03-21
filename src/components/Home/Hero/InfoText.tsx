import { Box, Heading, Text } from '@primer/react'

export default function IntroText() {
    return (
        <Box p={3}>
            <Heading sx={{ fontSize: 42, mb: 2 }}>
                I build Web and mobile applications.
            </Heading>
            <Text>
                Passionate about programming and designing Web and mobile
                applications.
            </Text>
            <Box>
                <Text>I put my skills at the service of your projects.</Text>
            </Box>
        </Box>
    )
}
