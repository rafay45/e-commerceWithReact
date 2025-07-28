import { LuSunMoon } from "react-icons/lu"
import { LuSun } from "react-icons/lu"
import { useTheme } from "../switcher/switcher"

function ThemeSets() {
    const { theme, darkTheme, lightTheme } = useTheme()
    const changeTheme = () => {
        if (theme) {
            darkTheme()

        } else {
            lightTheme()
        }
    }
    const changeSec = () => {
        if (darkTheme) {
            lightTheme()
        } else {
            darkTheme()
        }
    }
    return (
        <button
            onClick={changeTheme}
            className='md:w-14 md:h-15 flex justify-center items-center cursor-pointer'>
            <LuSunMoon size={30} />
        </button>
    )
}

export default ThemeSets