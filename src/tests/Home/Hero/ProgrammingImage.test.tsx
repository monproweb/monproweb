import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ProgrammingImage from '../../../components/Home/Hero/ProgrammingImage'

describe('ProgrammingImage component', () => {
    it('renders the programming image correctly', () => {
        render(<ProgrammingImage />)

        const image = screen.getByRole('img', { name: /programming/i })
        expect(image).toBeInTheDocument()
        expect(image).toHaveAttribute(
            'src',
            expect.stringContaining('programming.svg')
        )
        expect(image).toHaveAttribute('width', '300px')
        expect(image).toHaveAttribute('height', '300px')
    })
})
