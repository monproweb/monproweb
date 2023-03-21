import ProgrammingImage from './ProgrammingImage'
import IntroText from './InfoText'
import CallToAction from './CallToAction'
import { Box } from '@primer/react'

export default function Hero() {
    return (
        <Box
            data-testid="hero-component"
            sx={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <ProgrammingImage />
            <IntroText />
            <CallToAction />
        </Box>
    )
}
