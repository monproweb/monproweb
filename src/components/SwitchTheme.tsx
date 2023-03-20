import React, { useState, useEffect } from 'react'
import { useTheme, Button } from '@primer/react'
import { SunIcon, MoonIcon } from '@primer/octicons-react'

const SwitchTheme = () => {
    const { setColorMode, resolvedColorMode } = useTheme()
    const [isNight, setIsNight] = useState(false)

    useEffect(() => {
        setIsNight(resolvedColorMode === 'night')
    }, [resolvedColorMode])

    const handleClick = () => {
        if (isNight) {
            setColorMode('day')
        } else {
            setColorMode('night')
        }
        setIsNight(!isNight)
    }

    return (
        <Button onClick={handleClick}>
            {isNight ? <SunIcon /> : <MoonIcon />}
        </Button>
    )
}

export default SwitchTheme
