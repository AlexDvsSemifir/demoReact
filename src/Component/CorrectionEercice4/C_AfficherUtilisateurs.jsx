import React, { Fragment, useState } from "react";
import CAjoutUtilisateur from "./C_AjoutUtilisateur";
import CInfoUtilisateurs from "./C_InfoUtilisateurs";

export const CAfficheUtilisateurs = (props) => {
  const [listeUtilisateurs, setListeUtilisateurs] = useState([]);

  const handleAjoutUtilisateur = (utilisateur) => {
      setListeUtilisateurs([...listeUtilisateurs, utilisateur])
  }

  return (
    <Fragment>
      <h2>Correction - Composant d'affichege d'utilisateurs</h2>
      {console.log(listeUtilisateurs)}
      <div>
        {listeUtilisateurs.map((utilisateur, index) => {
          return (
            <div key={index}>
              <CInfoUtilisateurs utilisateur={utilisateur} />
            </div>
          );
        })}
      </div>
        <CAjoutUtilisateur ajoutUtilisateur={handleAjoutUtilisateur}/>

    </Fragment>
  );
};

// CAfficheUtilisateurs.propTypes={
//     listeUtilisateurs: propTypes.array
// }

export default CAfficheUtilisateurs;
