import BoutonSemestre from "../component/BoutonSemestre";
import Calendrier from "../component/Calendrier";
import FetchEtudiant from "../component/FetchEtudiant";
import FetchNote from "../component/FetchNote";

function Home() {
    return (
      <>
        <div className="homePage">
            <Calendrier />
            <div className="information">
              <h2>  
                Informations
              </h2>
              <FetchEtudiant />
            </div>
        </div>
        <BoutonSemestre />
        <FetchNote />
      </>
    );
  }
  
  export default Home;