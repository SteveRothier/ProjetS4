import React from 'react';

export function UeItem({data,...props}) {
    const {id,libUE} = data;
    console.log(data);
    return(
        <>
        <p>UE{id}</p>
        <p>{libUE}</p>        
        </>
    );
}


export default UeItem;