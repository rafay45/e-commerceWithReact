import { createContext, useContext } from "react";

export const Switcher = createContext({
    theme: "light",
    darktheme: () => { },
    lightTheme: () => { }
})

export const SwitcherProvider = Switcher.Provider

export default function useTheme() {
    return useContext(Switcher)
}