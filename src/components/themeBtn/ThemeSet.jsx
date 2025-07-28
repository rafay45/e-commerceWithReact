import { LuSun } from "react-icons/lu"
import { LuSunMoon } from "react-icons/lu"
import { useTheme } from "../switcher/switcher"

function ThemeSet() {
    const { theme, darkTheme, lightTheme } = useTheme()
    const changeTheme = () => {
        if (theme) {
            darkTheme()
        } else {
            lightTheme()
        }
    }
    const changeSec = () => {
        if (theme === "dark") {
            lightTheme()
        } else {
            darkTheme()
        }
    }
    return (
        <>
            <button
                onClick={changeSec}
                className={`md:w-14 md:h-15 justify-center text-white items-center cursor-pointer ${theme === "dark" ? "flex" : "hidden"} `}>
                <LuSun size={30} />
            </button>
            <button
                onClick={changeTheme}
                className={`md:w-14 md:h-15 justify-center items-center cursor-pointer ${theme === "light" ? "flex" : "hidden"}`}>
                <LuSunMoon size={30} />
            </button>
        </>
    )
}

export default ThemeSet