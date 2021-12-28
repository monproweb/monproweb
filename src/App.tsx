import React, { Component } from 'react'
import { ReactComponent as Logo } from './logo.svg'
import 'styles/App.scss'
import GPLv3 from './images/gplv3-88x31.png'
import Particles from 'react-tsparticles'
import particlesOptions from './particles.json'
import { ISourceOptions } from 'tsparticles'
import {
    ThemeProvider,
    BaseStyles,
    Box,
    Heading,
    Link,
    Text,
    Button,
    ButtonPrimary,
} from '@primer/react'
import { Media } from 'react-breakpoints'
import DesktopNavigation from 'components/DesktopNavigation'
import TouchNavigation from 'components/TouchNavigation'

class App extends Component {
    handleClick = () => {
        import('components/Citation')
            .then(({ citation }) => {
                alert(citation)
            })
            .catch((err) => {
                alert('Erreur')
            })
    }
    render() {
        return (
            <ThemeProvider colorMode="auto">
                <BaseStyles>
                    <Media>
                        {({ breakpoints, currentBreakpoint }) =>
                            breakpoints[currentBreakpoint] >
                            breakpoints.desktop ? (
                                <DesktopNavigation />
                            ) : (
                                <TouchNavigation />
                            )
                        }
                    </Media>
                    <Box m={4}>
                        <Box className="App">
                            <Particles
                                options={particlesOptions as ISourceOptions}
                            />
                            <header className="App-header">
                                <Logo title="logo" className="App-logo" />
                                <Box p={3} bg="canvas.default">
                                    <Heading as="h1" sx={{ mb: 2 }}>
                                        Bonjour! 👋
                                    </Heading>
                                    <Text as="p">
                                        Je construis des applications{' '}
                                        <code>Web</code> et <code>mobiles</code>
                                    </Text>
                                    <Link
                                        sx={{ mb: 1 }}
                                        href="https://github.com/monproweb/monproweb"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Mon Pro Web
                                    </Link>
                                    <Box p={3}>
                                        <Button onClick={this.handleClick}>
                                            🔥 Citation
                                        </Button>
                                    </Box>
                                    <Box p={3}>
                                        <Link href="https://monproweb419.workplace.com/groupcall/LINK:htoyeaqwkjid/">👨‍💻 Salle de travail</Link>
                                    </Box>
                                    <Box p={3}>
                                        <Link
                                            sx={{ mb: 1 }}
                                            href="/about/javascript.html"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img
                                                src={GPLv3}
                                                alt="Free as in Freedom"
                                            />
                                        </Link>
                                    </Box>
                                </Box>
                            </header>
                        </Box>
                    </Box>
                </BaseStyles>
            </ThemeProvider>
        )
    }
}

export default App
