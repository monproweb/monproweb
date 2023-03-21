import { Box, Heading, Text } from '@primer/react'
import { useSpring, animated } from 'react-spring'

export default function IntroText() {
    const headingAnimation = useSpring({
        from: { opacity: 0, transform: 'translateY(-40px)' },
        to: { opacity: 1, transform: 'translateY(0px)' },
        config: { duration: 1000 },
    })

    const textAnimation = useSpring({
        from: { opacity: 0, transform: 'translateY(20px)' },
        to: { opacity: 1, transform: 'translateY(0px)' },
        config: { duration: 1200 },
        delay: 500,
    })

    return (
        <Box p={3}>
            <animated.div style={headingAnimation}>
                <Heading sx={{ fontSize: 42, mb: 2 }}>
                    I build Web and mobile applications.
                </Heading>
            </animated.div>
            <animated.div style={textAnimation}>
                <Text>
                    Passionate about programming and designing Web and mobile
                    applications.
                </Text>
                <Box>
                    <Text>
                        I put my skills at the service of your projects.
                    </Text>
                </Box>
            </animated.div>
        </Box>
    )
}
