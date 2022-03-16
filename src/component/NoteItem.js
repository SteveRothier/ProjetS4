export function NoteItem({data}) {
    const {
        libelle,
        idSemestre,
        id,
        ressource
      } = data;
  
    return(
      <>
      <div className="noteItem">
          <table className='noteTable'>
              <thead>
                  <tr colspan="1">
                      <b>
                          UE {idSemestre}.{id} {libelle} 
                      </b>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      test {ressource}
                  </tr>
              </tbody>
          </table>
      </div>
      </>
    )
  }
  
  export default NoteItem;