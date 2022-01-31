import React, { Fragment, useContext } from 'react'
// Que le composant ici va récupérer. L'info est passée par MonProvider, puis Intermédiaire avant d'arriver à nous.

// Import du contexte (NB : penser à l'importer comme un objet (avec des : {} )
import {noteContext} from './MonProvider'

export const MonConsumer = (props) => {

    // useContext() permet de récupérer le contexte. Implique l'import du contexte, comme un module (voir plus haut)
    const maNote = useContext(noteContext)

    return ( 
        <Fragment>
            {/* Exemple d'héritage classique */}
            <h2>Ceci est le composant consumer</h2>
            <p>J'ai récupéré l'info de mon composant parent (Intermédiaire), qui a lui même récupéré ça de son parent(MonProvider) : {props.couleur}</p>

            {/* Exemple récupéré par le Provider */}
            <h2>Par Provider</h2>
            <p>Le provider a passé l'info : {maNote}</p>
        </Fragment>
    )
}

export default MonConsumer;