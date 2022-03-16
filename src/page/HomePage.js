import Calendrier from "../component/Calendrier";
import FetchEtudiant from "../component/FetchEtudiant";

function Home() {
    return (
      <>
        <Calendrier />
        <div className="homePage">
          <div className="information">
            <h2>
              Informations
            </h2>
            <FetchEtudiant />
          </div>
        </div>
      </>
    );
  }
  
  export default Home;