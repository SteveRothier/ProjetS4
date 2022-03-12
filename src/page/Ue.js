import FetchUe from "../component/FetchUe";

function Ue() {
  return (
    <div className="infoUe">
      <h1>Ue page</h1>

      <table>
        <tbody>
        <FetchUe
          ue={[
            {
              "id": 1,
              "idSemestre": 1,
              "libUE": "Réaliser un développement d'applications"
            },
            {
              "id": 2,
              "idSemestre": 1,
              "libUE": "Optimiser des applications informatiques"
            },
            {
              "id": 3,
              "idSemestre": 1,
              "libUE": "Administrer des systèmes informatiques communicants complexes"
            },
            {
              "id": 4,
              "idSemestre": 1,
              "libUE": "Gérer des données de l'information"
            },
            {
              "id": 5,
              "idSemestre": 1,
              "libUE": "Conduire un projet"
            },
            {
              "id": 6,
              "idSemestre": 1,
              "libUE": "Travailler dans une équipe informatique"
            }
          ]}
        ></FetchUe>
        </tbody>
        
      </table>
    </div>
  );
}

export default Ue;
