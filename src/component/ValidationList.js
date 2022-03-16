import React from 'react';
import ValidationItem from './ValidationItem';

export function ValidationList({data, ...props}) { 
    console.log(data); 
  return(
    
    <div className='list'>
        <div className="validation">
            <div>Semestre </div>
            <div>UE1</div>
            <div>UE2</div>
            <div>UE3</div>
            <div>UE4</div>
            <div>UE5</div>
            <div>UE6</div>
        </div> 
    {data.map( (element, index)=>
        <ValidationItem key={index} data={element}/>)}
    </div>
  )
}
export default ValidationList;