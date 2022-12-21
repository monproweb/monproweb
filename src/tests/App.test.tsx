import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../App'

test('renders monproweb github link', () => {
    render(<App />)
    const linkElement = screen.getByText(/Mon Pro Web/i)
    expect(linkElement).toBeInTheDocument()
})
