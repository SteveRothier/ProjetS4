import React from 'react';
import RessourceLibelleItem from './RessourceLibelleItem';

export function RessourceLibelleList({data, type}) { 
  return(
    
    <div className=''>
      {data.map((element, index)=>
          <RessourceLibelleItem key={index} data={element} type={type} index={index}/>)}
    </div>
  )
}
export default RessourceLibelleList;