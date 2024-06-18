import React, { useEffect, useState } from 'react'

export default function Weather() {
    const [weather, setWeather] = useState(null)

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=76c0be0d2961328aca5164cb5178cbf7`)
                    .then((res) => res.json())
                    .then((data) => console.log(data))
            })
        }
    }, [])

    return (
        <div>
            {
                weather ? (
                    <div>
                        <h1>Current Weather</h1>
                        <p>Temperature : {weather.main.temp}</p>
                        <p>Conditions : {weather.weather[0].description}</p>
                    </div>
                ) : (
                    <p>
                        Loading......
                    </p>
                )
            }
        </div>
    )
}
