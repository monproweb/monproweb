import React, { Component } from 'react'
import styles from './styles/Button.module.css'
import './styles/another-stylesheet.css'

class Button extends Component {
    render() {
        return <button className={styles.error}>Error Button</button>
    }
}

export default Button
