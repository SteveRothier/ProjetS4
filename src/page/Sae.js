import FetchSae from "../component/FetchSae";
import Navbar from '../component/Navbar.js';
import './style/Sae.css';


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