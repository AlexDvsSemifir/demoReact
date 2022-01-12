import React from "react";
import { Fragment } from "react/cjs/react.production.min";

let obj = {
    // Affichera la valeur envoyée par le parent, en fonction de la valeur de l'attribut "type"
    premier(props) {
        return <div>Nom: {props.val}</div>
    },
    second(props) {
        return <div>Prenom : {props.val}</div>
    }
}


export const Dynamique = (props) => {
    const Choice = obj[props.type]
    return (
        <Fragment>
            <h2>Composant Dynamique :</h2>
            <Choice val={props.val} />

        </Fragment>
        )
};

export default Dynamique;