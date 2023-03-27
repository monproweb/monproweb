import { Box, Text, Link } from '@primer/react'
import { Link as RouterLink } from 'react-router-dom'

export default function NoMatch() {
    return (
        <Box p={4} sx={{ textAlign: 'center' }}>
            <Text as="h2" fontSize={5}>
                Oops! We couldn't find the page you're looking for.
            </Text>
            <Text as="p" fontSize={3} data-testid="no-match-description">
                The page you're trying to access doesn't seem to exist on this
                site. Please check the URL and try again, or go to the{' '}
                <Link to="/" as={RouterLink}>
                    home page
                </Link>{' '}
                for more information.
            </Text>
        </Box>
    )
}
