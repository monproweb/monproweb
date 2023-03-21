import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Home from '../../pages/Home'
import { BrowserRouter } from 'react-router-dom'

describe('Home', () => {
    test('renders Hero component', () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        )
        const heroElement = screen.getByTestId('hero-component')
        expect(heroElement).toBeInTheDocument()
    })
})
