import { createContext, useEffect, useReducer } from "react";
import { themeReducer, ThemeState, lightTheme } from "./ThemeReducer";
import { AppState, Appearance, useColorScheme } from "react-native";


interface ThemeContextProps {
  theme: ThemeState;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}


export const ThemeContext = createContext({} as ThemeContextProps)

export const ThemeProvider = ({ children }: any) => {

  const systemSchemeColor = useColorScheme()

  useEffect(() => {
    AppState.addEventListener('change', (status) => {
      if (status === 'active') {
        (Appearance.getColorScheme() === 'light')
          ? setLightTheme()
          : setDarkTheme()
      }
    })
  }, [])

  const [theme, dispatch] = useReducer(themeReducer, lightTheme);

  const setDarkTheme = () => {
    dispatch({ type: 'dark_theme_on' })
  }

  const setLightTheme = () => {
    dispatch({ type: 'light_theme_on' })
  }


  return (
    <ThemeContext.Provider value={{
      theme,
      setDarkTheme,
      setLightTheme
    }}
    >
      {children}
    </ThemeContext.Provider>
  )
}