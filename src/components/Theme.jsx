import React from 'react'
import { useTheme } from './ThemeContext'

export default function Theme() {

    const { isDarkMode, toggleTheme } = useTheme()
    return (
        <div>
            <form>
                <label>
                    Theme change:
                    <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
                </label>
            </form>
        </div>
    )
}
