import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import AfficheCreation from "../AfficheCreation";
import AfficheE5Creation from "../AfficheCreation";

export const CountPage = (props) => {
  return (
    <Fragment>
      <h1>Page accueil</h1>
        <AfficheCreation></AfficheCreation>
        <AfficheE5Creation></AfficheE5Creation>
    </Fragment>
  );
};

export default CountPage;
