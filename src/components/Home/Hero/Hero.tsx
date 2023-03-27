import ProgrammingImage from './ProgrammingImage'
import IntroText from './InfoText'
import CallToAction from './CallToAction'
import { Box } from '@primer/react'

export default function Hero() {
    return (
        <Box data-testid="hero-component">
            <ProgrammingImage />
            <IntroText />
            <CallToAction />
        </Box>
    )
}
