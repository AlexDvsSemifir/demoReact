import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import Compteur from "../button/Compteur";

export const UseEffectPage = (props) => {
  return (
    <Fragment>
      <h1>Page accueil</h1>
      <Compteur />
      {/* Come un props, mais peut intégrer des informations complexes (comme du code). 
        Sera enregistré sous l'attribu "Children". 
        Contrairement au props, on ne peut donner qu'un seul attribu */}
      <Compteur>Truc à insérer</Compteur>

    </Fragment>
  );
};

export default UseEffectPage;
