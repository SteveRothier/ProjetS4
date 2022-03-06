import FetchEtudiant from "../component/FetchEtudiant";
import Explorer from "../component/Explorer";

function Home() {
    return (
      <>
      <div>
          <h1>Home page</h1> 
          <FetchEtudiant etudiant={
            [
              {
                "idEtudiant": 1,
                "prenom": "Gabriel",
                "nom": "Fourier",
                "login": "four0101",
                "password": "Azerty01",
                "place": "H02",
                "civilite": "Homme ?",
                "dateDeNaissance": "16/05/2002",
                "email": "gabriel.fourier@etudiant.univ-reims.fr",
                "numTel": "06070809",
                "adresse": "21b-25 Avenue Henri Farman B28",
                "photo": "https://www.interlinecenter.com/wp-content/uploads/2016/10/dummy-user-img.png"
              }
            ]
          } /> 
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