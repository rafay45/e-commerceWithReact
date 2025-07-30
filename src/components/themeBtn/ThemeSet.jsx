import { LuSun } from "react-icons/lu"
import { LuSunMoon } from "react-icons/lu"
import { useState, useEffect } from "react"

function ThemeSet() {
    const [rotating, setrotaiting] = useState(false)
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        let getTheme = localStorage.getItem('themeToggle');
        console.log(getTheme);
        if (getTheme === 'dark') {
            setTheme(getTheme)
            document.querySelector('html').classList.add(getTheme)
        } else {
            document.querySelector('html').classList.add('light')
        }
    }, [])

    const changeTheme = () => {
        setrotaiting(true)
        setTimeout(() => {
            setTheme(prev => prev === 'light' ? 'dark' : 'light')
        }, 250);

        setTimeout(() => {
            setrotaiting(false)
        }, 500);
    }


    useEffect(() => {
        document.querySelector('html').classList.remove(theme === 'light' ? 'dark' : 'light');
        localStorage.setItem('themeToggle', theme)
        document.querySelector('html').classList.add(theme)
    }, [theme])

    return (
        <>
            <button
                onClick={changeTheme}
                className={`
        p-3 rounded-full text-xl
        bg-gray-200 dark:bg-gray-800 text-black dark:text-white
        transition-transform duration-500
        ${rotating ? 'rotate-180' : 'rotate-0'}`}>
                {theme === 'light' ? <LuSunMoon size={30} /> : <LuSun size={30} />}
            </button >
        </>
    )
}

export default ThemeSet