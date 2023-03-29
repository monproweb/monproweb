import { useState, useEffect } from 'react'
import { useTheme, Button } from '@primer/react'
import { SunIcon, MoonIcon } from '@primer/octicons-react'

const SwitchTheme = () => {
    const { setColorMode, resolvedColorMode } = useTheme()
    const [isNight, setIsNight] = useState(resolvedColorMode === 'night')

    useEffect(() => {
        setIsNight(resolvedColorMode === 'night')
    }, [resolvedColorMode])

    const handleClick = () => {
        if (isNight) {
            setColorMode('day')
            setIsNight(false)
        } else {
            setColorMode('night')
            setIsNight(true)
        }
    }

    return (
        <Button onClick={handleClick} data-testid="switch-theme">
            {isNight ? (
                <SunIcon aria-label="Sun icon" />
            ) : (
                <MoonIcon aria-label="Moon icon" />
            )}
        </Button>
    )
}

export default SwitchTheme
