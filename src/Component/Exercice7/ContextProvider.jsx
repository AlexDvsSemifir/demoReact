// React imports :

import React, { Fragment } from "react";

// Component import :

import ContextIntermediaire from "./ContextIntermediaire";

// Context

const themes = {
    light: "light",
    dark: "dark"
}

export const themeContext = React.createContext(themes)

export const ContextProvider = () => {

    return ( 
        <Fragment>
            <themeContext.Provider value={themes}>
                <ContextIntermediaire />
            </themeContext.Provider>
        </Fragment>
    )
}

export default ContextProvider;