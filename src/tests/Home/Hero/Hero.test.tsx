import { render, screen } from '@testing-library/react'
import Hero from '../../../components/Home/Hero/Hero'
import { BrowserRouter } from 'react-router-dom'

jest.mock('../../../components/Home/Hero/ProgrammingImage', () => () => (
    <div data-testid="programming-image" />
))
jest.mock('../../../components/Home/Hero/InfoText', () => () => (
    <div data-testid="intro-text" />
))
jest.mock('../../../components/Home/Hero/CallToAction', () => () => (
    <div data-testid="call-to-action" />
))

describe('Hero component', () => {
    const renderHeroComponent = () => {
        render(
            <BrowserRouter>
                <Hero />
            </BrowserRouter>
        )
    }

    it('renders the ProgrammingImage component', () => {
        renderHeroComponent()
        const programmingImage = screen.getByTestId('programming-image')
        expect(programmingImage).toBeInTheDocument()
    })

    it('renders the IntroText component', () => {
        renderHeroComponent()
        const introText = screen.getByTestId('intro-text')
        expect(introText).toBeInTheDocument()
    })

    it('renders the CallToAction component', () => {
        renderHeroComponent()
        const callToAction = screen.getByTestId('call-to-action')
        expect(callToAction).toBeInTheDocument()
    })
})
