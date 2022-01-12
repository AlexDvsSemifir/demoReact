import React from "react";
import { Repeat } from "./Repeat";

export const ListOfThings = (props) => {

    return (
        /* Appel le composant Repeat et lui passe 
        "10" en props.nbFois
        une fonction en props.children */
        <Repeat nbFois={10}>
            {(index) => <div key={index}>This is item {index} in the list</div> }
        </Repeat>
    )
}

export default ListOfThings