import React from 'react';

export function RessourceItem({data, type, index, ...props}) {
  const {libRessource} = data;
  const index1=index+1;
  const semestre = "1";
  let number = null;
  if (type==="MR" || type==="MS"){
    if (index+1<10){
      number  =semestre+"0"+(index1);
    } else {
      number  = semestre+(index1);
    }
  } else {
    number  = index1;
  }

  return(
    <>
    <div className="item">
      <p>{type}{number}</p>
      <p>{libRessource}</p>
    </div>
    </>
  )       
}

export default RessourceItem;
