import React from "react";
import { Fragment } from "react/cjs/react.production.min";

export class Recuperateur extends React.Component {
  // Permet de récupérer un props :
  // Est implicite par défaut
  constructor(props) {
    // Récupère le composant React
    super(props);
    // Récupère les infos du parent
    this.state={
        info:this.props.info
    }
  }
  render() {
    return(

     <Fragment>
         {/* Récupère les infos depuis le parent : 
         Est donc indépendant de l'état du composant*/}
         <p> {this.props.info} a été récupéré </p>
         {/* Appel des infos fournies par le parent stockés localement
          (est donc dépendant de l'état du composant)
          Va chercher dans le constructeur plus haut */}
         <p> {this.state.info} a été récupéré </p>
    </Fragment>
    )
  }
}

export default Recuperateur