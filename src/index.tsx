/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeProvider, BaseStyles, Spinner } from '@primer/react'
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
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

serviceWorkerRegistration.register()
reportWebVitals()
