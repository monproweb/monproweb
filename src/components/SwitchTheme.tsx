import React, { useState } from 'react'
import { useTheme, Button } from '@primer/react'
import { SunIcon, MoonIcon } from '@primer/octicons-react'

const SwitchTheme = () => {
    const { setColorMode } = useTheme()
    const [isNight, setIsNight] = useState(false)

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
