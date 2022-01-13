import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import { useState } from "react";

export const CAjoutUtilisateur = (props) => {

    const [utilisateur, setUtilisateur] = useState({
        nom:"",
        prenom:"",
        age:0
    })

    const handleChangeNom = (e) => {
        e.preventDefault();
        setUtilisateur({
            ...utilisateur, nom:e.target.value
        })
    }
    const handleChangePrenom = (e) => {
        e.preventDefault();
        setUtilisateur({
            ...utilisateur, prenom:e.target.value
        })
    }
    const handleChangeAge = (e) => {
        e.preventDefault();
        setUtilisateur({
            ...utilisateur, age:e.target.value
        })
    }
    // const handleChange = (e) => {
    //     e.preventDefault();
    //     setUtilisateur({
    //         ...utilisateur, [e.target.nom]:e.target.value,
    //         ...utilisateur, [e.target.prenom]:e.target.value,
    //         ...utilisateur, [e.target.age]:e.target.value
    //     })
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        props.ajoutUtilisateur(utilisateur);
    }

    return ( 
        <Fragment>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        <input 
                        type="text" 
                        name="nom" 
                        onChange={handleChangeNom}
                        placeholder="Entrez un nom"/>
                    </label>
                    <label>
                        <input 
                        type="text" 
                        name="prenom" 
                        onChange={handleChangePrenom}
                        placeholder="Entrez un prenom"/>
                    </label>
                    <label>
                        <input 
                        type="number" 
                        name="age" 
                        onChange={handleChangeAge}
                        placeholder="Entrez un age"/>
                    </label>
                </div>
            </form>
            <button type="submit" value="Submit">Valider</button>
        </Fragment>
    )
};

export default CAjoutUtilisateur
