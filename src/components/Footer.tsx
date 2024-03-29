import { Box, Text, Link } from '@primer/react'
import { MarkGithubIcon } from '@primer/octicons-react'
import { Link as RouterLink } from 'react-router-dom'

export default function Footer() {
    return (
        <Box p={3} textAlign="center">
            <Text>
                &copy; {new Date().getFullYear()} MonProWeb. All rights
                reserved.
            </Text>
            <Box>
                <Text>Created by Thomas Erhel</Text>
            </Box>
            <Box
                mt={2}
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <Link
                    to="https://github.com/ThomasErhel"
                    as={RouterLink}
                    target="_blank"
                    rel="noreferrer"
                >
                    <MarkGithubIcon size={24} />
                    GitHub
                </Link>
            </Box>
        </Box>
    )
}
