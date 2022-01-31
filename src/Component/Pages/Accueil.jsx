import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import Exemple1 from '../Exemple1'
import MonPremier from '../first/MonPremier'
import Recuperateur from '../Recuperateur'
import Dynamique from "../Dynamique";
import ListOfThings from "../ListOfThings";
import Recette from "../recette/Recette";
import Recette2 from "../recette2/Recette2";
import Controlled from "../Controlled";
import ComposantFonction from "../ComposantFonction";
import MonProvider from "../Context/MonProvider";
import ContextUser from "../Exercice7/ContextUser";
import ContextProvider from "../Exercice7/ContextProvider";

export const Accueil = (props) => {
    return ( 
        <Fragment>
            <Exemple1 />
            <MonPremier />
            {/* Objet qui permet de récupérer des informations via un "props" (attribu) depuis le parent. 
        On peut donner plusieurs attributs*/}
            <Recuperateur info="Poulet" />
            {/* Envoi les infos à Dynamique sous le props "type"
            Val est un props qui va être envoyé à l'enfant. Il faut donc qu'il soit présent dans le parent. */}
            <Dynamique type="premier" val="Devos"/>
            <ListOfThings/>
            <Recette/>
            <Recette2/>
            <Controlled/>
            <ComposantFonction heritage="Une montre"/>
            <MonProvider />
            <ContextProvider />
        </Fragment>
    )
};

export default Accueil;