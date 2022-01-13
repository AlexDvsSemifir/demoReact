// 1. Faire l'import de react
import React from "react";
import { Fragment } from "react/cjs/react.development";

// Import du CSS pour ce composant :
// C'est le CSS le plus précis qui a raison
import "./app.css";
import { Routing } from "./Routing";

// 7. Import d'un autre composant


// 2. Créer ma classe composant
export class App extends React.Component {
  // 3. Doit posséder la fonction render() ...
  render() {
    // ... qui doit impérativement retourner quelque chose : du html
    return (
      <Fragment>
        <h1> Bienvenue sur la Démo REACT ! </h1>
        {/* Appel du composant 'Routing' qui contient nos routes : */}
        <Routing />
      </Fragment>
    );
  }
}

// 4. Export de ma classe
export default App;
