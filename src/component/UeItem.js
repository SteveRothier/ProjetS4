import React from 'react';

export function UeItem({data,...props}) {
    const {id,libUE} = data;
    console.log(data);
    return(
        <>
        <div className='item'>
            <p>UE{id}</p>
            <p>{libUE}</p> 
        </div>       
        </>
    );
}


export default UeItem;