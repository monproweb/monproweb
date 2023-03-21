import ProgrammingImage from './Hero/ProgrammingImage'
import IntroText from './Hero/InfoText'
import CallToAction from './Hero/CallToAction'
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
