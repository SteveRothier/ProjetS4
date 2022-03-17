import React from "react";
import './style/navbar.css';

function Navbar() {
    return (
        <nav>
            <ul className="menu">
                <li><a href="/index">Accueil</a></li>
                <li><a href="/ressource">Ressources</a></li>
                <li><a href="/sae">SAE</a></li>
                <li><a href="/ue">UE</a></li>
                <li><a href="/validation">Validation</a></li>
                <li><a href="/">Deconnexion</a></li>
            </ul>
        </nav>
    );
  }
  
  export default Navbar;