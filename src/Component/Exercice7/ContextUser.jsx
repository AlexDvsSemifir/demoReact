// React Imports :

import React, { Fragment, useContext } from "react";

// Components imports :

import { themeContext } from "./ContextProvider";

// Bootstrap imports :
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';


export const ContextUser = () => {

    const handleClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        alert('Tu as cliqué sur le boutton ! Le thème est ' + theme)
    }

    let theme = useContext(themeContext)
    theme = theme.dark

    return ( 
        <Fragment>
            <h3>ContextUser</h3>
            <p>Composant ContextUser qui récupère le contexte</p>
            <p>J'utilise le theme {theme}</p>
            <Button variant={theme} onClick={handleClick}>Boutton</Button>
        </Fragment>
    )
}

export default ContextUser;