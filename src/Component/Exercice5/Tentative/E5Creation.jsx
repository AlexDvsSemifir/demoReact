import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import { useState } from "react";
import { useEffect } from "react";
import "./style.css";

export const E5Creation = (props) => {
  let [headCount, setHeadCount] = useState(0);
  let [bodyCount, setBodyCount] = useState(0);

  useEffect(() => {
    console.log("ES5Creation works !");
  }, []);

  useEffect(() => {
    console.log("Count modified !");
  }, [bodyCount, headCount]);

  useEffect(() => {
    return () => {
      console.log("BOOM : Dead !");
    };
  }, []);

  let handleHeadClick = (e) => {
    e.stopPropagation();
    setHeadCount(++headCount);
    document.title = "TitleCount : " + headCount + " BodyCount : " + bodyCount;
    console.log("TitleCount : " + headCount + " BodyCount : " + bodyCount)
  };

  let handleBodyClick = (e) => {
    e.stopPropagation();
    setBodyCount(++bodyCount);
    console.log("TitleCount : " + headCount + " BodyCount : " + bodyCount)
  };

  return (
    <Fragment>
      <div className="CountStyle">
        <h3>Affichage des compteurs de l'exercice 5 :</h3>
        <div>
          <button type="button" onClick={handleHeadClick}>
            +1 Head
          </button>
        </div>
        <div>
          <button type="button" onClick={handleBodyClick}>
            +1 Body
          </button>
          <p>Le compteur Body est à : {bodyCount}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default E5Creation;
