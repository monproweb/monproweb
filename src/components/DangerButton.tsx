import React, { Component } from 'react'
import Button from './Button'
import styles from './styles/Button.module.css'

class DangerButton extends Component {
    render() {
        return <Button children={styles.error} />
    }
}

export default DangerButton
