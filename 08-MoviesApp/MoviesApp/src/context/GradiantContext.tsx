import React, { createContext, useState } from "react";

interface ImageColors {
    primary: string;
    secondary: string;
}

interface ContextProps {
    colors: ImageColors;
    prevColors: ImageColors;
    setMainColors: (colors: ImageColors) => void;
    setMainPrevColors: (colors: ImageColors) => void;
}


export const GradientContext = createContext({} as ContextProps)

export const GradientProvider = ({ children }: any) => {

    const [colors, setColors] = useState<ImageColors>({ primary: '#161A30', secondary: '#31304D' })
    const [prevColors, setPrevColors] = useState<ImageColors>({ primary: 'blue', secondary: 'gray' })

    // Actions 
    const setMainColors = (colors: ImageColors) => { setColors(colors) }

    const setMainPrevColors = (colors: ImageColors) => { setPrevColors(colors) }

    return (
        <GradientContext.Provider value={{
            colors,
            prevColors,
            setMainColors,
            setMainPrevColors
        }}
        >
            {children}
        </GradientContext.Provider>

    )
}