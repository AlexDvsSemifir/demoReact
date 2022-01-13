import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import { useState } from "react";
import E5Creation from "./E5Creation";
import "./style.css";

export const AfficheE5Creation = (props) => {
  let [trigger, setTrigger] = useState(true);

  let handleTrigger = (e) => {
    setTrigger(!trigger);
    e.stopPropagation();
  };

  return (
    <Fragment>
      <div className="ShowStyle">
        <h2>Composant Création (exercice 5) :</h2>
        <div>
          <button type="button" onClick={handleTrigger}>
            On/Off
          </button>
        </div>
        {!trigger && <E5Creation trigger={trigger} />}
      </div>
    </Fragment>
  );
};

export default AfficheE5Creation;
