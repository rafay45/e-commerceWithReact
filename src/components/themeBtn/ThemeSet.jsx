import { LuSun } from "react-icons/lu"
import { LuSunMoon } from "react-icons/lu"
import { useTheme } from "../switcher/switcher"

function ThemeSet() {
    const { theme, darkTheme, lightTheme } = useTheme()
    const changeTheme = () => {
        if (theme) {
            darkTheme()
            // localStorage.setItem('themeToggle', theme)
        } else {
            lightTheme()
        }
    }
    // const changeSec = () => {
    //     if (theme === "dark") {
    //         lightTheme()
    //         // localStorage.removeItem('themeToggle')
    //     } else {
    //         darkTheme()
    //     }
    // }
    return (
        <>
            <button
                onClick={changeTheme}
                className={`md:w-14 md:h-15 h-7 w-7 justify-center dark:text-gray-400 text-white items-center cursor-pointer ${theme === "dark" ? "flex" : "hidden"} `}>
                {theme === 'light' ? <LuSunMoon size={30} /> : <LuSun size={30} />}
            </button>
            {/* <button
                onClick={changeTheme}
                className={`md:w-14 md:h-15 h-7 w-7 justify-center items-center cursor-pointer ${theme === "light" ? "flex" : "hidden"}`}>
                <LuSunMoon size={30} />
            </button> */}
        </>
    )
}

export default ThemeSet