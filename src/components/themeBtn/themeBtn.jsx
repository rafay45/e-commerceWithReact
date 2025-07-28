import { LuSunMoon } from "react-icons/lu"
import { LuSun } from "react-icons/lu"
import { useTheme } from "../switcher/switcher"

function themeBtn() {
    const { theme , darktheme, lightTheme } = useTheme()
    const changeTheme = () => {
         if(theme){
            darktheme()
         }else{
            lightTheme()
         }
    }
    return (

        <button
            onClick={changeTheme}
            className='md:w-14 md:h-15 flex justify-center items-center cursor-pointer'>
            {theme ? <LuSunMoon size={30} /> : <LuSun size={30} />}
        </button>
    )
}

export default themeBtn