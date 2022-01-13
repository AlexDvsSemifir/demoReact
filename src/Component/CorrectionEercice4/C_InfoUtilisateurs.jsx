import React from "react";
import { Fragment } from "react/cjs/react.production.min";

export const CInfoUtilisateurs = (props) => {

    return ( 
        <Fragment>
            <ul>
                <li>{props.utilisateur.nom}</li>
                <li>{props.utilisateur.prenom}</li>
                <li>{props.utilisateur.age}</li>
            </ul>
        </Fragment>
    )
};

export default CInfoUtilisateurs
