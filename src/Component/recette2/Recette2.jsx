import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import AfficherRecette2 from "./AfficherRecette2";

export const Recette2 = (props) => {

    // Les éléments peuvent être données en dehors (dans une variable) et appelés en props
    let etapes = ["melanger", "laisser reposer", "faire cuire"]
    
    return ( 
        <Fragment>
            <AfficherRecette2 
                nom="Crèpes"
                // Ou saisis directement en props
                ingredients= {["oeuf", "farine", "lait", "rhum"]}
                etapes={etapes} />
        </Fragment>

    )
}

export default Recette2