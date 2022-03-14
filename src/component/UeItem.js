import React from 'react';

export function UeItem({data}) {
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