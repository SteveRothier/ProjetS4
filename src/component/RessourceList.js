import React from 'react';
import RessourceItem from './RessourceItem';

export function RessourceList({data, type, ...props}) { 
    console.log(data); 
  return(
    
    <div className='list'>
    {data.map( (element, index)=>
        <RessourceItem key={index} data={element} type={type} index={index}/>)}
    </div>
  )
}
export default RessourceList;