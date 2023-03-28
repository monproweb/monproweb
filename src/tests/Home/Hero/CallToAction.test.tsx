import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import CallToAction from '../../../components/Home/Hero/CallToAction'

describe('CallToAction component', () => {
    test('renders the buttons correctly', () => {
        render(
            <MemoryRouter>
                <CallToAction />
            </MemoryRouter>
        )
        const button = screen.getByRole('link', { name: /Get in touch/i })
        expect(button).toBeInTheDocument()
        const link = screen.getByRole('link', { name: /Learn more/i })
        expect(link).toBeInTheDocument()
    })

    test('opens the Twitter URL when clicking the Get in touch button', () => {
        render(
            <MemoryRouter>
                <CallToAction />
            </MemoryRouter>
        )

        const button = screen.getByRole('link', { name: /Get in touch/i })
        expect(button).toHaveAttribute(
            'href',
            'https://twitter.com/ThomasErhel'
        )
        expect(button).toHaveAttribute('target', '_blank')
        expect(button).toHaveAttribute('rel', 'noreferrer')
    })

    test('navigates to the About URL when clicking the Learn more link', () => {
        render(
            <MemoryRouter>
                <CallToAction />
            </MemoryRouter>
        )

        const link = screen.getByRole('link', {
            name: /Learn more about Monproweb/i,
        })
        fireEvent.click(link)

        expect(link).toHaveAttribute('href', '/about')
    })
})
