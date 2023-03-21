import * as React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import NoMatch from '../pages/NoMatch'
import '@testing-library/jest-dom'

describe('NoMatch component', () => {
    it('renders the heading', () => {
        render(
            <Router>
                <NoMatch />
            </Router>
        )
        const heading = screen.getByRole('heading', {
            name: /oops! we couldn't find the page you're looking for\./i,
        })
        expect(heading).toBeInTheDocument()
    })

    it('renders the description', () => {
        render(
            <Router>
                <NoMatch />
            </Router>
        )
        const descriptionTextRegex =
            /the page you're trying to access doesn't seem to exist on this site\. please check the url and try again, or go to the home page for more information\./i
        const description = screen.getByTestId('no-match-description')
        expect(description).toBeInTheDocument()
        expect(description).toHaveTextContent(descriptionTextRegex)
    })

    it('renders the link to the home page', () => {
        render(
            <Router>
                <NoMatch />
            </Router>
        )
        const homePageLink = screen.getByRole('link', { name: /home page/i })
        expect(homePageLink).toBeInTheDocument()
        expect(homePageLink).toHaveAttribute('href', '/')
    })
})
