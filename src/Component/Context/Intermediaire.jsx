import React, { Fragment } from 'react'
import MonConsumer from './MonConsumer';

export const Intermediaire = (props) => {

    return ( 
        <Fragment>
            {/* Que le composant intermédiaire récupère pour les passer au Consumer ... */}
            <h2>Ceci est le composant intermédiaire</h2>
            <p>ici je peux récupérer une info : {props.couleur}</p>
            <p>Je passe ensuite la couleur à mon enfant</p>
            <MonConsumer couleur={props.couleur}/>
        </Fragment>
    )
}

export default Intermediaire;