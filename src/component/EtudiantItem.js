import React from 'react';
import './style/etudiant.css';

export function EtudiantItem({data}) {
    const {
        id,
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
                    <h1>idPers: {id}</h1>
                    <h1>{prenom} {nom}</h1>    
                    <h1>Login : {login}</h1>
                    <h1>Mot de passe : {password}</h1>
                    <h1>place : {place}</h1>
                    <h1>Né le : {dateDeNaissance}</h1>
                    <h1>{civilite}</h1>
                    <h1>Mail : {email}</h1>
                    <h1>Téléphone : {numTel}</h1>
                    <h1>Adresse : {adresse}</h1>
                </div>
            </div>
        </>
    );
}

export default EtudiantItem;