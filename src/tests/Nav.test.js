import { render, screen } from '@testing-library/react'
import { MemoryRouter, useLocation } from 'react-router-dom'
import Nav from '../components/Nav'

const LocationDisplay = () => {
    const location = useLocation()
    return <div data-testid="location">{location.pathname}</div>
}

const renderWithRouter = (ui, { route = '/' } = {}) => {
    return render(
        <MemoryRouter initialEntries={[route]}>
            {ui}
            <LocationDisplay />
        </MemoryRouter>
    )
}

describe('Nav component', () => {
    test('renders MonProWeb text and logo', () => {
        renderWithRouter(<Nav />)
        const logo = screen.getByAltText(/@monproweb/i)
        const text = screen.getByText(/MonProWeb/i)
        expect(logo).toBeInTheDocument()
        expect(text).toBeInTheDocument()
    })

    test('renders switch theme button', () => {
        renderWithRouter(<Nav />)
        const switchThemeButton = screen.getByTestId('switch-theme')
        expect(switchThemeButton).toBeInTheDocument()
    })
})
