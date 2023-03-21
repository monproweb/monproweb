import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider } from '@primer/react'
import SwitchTheme from '../components/SwitchTheme'

describe('SwitchTheme component', () => {
    const renderSwitchThemeComponent = () => {
        render(
            <ThemeProvider>
                <SwitchTheme />
            </ThemeProvider>
        )
    }

    it('renders the MoonIcon by default', () => {
        renderSwitchThemeComponent()
        const moonIcon = screen.getByRole('img', { name: /moon icon/i })
        expect(moonIcon).toBeInTheDocument()
    })

    it('switches to SunIcon after clicking the button', () => {
        renderSwitchThemeComponent()
        const button = screen.getByRole('button')
        fireEvent.click(button)

        const sunIcon = screen.getByRole('img', { name: /sun icon/i })
        expect(sunIcon).toBeInTheDocument()
    })

    it('switches back to MoonIcon after clicking the button twice', () => {
        renderSwitchThemeComponent()
        const button = screen.getByRole('button')
        fireEvent.click(button)
        fireEvent.click(button)

        const moonIcon = screen.getByRole('img', { name: /moon icon/i })
        expect(moonIcon).toBeInTheDocument()
    })
})
