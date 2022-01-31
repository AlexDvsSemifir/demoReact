
// Composant Provider dont le but est de récupérer/stocker de l'information et de le passer à des composant de manière directe.
// Il permet d'éviter de passer par des héritages multiples et de donner l'information directment.

import React, { Fragment } from 'react'
import Intermediaire from './Intermediaire';

const couleurs = {
    couleur1: "rouge",
    couleur2: "vert"
};

const notes = {
    note1: "do",
    note2: "ré",
    note3: "mi",
    
};
// Pour passer Notes à qui je veux, sans intermédiraire, je créé un contexte : 
// NB : penser à exporter le contexte.
export const noteContext = React.createContext(notes)

export const MonProvider = () => {

    return ( 
        <Fragment>
            <h1>Ceci est le composant Provider</h1>
            <p>La couleur est</p>
            {/* On englobe entre les balises notecontext.Provider les balises qui doivent être ciblées par notre provider : 
            Tous les composants contenus dans ces balises recevront l'information. On peut créer plusieurs balises providers pour passer des infos différentes.
            - On précise un paramètre valude={} : Ils récupéreront l'info spécifiée. 
            Voir MonConsumer pour la suite.*/}
            <noteContext.Provider value={notes.note2}>
            {/* Ici : Le composant Provider appelle le composant intermédiaire pour lui donner des infos... */}
            <Intermediaire couleur={couleurs.couleur2}/>
            </noteContext.Provider>
        </Fragment>
    )
}

export default MonProvider;