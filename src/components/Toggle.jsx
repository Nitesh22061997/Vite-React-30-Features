import React, { useState } from 'react'

export default function Toggle() {
    const [isToggle, setIsToggle] = useState(false)
    const handleToggle = () => {
        setIsToggle(!isToggle)
    }

    return (
        <div div >
            <label>
                <input type="checkbox" onChange={handleToggle} />
            </label>
            <p>{isToggle ? "On" : "Off"}</p>
        </div >
    )
}
