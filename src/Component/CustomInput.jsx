import React from "react";
import { Fragment } from "react/cjs/react.production.min";

export const CustomInput = (props) => {
    return ( 
        <Fragment>
            <label> {props.label} </label>
                <input 
                    type="text"  
                    // Définit la valeur par défaut indiquée dans le constructeur
                    defaultValue={props.ville}
                    // Attribut spécfique REACT pour faire remonter des infos : 
                    ref={props.maRefCustom}
                />
        </Fragment>
    )
};

export default CustomInput;