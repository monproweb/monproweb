import { Box, Button, Link } from '@primer/react'
import { Link as RouterLink } from 'react-router-dom'
import { RocketIcon } from '@primer/octicons-react'
import { useSpring, animated } from 'react-spring'

const TWITTER_URL = 'https://twitter.com/ThomasErhel'
const ABOUT_URL = '/about'

export default function CallToAction() {
    const buttonAnimation = useSpring({
        from: { opacity: 0, transform: 'translateX(-30px)' },
        to: { opacity: 1, transform: 'translateX(0px)' },
        config: { duration: 1000 },
        delay: 300,
    })

    const linkAnimation = useSpring({
        from: { opacity: 0, transform: 'translateX(30px)' },
        to: { opacity: 1, transform: 'translateX(0px)' },
        config: { duration: 1000 },
        delay: 600,
    })

    return (
        <Box p={3}>
            <animated.div style={buttonAnimation}>
                <Button
                    leadingIcon={RocketIcon}
                    aria-label="Get in touch"
                    variant="primary"
                    onClick={() => {
                        window.open(TWITTER_URL, '_blank')
                    }}
                >
                    Get in touch
                </Button>
            </animated.div>
            <animated.div style={linkAnimation}>
                <Link
                    to={ABOUT_URL}
                    as={RouterLink}
                    aria-label="Learn more about Monproweb"
                >
                    Learn more about Monproweb
                </Link>
            </animated.div>
        </Box>
    )
}
