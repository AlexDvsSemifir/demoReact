# Les hooks

## gerrer l'etat des composannts fonction

useState()

## cycle de vie des composants

creation d'un composant : evenement detectable
lancement d'une fonction en réponse à sa creation
prend en param la fonction ci dessus et une liste : celle des parametres concernés

```JSX
    useEffect( () => {}, [])
```

Modification d'un composant : evenement detectable
lancement d'une fonction en réponse à sa modification

```JSX
    useEffect( () => {}, [attribut, attribut2])
```

suppression d'un composant : evenement detectable
lancement d'une fonction en réponse à sa destruction

```JSX
    useEffect( () => { return () => {} }, [])
```
