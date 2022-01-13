import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import { useState } from "react";
import AjoutUtilisateur from "./AjoutUtilisateur";


export const ListeUtilisateur = (props) => {
    
    let [users, setUsers] = useState([])

    let [newUser, setNewUser] = useState(
        {
            nom: "",
            prenom: "",
            age: ""
        })

    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setUsers(users += setNewUser(
            {
            nom: this.nom.value,
            prenom: this.prenom.prenom,
            age: this.age.value
            }
        ))
    };



    return ( 
        <Fragment>
            <h2>Liste des utilisateurs : </h2>
            <p>{users}</p>
            <h2>Ajouter un utilisateur :</h2>
            <AjoutUtilisateur 
            // prenom={input => this.prenom = input}
            // nom={input => this.nom = input}
            // age={input => this.age = input}
            handleSubmit={handleSubmit}
            newUser={setNewUser}
            />
        </Fragment>
    )
}

export default ListeUtilisateur 