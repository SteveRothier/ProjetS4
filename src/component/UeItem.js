import React from 'react';

export function UeItem({data}) {
    const {id,libUE} = data;
    console.log(data);
    return(
        <>
        <div className='box'>
        <div className='item'>
                <p>UE{id}</p>
                <p>{libUE}</p>                 
            </div>
        </div>
            
        </>
    );
}


export default UeItem;