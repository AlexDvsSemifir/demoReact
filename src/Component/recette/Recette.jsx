import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import AfficherRecette from "./AfficherRecette";

export const Recette = (props) => {

    // Les éléments peuvent être données en dehors et appelés en props
    let etapes = ["melanger", "laisser reposer", "faire cuire"]
    
    return ( 
        <Fragment>
            <AfficherRecette 
                nom="Crèpes"
                // Ou saisis directement en props
                ingredients= {["oeuf", "farine", "lait", "rhum"]}
                etapes={etapes} />
        </Fragment>

    )
}

export default Recette