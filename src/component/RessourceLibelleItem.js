import React from 'react';

export function RessourceLibelleItem({data}) {
  const {libelle} = data;
  return(
    <>
    <div className="">
      <td>{libelle}</td>
    </div>
    </>
  )       
}

export default RessourceLibelleItem;
