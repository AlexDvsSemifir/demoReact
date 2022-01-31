// Import des outils de routing
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom"
import { Fragment } from "react/cjs/react.production.min";
import Accueil from "../Pages/Accueil";
import CountPage from "../Pages/CountPage";
import UsersPage from "../Pages/UsersPage";
import UseEffectPage from '../Pages/UseEffect'
import AjoutUtilisateur from "../Exercice4/AjoutUtilisateur";
import AfficheE5Creation from "../Exercice5/Tentative/AfficheE5Creation"
import NavBar from "./NavBar";
import ContextProvider from "../Exercice7/ContextProvider";

let pages = [
    {
        to: "/Accueil",
        nom :"Accueil"
    },
    {
        to: "/UsersPage",
        nom :"UsersPage"
    },
    {
        to: "/CountPage",
        nom :"CountPage"
    },
    {
        to: "/UseEffectPage",
        nom :"UseEffectPage"
    },
    {
        to: "/Exercice4",
        nom :"Exercice 4"
    },
    {
        to: "/Exercice5",
        nom :"Exercice 5"
    },
    {
        to: "/Exercice7",
        nom :"Exercice 7"
    },
]

export const Routing = (props) => {
    return (
        <Fragment>
            <BrowserRouter>
                {/*
                Doit contenir :
                    - Les liens vers les destinations, ou à défaut le composant qui les liste.
                    - Les routes pour y accéder.
                    - Attention à l'ordre des routes : Comme un bloc "if", ils sont vérifiés dans l'ordre déclaré !
                
                Ici, les routes sont contenues dans une liste. Le tout sera passer à notre composant 'NavBar' via des props pour ne pas avoir à
                tout saisir manuellement.
                */}
                <NavBar pages={pages} />
                {/* 
                Les routes :
                    - Contenues dans une balise <Routes> 
                    - Contient des balises <Route></Route> :
                        - Chaque balise doit contenir un attribut "path" pour cibler une destination
                        - La balise "path" doit correspondre à l'attribut "href" d'un lien dans <nav></nav>
                        - l'attribut 'element={}' contient l'appel de notre composant
                */}
                <Routes>
                        {/*
                        Composant React cible 
                        Peut être n'importe quel composant, y compris une autre route.
                        */}
                    {/* <Route path="destination : Correspond à un path dans une route">  <Route/> */}
                    <Route path="/Accueil" element={<Accueil/>} />
                    <Route path="/UsersPage" element={<UsersPage/>} />
                    <Route path="CountPage" element={<CountPage/>} />
                    <Route path="UseEffectPage" element={<UseEffectPage/>} />   
                    <Route path="Exercice4" element={<AjoutUtilisateur/>} />   
                    <Route path="Exercice5" element={<AfficheE5Creation/>} />   
                    <Route path="Exercice7" element={<ContextProvider/>} />   
                    {/* 
                    Home route : 
                        - Redirection. Path est l'arrivé, et element est la destination.
                        - path="*" correspond à "toutes les autres"
                    */}
                    <Route path="/" element={<Navigate to="/Accueil" />} />
                </Routes>
            </BrowserRouter>
        </Fragment>
    )
}