import React, { createContext, useReducer } from "react";
import { authReducer } from "./AuthReducer";

// Definir como luce y que informacion tendra
export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    imageUrl?: string;
    favoriteIcon?: string;
}

// Estado inicial
export const authInitialstate: AuthState = {
    isLoggedIn: false,
    username: undefined,
    imageUrl: undefined,
    favoriteIcon: undefined
}

// Como luce y que expone el context
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    signOut: () => void;
    changeIcon: (iconName: string) => void;
    changeUsername: (username: string, imageUrl: string | undefined) => void;
}

// Crear el contexto
export const AuthContext = createContext({} as AuthContextProps);

// Provedor del estado (component)
export const AuthProvider = ({ children }: any) => {

    const [state, dispatch] = useReducer(authReducer, authInitialstate);
    const signIn = () => {
        dispatch({
            type: 'login',
        })

        // Set default Logged User
        if (state.username === undefined && state.imageUrl === undefined) {
            changeUsername(
                'Ivan Galarza',
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png'
            )
        }
    }

    const signOut = () => {
        dispatch({
            type: 'logout',
        })
    }

    const changeIcon = (iconName: string) => {
        dispatch({
            type: 'changeFavIcon',
            payload: iconName
        })
    }

    const changeUsername = (username: string, imageUrl: string | undefined) => {
        dispatch({
            type: 'changeUsername',
            payload: username,
            img: imageUrl
        })
    }

    return (
        <AuthContext.Provider
            value={{
                authState: state,
                signIn,
                signOut,
                changeIcon,
                changeUsername
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
