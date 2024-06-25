import React, { useState } from 'react'

export default function SelectColor() {

    const [selectedColor, setSelectedColor] = useState(`#000000`)

    const handleChange = (e) => {
        setSelectedColor(e.target.value)
    }

    return (
        <div>
            <input type="color" onChange={handleChange} />
            <div style={{ width: `200px`, height: `200px`, backgroundColor: selectedColor }}>


            </div>
        </div>
    )
}
