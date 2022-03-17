import FetchRessource from "../component/FetchRessource";
import Navbar from '../component/Navbar.js';
import './style/Ressource.css';

function Ressource() {
    return (
      <>
      <Navbar />
      <div className="ressource">
          <FetchRessource/>
      </div>
      </>
    );
  }
  
  export default Ressource;