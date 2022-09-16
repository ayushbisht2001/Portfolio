import React, {createContext, useReducer, userReducer} from 'react'
import { initial_state, themeReducer } from './reducer'


export const ThemeContext = createContext({})

export const ThemeContextProvider = ({children}) => {

    const [ state, themeContextDispatch] = useReducer(themeReducer, initial_state)

    return (

        <ThemeContext.Provider value = {{ state , themeContextDispatch}} >
            {children}
        </ThemeContext.Provider>

    )


}