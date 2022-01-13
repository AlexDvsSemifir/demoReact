import React from "react";
import { Fragment } from "react/cjs/react.production.min";

export const AjoutUtilisateur = (props) => {

    return ( 
        <Fragment>
            <h2> Formulaire d'ajout d'utilisateurs </h2>
            <form action="" onSubmit={props.handleSubmit}>
            <label>Nom</label>
            <input type="text"  name="nom" ref={props.nom} />
            <label>Prenom</label>
            <input type="text"  name="prenom"ref={props.prenom}/>
            <label>Age :</label>
            <input type="number" name="age" ref={props.age} />
            <input type="submit" value="Submit" />
            </form>
        </Fragment>
    )
}

export default AjoutUtilisateur