import React from "react";
import { Fragment } from "react/cjs/react.production.min";

export const AfficherRecette = (props) => {
  return (
    <Fragment>
      <div>
        <h2>{props.nom}</h2>
        <h3>Ingredients : </h3>
        <ul>
          {props.ingredients.map((ingredient, index) => 
            <li key={index}>{ingredient}</li>
          )}
        </ul>
        <h3>Etapes</h3>
        <ul>
            {props.etapes.map( (etape, index2) => 
                <li key={index2}> {etape}</li>
            )}
        </ul>
      </div>
    </Fragment>
  );
};

export default AfficherRecette;
