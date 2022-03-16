import React from 'react';
import NoteItem from './NoteItem';

export function NoteList({data, type}) { 
    console.log(data); 
  return(

    <div className='list'>
    {data.map( (element, index)=>
        <NoteItem key={index} data={element} type={type} index={index}/>)}
    </div>
  )
}
export default NoteList;