import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import InfoText from '../../../components/Home/Hero/InfoText'

describe('InfoText component', () => {
    it('renders the heading and texts correctly', () => {
        render(<InfoText />)

        const heading = screen.getByRole('heading', {
            name: /i build web and mobile applications\./i,
        })
        expect(heading).toBeInTheDocument()

        const passionText = screen.getByText(
            /passionate about programming and designing web and mobile applications\./i
        )
        expect(passionText).toBeInTheDocument()

        const skillsText = screen.getByText(
            /i put my skills at the service of your projects\./i
        )
        expect(skillsText).toBeInTheDocument()
    })
})
