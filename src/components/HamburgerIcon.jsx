import { useState } from 'react'
import '../styles/Hamburger.css'

export default function HamburgerIcon() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <button className='menu-icon' onClick={toggleMenu}>☰ </button>
            <ul className={`menu ${isOpen ? 'open' : ''}`}>
                <li>Home</li>
                <li>Contact</li>
                <li>About Us</li>
                <li>Services</li>
            </ul>
        </div>
    )
}
