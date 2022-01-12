import React from "react";
import "./MonPremier.css"

export class MonPremier extends React.Component {
    state = {
        message: ""
    }

    clicked = (event) => {
        this.setState({message: "Coucou toi !"})
    }

    render(){
        return(
            <div id="MonPremier">
                <h2>Hello Button</h2>
                <p>{this.state.message}</p>
                <input type="button" value="Press me !" onClick={this.clicked} />
            </div>
        )}
}

export default MonPremier