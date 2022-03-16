import FetchRessource from "../component/FetchRessource";
import Navbar from '../component/Navbar.js';

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