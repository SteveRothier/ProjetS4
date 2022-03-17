import Navbar from '../component/Navbar.js';
import BoutonSemestre from "../component/BoutonSemestre";
import Calendrier from "../component/Calendrier";
import FetchEtudiant from "../component/FetchEtudiant";
import FetchNote from "../component/FetchNote";
import './style/HomePage.css';

function Home() {
    return (
      <>
        <Navbar />
        <Calendrier/>
        <div className='colonne'>
          <div className="information">
            <h2>
              Informations
            </h2>
            <FetchEtudiant />
          </div>
          <BoutonSemestre />
          </div>
        <FetchNote />
      </>
    );
  }
  
  export default Home;