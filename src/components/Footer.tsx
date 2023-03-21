import { Box, Text, Link, PageLayout } from '@primer/react'
import { MarkGithubIcon } from '@primer/octicons-react'

export default function Footer() {
    return (
        <PageLayout.Footer aria-label="footer">
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
                        href="https://github.com/ThomasErhel"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <MarkGithubIcon size={24} />
                    </Link>
                </Box>
            </Box>
        </PageLayout.Footer>
    )
}
