import React from "react";
import { Fragment } from "react/cjs/react.development";
// Appel du composant enfant :
import CustomInput from "./CustomInput";

export class Controlled extends React.Component {
    // Besoin de l'état du composant. 
    // Il pourrait prendre des props.

    constructor(props) {
        super(props);
        this.state = {
            ville:"Bouraque"
        }
    }

    // Fonction pour définir le comportement lors du changement du texte dans la textbox
    handleChange = (e) => {
        this.setState({
            ville: e.target.value
            })
    }

    // Définit le comportement du boutton "submit"
    handleSubmit = (e) => {
        this.setState({
            ville: this.nomInput.value
        })
        // Elément rempli ligne 45 :
        console.log("La ville par défaut est :", this.state.ville)
        console.log("mon input: ", this.nomInput.value)
        e.stopPropagation();
        e.preventDefault();
    }

    render() {
        return(
        <Fragment>
            {/* Appelle la fonction handleSubmit dans l'attribut 'onSubmit' plutôt que de l'indiquer dans 
            le boutton. */}
            <form onSubmit={this.handleSubmit}>
                <CustomInput 
                label="Entrez une ville :"
                ville={this.state.ville}
                maRefCustom={input => this.nomInput = input}
                handleChange={this.handleChange}
                />
                <input type="submit" value="submit" />
            </form>
        </Fragment>
        )
    }
}

export default Controlled 