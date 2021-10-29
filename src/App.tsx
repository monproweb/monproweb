import React, { Component } from 'react'
import { ReactComponent as Logo } from './logo.svg'
import 'styles/App.scss'

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
            <>
                <div className="App">
                    <header className="App-header">
                        <Logo title="logo" className="App-logo" />
                        <p>
                            Je construis des applications <code>libres</code> et{' '}
                            <code>écoresponsables.</code>
                        </p>
                        <a
                            className="App-link"
                            href="https://github.com/monproweb/mon-pro-web"
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
                            <img
                                src="https://www.gnu.org/graphics/gplv3-with-text-136x68.png"
                                alt="Free as in Freedom"
                            />
                        </div>
                    </header>
                </div>
            </>
        )
    }
}

export default App
