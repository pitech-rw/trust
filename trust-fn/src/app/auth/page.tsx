'use client'
import { useState } from 'react'
const AuthPage = () => {
    const [theme, setTheme] = useState(0);

    const changeTheme = () => {
    setTheme(1) 
    }
    const navItems = ['Mounting', 'Delivery', 'Home chores', 'Handyman', 'Electric']
    return (
        <main>
            <div>
                <div>
                    <h1>Trust</h1>
                    <span>Explore</span>
                    <ul>
                        {
                            navItems.map((item) => (
                                <li key={item}>{item}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <button onClick={changeTheme}>Prefer dark mode {theme}</button>
        </main>
    )
}


export default AuthPage