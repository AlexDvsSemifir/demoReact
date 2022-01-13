import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import ListeUtilisateur from "../Exercice4/ListeUtilisateur";
import CAfficheUtilisateurs from "../CorrectionEercice4/C_AfficherUtilisateurs";


export const UsersPage = (props) => {
    return ( 
        <Fragment>
        <ListeUtilisateur />
        <CAfficheUtilisateurs/>
        </Fragment>
    )
};

export default UsersPage;