import { createContext, useContext } from "react";

export const switcher = createContext({
    theme: "light",
    darktheme: () => { },
    lightTheme: () => { }
})

export const switcherProvider = switcher.Provider

export default function useTheme() {
    return useContext(createContext)
}