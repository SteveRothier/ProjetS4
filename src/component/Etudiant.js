import React from 'react';
import './style/etudiant.css';

export function EtudiantItem({data}) {
    const {
        prenom,
        nom,
        login,
        password,
        place,
        dateDeNaissance,
        civilite,
        email,
        numTel,
        adresse,
        photo
    } = data
    console.log(data);
    return (
        <>
            <div className='card'>
                <img src={photo} alt="jaquette"/> 
                <h1>{prenom}</h1>
                <h1>{nom}</h1>
                <h1>place = {place}</h1>    
            </div>
            <div className='private'>
                <h1>{login}</h1>
                <h1>{password}</h1>
            </div>
            <div className='informations'>
                <h1>{dateDeNaissance}</h1>
                <h1>{civilite}</h1>
                <h1>{email}</h1>
                <h1>{numTel}</h1>
                <h1>{adresse}</h1>
            </div>
        </>
    );
}

export default EtudiantItem;