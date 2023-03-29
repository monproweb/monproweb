import { Box, PageLayout } from '@primer/react'
import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'

export default function Layout() {
    return (
        <>
            <Nav />
            <Box p={3} bg="canvas.default">
                <PageLayout>
                    <PageLayout.Content aria-label="Content">
                        <Outlet />
                    </PageLayout.Content>
                    <PageLayout.Footer aria-label="Footer">
                        <Footer />
                    </PageLayout.Footer>
                </PageLayout>
            </Box>
        </>
    )
}
