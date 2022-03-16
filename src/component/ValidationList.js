import React from 'react';
import ValidationItem from './ValidationItem';

export function ValidationList({data, ...props}) { 
    console.log(data); 
  return(
    <table>
      <tr>
        <td>Semestre</td>
        <td>Moyenne</td>
        <td>UE1</td>
        <td>UE2</td>
        <td>UE3</td>
        <td>UE4</td>
        <td>UE5</td>
        <td>UE6</td>
        <td>Validation</td>
      </tr>      
    {data.map( (element, index)=>
        <ValidationItem key={index} data={element}/>)}
    </table>
  )
}
export default ValidationList;