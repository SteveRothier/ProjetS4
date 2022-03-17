import FetchRessourceLibelle from "./FetchRessourceLibelle";
import './style/note.css'
export function NoteItem({data}) {
    const {
        libelle,
        idSemestre,
        id,
    } = data;
  
    return(
      <>
      <div className="noteItem">
          <table className='noteTable'>
              <thead>
                  <tr>
                    <th colspan="1">
                        <b>UE {idSemestre}.{id} {libelle}</b>
                    </th>
                  </tr>
              </thead>
              <tbody>
                  <tr className="ressouceLibelle">
                      <td><FetchRessourceLibelle /></td>
                  </tr>
              </tbody>
          </table>
      </div>
      </>
    )
  }
  
  export default NoteItem;