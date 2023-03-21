import * as React from 'react'
import { Link } from 'react-router-dom'
import { Box, Text } from '@primer/react'

export default function NoMatch() {
    return (
        <Box p={4} sx={{ textAlign: 'center' }}>
            <Text as="h2" fontSize={5}>
                Oops! We couldn't find the page you're looking for.
            </Text>
            <Text as="p" fontSize={3} data-testid="no-match-description">
                The page you're trying to access doesn't seem to exist on this
                site. Please check the URL and try again, or go to the{' '}
                <Link to="/">home page</Link> for more information.
            </Text>
        </Box>
    )
}
