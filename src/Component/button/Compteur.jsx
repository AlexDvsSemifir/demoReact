import React from "react";
import "./Compteur.css";

export class Compteur extends React.Component {
  state = {
    btn1: 0,
    btn2: 0,
  };

  clicked = (btn) => {
    this.setState({ [btn]: 1 + this.state[btn] });
  };

  render() {
    return (
      <div className="Compteur">
        <h1> Boutton </h1>
        <p>Compteur 1 : {this.state.btn1}</p>
        <input
          type="button"
          value="+1"
          onClick={() => {
            this.clicked("btn1");
          }}
        />
        <p>Compteur 2 : {this.state.btn2}</p>
        <input
          type="button"
          value="+1"
          onClick={() => {
            this.clicked("btn2");
          }}
        />
      </div>
    );
  }
}

export default Compteur;
