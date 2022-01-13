import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import { useState } from "react";
import Creation from "./Creation";

export const AfficheCreation = (props) => {
  let [affiche, setAffiche] = useState(true);

  const handleClick = (e) => {
    setAffiche(!affiche);
    e.stopPropagation();
  };

  return (
    <Fragment>
      {affiche && <Creation affiche={affiche} />}
      <div>
        <button type="button" onClick={handleClick}>
          Magie !
        </button>
      </div>
    </Fragment>
  );
};

export default AfficheCreation;
