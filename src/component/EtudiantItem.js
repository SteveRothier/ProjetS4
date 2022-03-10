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
            <div className='profil'>
                <div className='card'>
                    <img src={photo} alt="jaquette"/> 
                    <h1>{prenom} {nom}</h1>
                    <h1>{place}</h1>    
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
            </div>
        </>
    );
}

export default EtudiantItem;