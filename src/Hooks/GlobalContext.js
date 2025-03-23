import React from 'react'
import { createContext } from 'react'

export const GlobalContext = createContext()

const GlobalContext = (props) => {
    return (
        <>
            <GlobalContext.Provider value={'Hello World'}>

                {props.children}

            </GlobalContext.Provider>

        </>
    )
}

export default GlobalContextProvider