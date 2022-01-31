# Exercie : utilisation du contexte

1. Creer 3 composants : un composant ContextProvider qui utilise un composant ContextIntermedaire qui utilise un composant finale ContextUser qui affiche un bouton.

2. Dans le composant ContextProvider, creer une liste d'objet "themes" contenant un theme light et un theme dark.

3. Creer et exporter un context avec les themes avec le thmes light par default.

4. Dans le composant ContextProvider, encapsuler l'appel du ContextIntermediare en utilisant une balise qui fournis le theme par default:
    <ThemeContext.Provider value={themes.dark} ></ThemeContext.Provider>

5. Dans le composant ContextUser, importer et recuperer le contexte

6. Utiliser le contexte pour l'appliquer sur le bouton.
