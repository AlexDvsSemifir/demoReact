import React from "react";
import { Fragment } from "react/cjs/react.production.min";
// Importe AffichageList qui est notre module générique pour afficher des listes
import AffichageList from "../commons/AffichageList";


export const AfficherRecette2 = (props) => {
  return (
    <Fragment>
      <div>
        <h2>Affichage dymanique en utilisant AffichageList pour la recette : {props.nom}</h2>
        {/* Appel de AffichageList, et on lui passe les paramètres qu'il attend */}
        <AffichageList nomList="Liste des ingrédients" liste={props.ingredients}></AffichageList>
        {/* On peut l'appeler plusieurs fois en passant des paramètres différents */}
        <AffichageList nomList="Recette" liste={props.etapes}></AffichageList>
      </div>
    </Fragment>
  );
};

export default AfficherRecette2;
