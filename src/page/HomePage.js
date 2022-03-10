import FetchEtudiant from "../component/FetchEtudiant";
import Explorer from "../component/Explorer";

function Home() {
    return (
      <>
        <div className="infoCalend">
          <div className="calendrier">
            <h2>
              Calendrier
            </h2>
            
          </div>
          <div className="profilEtud">
            <h2>
              Informations
            </h2>
            <FetchEtudiant etudiant={
              [
                {
                  "idEtudiant": 1,
                  "prenom": "Gabriel",
                  "nom": "Fourier",
                  "login": "four0101",
                  "place": "H02",
                  "photo": "https://www.interlinecenter.com/wp-content/uploads/2016/10/dummy-user-img.png"
                }
              ]
            } /> 
        </div>
      </div>
      {
        /*
        <Explorer />
        */
      }
      </>
    );
  }
  
  export default Home;