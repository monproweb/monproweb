import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from 'components/Layout'
import Home from 'pages/Home'
import { Spinner } from '@primer/react'

const About = React.lazy(() => import('./pages/About'))
const Privacy = React.lazy(() => import('./pages/Privacy'))
const Terms = React.lazy(() => import('./pages/Terms'))
const NoMatch = React.lazy(() => import('./pages/NoMatch'))

export default function App() {
    return (
        <React.Suspense fallback={<Spinner />}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="privacy" element={<Privacy />} />
                    <Route path="terms" element={<Terms />} />
                    <Route path="*" element={<NoMatch />} />
                </Route>
            </Routes>
        </React.Suspense>
    )
}
