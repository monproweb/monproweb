import { Box, Button, Link } from '@primer/react'
import { Link as RouterLink } from 'react-router-dom'
import { RocketIcon } from '@primer/octicons-react'

const TWITTER_URL = 'https://twitter.com/ThomasErhel'
const ABOUT_URL = '/about'

export default function CallToAction() {
    return (
        <>
            <Box p={3}>
                <Button
                    as="a"
                    href={TWITTER_URL}
                    target="_blank"
                    rel="noreferrer"
                    leadingIcon={RocketIcon}
                    aria-label="Get in touch"
                >
                    Get in touch
                </Button>
            </Box>
            <Box p={3}>
                <Link
                    to={ABOUT_URL}
                    as={RouterLink}
                    aria-label="Learn more about MonProWeb"
                >
                    Learn more about MonProWeb
                </Link>
            </Box>
        </>
    )
}
