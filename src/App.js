import React from 'react'
import { ReactComponent as Logo } from './logo.svg'
import 'styles/App.scss'
import GPLv3 from './images/gplv3-88x31.png'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import {
    ThemeProvider,
    BaseStyles,
    Box,
    Heading,
    Link,
    Text,
    Avatar,
    Header,
} from '@primer/react'

const App = () => {
    const particlesInit = async (main) => {
        await loadFull(main);
      };
        return (
            <ThemeProvider colorMode="auto">
            <BaseStyles>
            <Header>
                <Header.Item full>
                    <Header.Link href="/">
                        <Avatar
                            src="/logo192.png"
                            size={32}
                            sx={{ mr: 2 }}
                            alt="@monproweb"
                        />
                    </Header.Link>
                </Header.Item>
            </Header>
                    <Box m={4}>
                        <Box className="App">
                                <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "#3c3c3d",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ecf0f1",
          },
          links: {
            color: "#ecf0f1",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "losange",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
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

export default App
