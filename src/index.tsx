import React from 'react'
import { hydrate, render } from 'react-dom'
import App from './App'
import { ThemeProvider, BaseStyles, Spinner } from '@primer/react'
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'

const rootElement = document.getElementById('root') as HTMLElement

const app = (
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider colorMode="auto">
                <BaseStyles>
                    <React.Suspense fallback={<Spinner />}>
                        <App />
                    </React.Suspense>
                </BaseStyles>
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
)

if (rootElement.hasChildNodes()) {
    hydrate(app, rootElement)
} else {
    render(app, rootElement)
}

serviceWorkerRegistration.register()
reportWebVitals()
