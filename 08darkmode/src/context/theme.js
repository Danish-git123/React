import { createContext,useContext } from "react";

// This is other method of using the context 
export const ThemeContext=createContext({
    themeMode:"light",
    darkMode:()=>{},
    lightMode:()=>{},//both darkMode and LightMode are functions we can also pass the data while creating the context
})

export const ThemeProvider=ThemeContext.Provider;

//here we are creating the hook
export default function useTheme(){
    return useContext(ThemeContext)
}
