import React from 'react'
import { useTheme } from './ThemeContext';
import '../styles/Theme.css'

export default function ThemeComp() {

    const { isDarkMode } = useTheme();

    const themeClass = isDarkMode ? 'dark-theme' : 'light-theme'
    return (
        <div className={`conatiner ${themeClass}`}>
            <p>This component uses selected Theme</p>
        </div>
    )
}
