import ProgrammingImage from './ProgrammingImage'
import IntroText from './InfoText'
import CallToAction from './CallToAction'
import { Box } from '@primer/react'

export default function Hero() {
    return (
        <Box
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
