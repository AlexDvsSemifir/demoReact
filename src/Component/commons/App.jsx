// 1. Faire l'import de react
import React from "react";

// Import du CSS pour ce composant :
// C'est le CSS le plus précis qui a raison
import "./app.css";

// 7. Import d'un autre composant
import Exemple1 from "../Exemple1";
import MonPremier from "../first/MonPremier";
import { Compteur } from "../button/Compteur.jsx";
import { Recuperateur } from "../Recuperateur";
import Dynamique from "../Dynamique";
import ListOfThings from "../ListOfThings";
import Recette from "../recette/Recette";
import Recette2 from "../recette2/Recette2"
import Controlled from "../Controlled";
import ComposantFonction from "../ComposantFonction";
import ListeUtilisateur from "../Exercice4/ListeUtilisateur";

// 2. Créer ma classe composant
export class App extends React.Component {
  // 3. Doit posséder la fonction render() ...
  render() {
    // ... qui doit impérativement retourner quelque chose : du html
    return (
      <div>
        <h1> Coucou </h1>
        <Exemple1 />
        <MonPremier />
        <Compteur />
        {/* Objet qui permet de récupérer des informations via un "props" (attribu) depuis le parent. 
        On peut donner plusieurs attributs*/}
        <Recuperateur info="Poulet" />
        {/* Come un props, mais peut intégrer des informations complexes (comme du code). 
        Sera enregistré sous l'attribu "Children". 
        Contrairement au props, on ne peut donner qu'un seul attribu */}
        <Compteur>Truc à insérer</Compteur>
        {/* Envoi les infos à Dynamique sous le props "type"
        Val est un props qui va être envoyé à l'enfant. Il faut donc qu'il soit présent dans le parent. */}
        <Dynamique type="premier" val="Devos"/>
        <ListOfThings/>
        <Recette/>
        <Recette2/>
        <Controlled/>
        <ComposantFonction heritage="Une montre"/>
        <ListeUtilisateur />
      </div>
    );
  }
}

// 4. Export de ma classe
export default App;
