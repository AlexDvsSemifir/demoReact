# Exercice Recette : composant parent/enfant et map

1. Créer un composant fonction enfant : AffichageRecette

    **AffichageRecette.jsx**

    ```jsx
    import React, {Fragment} from 'react';

    export const AffichageRecette = () => {
        return (
            <Fragment>
                <h1> ceci est un composant fils : AffichageRecette </h1>
            </Fragment>
        )
    }

    export default AffichageRecette;
    ```

2. Ce composant permet d'afficher :
    -le nom,
    -la liste des ingredients,
    -la liste des etapes.

    **AffichageRecette.jsx**

    ```jsx
    import React, {Fragment} from 'react';

    export const AffichageRecette = ( {nom, ingredients, etapes} ) => {
        return (
            <Fragment>
                <h1> ceci est un composant fils : AffichageRecette  </h1>
                <h4>Recette : {nom}</h4>
                <h4>ingredients </h4>
                <ul>
                    {ingredients.map( (ingredient, index) =>
                        <li key={index}> {ingredient} </li>
                    )}
                </ul>
                <h4> etapes de preparations :</h4>
                <ul>
                    {etapes.map( (etape, index2) =>
                        <li key={index2}>{etape}</li>
                    )}
                </ul>

            </Fragment>
        )
    }

    export default AffichageRecette;
    ```

3. Créer un composant classe parent : Recette.

    **Recette.jsx**

    ```jsx
    import React, {Fragment} from 'react';
    import AffichageRecette from './AffichageRecette';

    export class Recette extends React.Component {
        render() {
            return(
                <Fragment>
                </Fragment>
            );
        }
    }

    export default Recette;
    ```

4. Ce composant parent doit afficher le composant enfant.

    **Recette.jsx**

    ```jsx
    import React, {Fragment} from 'react';
    import AffichageRecette from './AffichageRecette';

    export class Recette extends React.Component {
        render() {
            return (
                <Fragment>
                    <AffichageRecette />
                </Fragment>
            );
        }
    }

    export default Recette;
    ```

5. Le composant parent doit fournir le nom, les ingredients et les etapes au composant enfant.

    **Recette.jsx**

    ```jsx
    import React, {Fragment} from 'react';
    import AffichageRecette from './AffichageRecette';

    export class Recette extends React.Component {
        render() {
            //  ajout indirect des valeurs à transmettre au composant fils
            let etapes = ['decouper', 'emincer', 'tout rater', 'recommencer en pleurant']
            return (
                <Fragment>
                    <AffichageRecette 
                        // ajout direct des valeurs à transmettre au composant fils
                        nom="gloubipoup"
                        ingredients={['oignons', 'sucre', 'poivrons']}
                        etapes={etapes} />
                </Fragment>
            );
        }
    }

    export default Recette;
    ```
