import React, { useEffect } from "react";
import { Fragment } from "react/cjs/react.production.min";
import { useState } from "react";

export const Creation = (props) => {

    let [compteur, setCompteur] = useState(0)

    // Gérer la création du composant :

    useEffect ( () => {
        console.log("It's alive !")
    }, [] );
    // Vérifier la MAJ du compteur : 

    useEffect ( () => {
        console.log("Compteur mis à jour")
    }, [compteur])

    // Vérif de la destruction du composant : 

    useEffect( () => {
        return () => {
            console.log("Boom : DEAD !")
        }
    }, [])

    let handleClick = (e) => {
        setCompteur(++compteur)
        e.stopPropagation();
    }


    return ( 
        <Fragment>
            <div>
                <h2>Ceci est mon composant Création</h2>
                <p>L'affichage est à : {props.affiche && "True"}</p>
                <p>Le compteur est à : {compteur}</p>
                <button type="button" onClick={handleClick}>One Up !</button>
            </div>

        </Fragment>
    )
};

export default Creation;