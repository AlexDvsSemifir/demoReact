import React from "react";
import { Fragment } from "react/cjs/react.production.min";

export const Repeat = (props) => {
  // Préparation d'une liste :
  let items = [];
  // Boucle for pour traiter la liste
  for (let i = 0; i < props.nbFois; i++) {
    // Ajout de l'item de la liste en récupérant la foncton envoyée par "ListOfThings" en tant que props children
    items.push(props.children(i));
  }

  return (
    <Fragment>
      <p>info : {props.nbFois}</p>
      <ul>
        <li>{items}</li>
      </ul>
    </Fragment>
  );
};

export default Repeat;
