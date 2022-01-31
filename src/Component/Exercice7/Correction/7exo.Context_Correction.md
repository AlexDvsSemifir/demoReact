# Exercie : utilisation du contexte

1. Creer 3 composants : un composant ContextProvider qui utilise un composant ContextIntermedaire qui utilise un composant finale ContextUser qui affiche un bouton.

    **ContextProvider.jsx**

    ```jsx
    import React, { Fragment} from "react";
    import ContextIntermediaire from "./ContextIntermediaire";

    export const ContextProvider = () => {
        return (
            <Fragment>
                    <ContextIntermediaire />
            </Fragment>
        )
    }
    export default ContextProvider;
    ```

    **ContextIntermediaire.jsx**

    ```jsx
    import React, { Fragment} from "react";
    import ContextUser from "./ContextUser";

    export const ContextIntermediaire = () => {
        return (
            <Fragment>
                    <ContextUser />
            </Fragment>
        )
    }
    export default ContextIntermediaire;
    ```

    **ContextUser.jsx**

    ```jsx
    import React, { Fragment} from "react";

    export const ContextUser = () => {
        return (
            <Fragment>
                    <button></button>
            </Fragment>
        )
    }
    export default ContextUser;
    ```

2. Dans le composant ContextProvider, creer une liste d'objet "themes" contenant un theme light et un theme dark.
    **ContextProvider.jsx**

    ```jsx
    const themes = {
        light: {
        foreground: "#000000",
        background: "#eeeeee"
        },
        dark: {
        foreground: "#ffffff",
        background: "#222222"
        }
    };
    ```

3. Creer et exporter un context avec les themes avec le theme light par default.
    **ContextProvider.jsx**

    ```jsx
    // on charge le contexte par default en theme light
    export const ThemeContext = React.createContext(themes.light);
    ```

4. Dans le composant ContextProvider, encapsuler l'appel du ContextIntermediare en utilisant une balise qui fournis le theme par default:
    <ThemeContext.Provider value={themes.dark} ></ThemeContext.Provider>

    **ContextProvider.jsx**

    ````jsx
    export const ContextProvider = () => {
        return (
            <Fragment>
                <ThemeContext.Provider value={themes.dark}>
                    <ContextIntermediaire />
                </ThemeContext.Provider>
            </Fragment>
        )
    }
    ```

5. Dans le composant ContextUser, importer et recuperer le contexte
    **ContextUser.jsx**

    ```jsx
    import { Fragment, useContext  } from "react";
    import { ThemeContext } from "./ContextProvider";

    export const ContextUser = () => {
        const theme = useContext(ThemeContext)
        return (
            <Fragment>
                <button></button>
            </Fragment>
        )
    }
    export default ContextUser;
    ```

6. Utiliser le contexte pour l'appliquer sur le bouton.
    **ContextUser.jsx**

    ```jsx
    import { Fragment, useContext  } from "react";
    import { ThemeContext } from "./ContextProvider";

    export const ContextUser = () => {
        const theme = useContext(ThemeContext)
        return (
            <Fragment>
                <button style={ {background : theme.background, color : theme.foreground}}>
                    Je suis un bouton stylé par le context
                </button>
            
            </Fragment>
        )
    }
    export default ContextUser;
    ```
