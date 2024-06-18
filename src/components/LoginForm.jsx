import React, { useState } from 'react'

export default function LoginForm() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isRegistered, setIsRegistered] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState([])

    const handleAuth = () => {
        if (isRegistered) {
            // Login
            const user = user.find((i) => i.email === email && i.password === password)
            if (user) {
                setIsLoggedIn(true)
            }
            else {
                alert("Invalid User")
            }
        }
        else {
            //   Register
            const newuser = { email, password }
            setUser([...user, newuser])
            localStorage.setItem("user", JSON.stringify([...user, newuser]))
            setIsLoggedIn(true)

        }
    }

    const handleLogout = () => {
        setIsLoggedIn(false)
        setEmail("")
        setPassword("")
    }



    return (
        <div>
            {
                isLoggedIn ? (
                    <div>
                        <h2>Welcome user {email}</h2>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                ) : (
                    <div>
                        <h2>
                            {
                                isRegistered ? "Login" : "Register"
                            }
                        </h2>
                        <form >
                            <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                            <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                            <button onClick={handleAuth}>
                                {
                                    isRegistered ? "Login" : "Register"
                                }
                            </button>
                        </form>
                        <p>
                            {
                                isRegistered ? "Don't have an account? Register now" : "Already have aacount! Login"
                            }
                        </p>
                        <button onClick={() => setIsRegistered(!isRegistered)}>
                            {
                                isRegistered ? "Register" : "Login"
                            }
                        </button>
                    </div>
                )
            }

        </div>
    )
}
