import React from "react";
import "./Exemple1.css";

// On ne met pas de variables à l'extérieur de la classe !
const nom = "Devos"; // Genre ça, c'est pas bien

export class Exemple1 extends React.Component {
  // On indique les variables directement dans le composant state :
  state = {
    prenom: "Alex",
    age: 29,
  };

  editText = (event) => {
    // Fonction qui permet de changer l'état d'un composant :
    this.setState({ prenom: event.target.value });
  };

  render() {
    return (
      <div id="jaune">
        <h2> Ceci est mon composant Exemple1 </h2>
        <p>
          {" "}
          Bonjour {this.state.prenom} {nom}{" "}
        </p>
        <p>Tu as {this.state.age} ans</p>
        <div>
          {/* Fonction pour écouter des infos */}
          <input type="text" onChange={this.editText} />
        </div>
      </div>
    );
  }
}

export default Exemple1;
