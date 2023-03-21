import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import About from '../pages/About'

describe('About component', () => {
    it('renders the heading', () => {
        render(<About />)
        const heading = screen.getByRole('heading', {
            name: /about monproweb/i,
        })
        expect(heading).toBeInTheDocument()
    })

    it('renders the correct number of sections', () => {
        render(<About />)
        const sections = screen.getAllByRole('region')
        expect(sections.length).toBe(4)
    })

    it('renders the correct images and texts for each section', () => {
        render(<About />)
        const images = [
            'Cat in space',
            'Positive change ambassador badge from RSM',
            'A boat with Ethereum sail',
            'ChatGPT mind',
        ]
        const texts = [
            /Monproweb is a startup/i,
            /As an eco-friendly company/i,
            /In addition to our focus on sustainability/i,
            /At Monproweb, we pride ourselves/i,
        ]

        images.forEach((imageAlt, index) => {
            const image = screen.getByAltText(imageAlt)
            expect(image).toBeInTheDocument()

            const text = screen.getByText(texts[index])
            expect(text).toBeInTheDocument()
        })
    })
})
