import React, { Fragment, useState } from "react";

// export class ComposantClasse extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       etat: "valeur",
//     };
//   }

//   render() {
//     return (
//       <Fragment>
//         <h2>Ceci est mon composant fonction :</h2>
//         <p>Il a cette valeur stockée dans osn état : {this.state.etat}</p>
//       </Fragment>
//     );
//   }
// }

/* 
Hooks : 
Ne sont PAS obligatoires,
Servent à gérer l'état des composant Stateless (= composant fonctions)
Servent aussi à gérer les cycles de vie des composants (création, modification, destruction ...)
Les HOOKS commencent par "use..." : 
    Ex : useState (permet d'implémenter l'état)
*/

export const ComposantFonction = (props) => {
  /* 
    L'information sera stockée dans la première variable,
    La seconde variable commence par "set" suivi du nom de notre variable (camelcase)
    On indique la valeur que l'on souhaite donner à notre variable dans les parenthèses de la fonction "useState"
    */

  let [etat, setEtat] = useState("valeur");
  let [compteur, setCompteur] = useState(0);
//   let [heritage, setHeritage] = useState(props.heritage);

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setEtat("J'ai été cliqué !");
  };

  const handleCompteur = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCompteur(++compteur);
  };

  return (
    <Fragment>
      <h2>Ceci est mon composant fonction :</h2>
      <h3>Démo du composant fonction :</h3>
      <p>Il a cette valeur stockée dans son état : {etat}</p>
      <button onClick={handleClick}>Click me !</button>
      <h3>Compteur du composant fonction :</h3>
      <p>Score : {compteur}</p>
      <button onClick={handleCompteur}>One Up !</button>
      <h3>Héritage via props :</h3>
      <p>J'ai hérité de : {props.heritage}</p>
    </Fragment>
  );
};

export default ComposantFonction;
