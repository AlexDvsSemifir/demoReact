import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import { Link } from "react-router-dom";

export const NavBar = (props) => {
  return (
    <Fragment>
      {/* 
                    - Les liens en HTML classique <a></a> rechargent la page
                    - Les balises <Link to=""> transforment la page en SPA, et évitent le rechargement 
                : */}
      <nav>
        {props.pages &&
          props.pages.map((pages, index) => {
            return (
              <Link key={index} to={pages.to}>
                {" "}
                {pages.nom}{" "}
              </Link>
            );
          })}
      </nav>
    </Fragment>
  );
};

export default NavBar;
