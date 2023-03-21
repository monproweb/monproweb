import React from 'react'
import { render, screen } from '@testing-library/react'
import ProgrammingImage from '../../../components/Home/Hero/ProgrammingImage'

describe('ProgrammingImage component', () => {
    test('renders the ProgrammingImage component', () => {
        render(<ProgrammingImage />)
        const image = screen.getByAltText('programming')
        expect(image).toBeInTheDocument()
    })
})
