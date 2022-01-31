// React imports :

import React, { Fragment } from "react";

// Components imports :
import ContextUser from "./ContextUser";


export const ContextIntermediaire = () => {

    return ( 
        <Fragment>
            <h3>Composant intermédiaire</h3>
            <p>Qui ne sert à "rien" si ce n'est illustrer le relai de l'héritage</p>
            <ContextUser />
        </Fragment>
    )
}

export default ContextIntermediaire;