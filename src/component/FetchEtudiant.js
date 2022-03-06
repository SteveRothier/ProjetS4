import React from 'react';
import EtudiantItem from './EtudiantItem';

export function FetchEtudiant({etudiant}) {
    return (
        <>
            <div className=''>
                {etudiant.map(data => <EtudiantItem key={data.idEtudiant} data={data}/>)}
            </div>
        </>
    );
}

export default FetchEtudiant;
