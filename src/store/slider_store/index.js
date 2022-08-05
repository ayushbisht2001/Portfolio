import React, {createContext, useReducer, userReducer} from 'react'
import { initial_state, slideReducer } from './reducer'


export const SlideContext = createContext({})

export const SlideContextProvider = ({children}) => {

    const [ state, slideContextDispatch] = useReducer(slideReducer, initial_state)

    return (

        <SlideContext.Provider value = {{ state , slideContextDispatch}} >
            {children}
        </SlideContext.Provider>

    )


}