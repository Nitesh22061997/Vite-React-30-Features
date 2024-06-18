import React, { useState } from 'react'

export default function BgColor() {
    const [backgroundColor, setBackgroundColor] = useState("white")

    const handleColor = () => {
        const newColor = backgroundColor === "white" ? "blue" : "white"
        setBackgroundColor(newColor)
    }



    return (
        <div style={{
            backgroundColor,
            width: "200px",
            height: "100px",
            cursor: "pointer"
        }} onClick={handleColor}>
            CLick me to change color
        </div>
    )
}
