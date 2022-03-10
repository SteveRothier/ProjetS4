import React from "react";

function Navbar() {
    return (
        <nav>
            <ul className="menu">
                <li><a href="/">Home</a></li>
                <li><a href="/ressource">Ressources</a></li>
                <li><a href="/sae">SAE</a></li>
                <li><a href="/ue">UE</a></li>
                <li><a href="/mcc">MCC</a></li>
            </ul>
        </nav>
    );
  }
  
  export default Navbar;