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
            <h2>Exercice 7</h2>
            <hr />
            <h3>ContextProvider</h3>
            <p>Context Provider qui stocke les thèmes, et va les mettre à disposition des héritiers demandeurs</p>
            <themeContext.Provider value={themes}>
                <ContextIntermediaire />
            </themeContext.Provider>
        </Fragment>
    )
}

export default ContextProvider;