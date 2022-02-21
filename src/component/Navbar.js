import React from "react";
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav>
            <ul>
            <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/ressource">
                    <li>Ressouces</li>
                </Link>
                <Link to="/sae">
                    <li>Sae</li>
                </Link>
                <Link to="/ue">
                    <li>Ue</li>
                </Link>
                <Link to="/mcc">
                    <li>Mcc</li>
                </Link>
            </ul>
        </nav>
    );
  }
  
  export default Navbar;