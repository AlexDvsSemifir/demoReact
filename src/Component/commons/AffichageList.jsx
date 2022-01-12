import React from "react";
import { Fragment } from "react/cjs/react.production.min";

// Rendre le composant générique :

export const AffichageList = (props) => {
  return (
    <Fragment>
      {/* On lui donne des noms d'attributs génériques que l'on pourra lui passer en appelant notre composant générique  */}
      <h3>{props.nomList}</h3>
      <ul>
        {/* 
        On utilise 'map' pour générer une boucle 'for' sur la liste
        Il stockera chaque item sous la variable 'element', sous l'index 'i' qui s'incrémentara tout seul*/}
        {props.liste.map((element, i) => 
          <li key={i}>{element}</li>,
          {/* L'attribut 'key' doit contenir notre inder (i) et affichera les 'elements' extraits de la liste  */}
        )}
      </ul>
    </Fragment>
  );
};

export default AffichageList;
