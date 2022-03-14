import React from 'react';
import EtudiantItem from './EtudiantItem';



export function EtudiantList({data}) {
    console.log(data)
    return(
        <div>
            {data.map(element => 
                <EtudiantItem data={element}/>
            )}
        </div>   
    )
        
}

export default EtudiantList;
