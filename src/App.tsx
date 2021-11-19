import React, { Component } from "react";
import { ReactComponent as Logo } from './logo.svg'
import 'styles/App.scss'
import GPLv3 from './images/gplv3-88x31.png'
import Particles from 'react-tsparticles'
import particlesOptions from './particles.json'
import { ISourceOptions } from 'tsparticles'
import {ThemeProvider, BaseStyles, Box, Heading} from '@primer/components'

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
                    <Box m={4}>
                <div className="App">
                    <Particles options={particlesOptions as ISourceOptions}/>
                    <header className="App-header">
                                <Logo title="logo" className="App-logo" />
                                <Heading sx={{mb: 2}}>Bonjour! 👋</Heading>
                        <p>
                            Je construis des applications <code>libres</code> et <code>écoresponsables</code>
                        </p>
                        <a
                            className="App-link"
                            href="https://github.com/monproweb/monproweb"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Mon Pro Web
                        </a>
                        <div>
                            <button onClick={this.handleClick}>
                                🔥 Citation
                            </button>
                                </div>
                        <div>
                            <img src={GPLv3} alt="Free as in Freedom" />
                        </div>
                    </header>
                    </div>
                        </Box>
                    </BaseStyles>
                </ThemeProvider>
        )
    }
}

export default App
