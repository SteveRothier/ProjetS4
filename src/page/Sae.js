import FetchSae from "../component/FetchSae";
import Navbar from '../component/Navbar.js';

function Sae() {
    return (
      <>
      <Navbar />
      <div className="ressource">
          <FetchSae/>
      </div>
      </>
    );
  }
  
  export default Sae;