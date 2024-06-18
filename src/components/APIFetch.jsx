import React, { useEffect, useState } from 'react'

export default function APIFetch() {

    const [data, setData] = useState(null)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/1")
            .then((res) => res.json())
            .then((json) => setData(json))
    }, [])

    return (
        <div>
            {
                data ? (<div>
                    <h1>{data.title}</h1>
                    <h1>{data.body}</h1>
                </div>) :
                    (<h1>Loading....</h1>)
            }
        </div>
    )
}
