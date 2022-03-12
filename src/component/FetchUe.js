import React from 'react';
import UeItem from './UeItem';

export function FetchUe({ue}) {
    return (
        <>
            {ue.map(data => <UeItem key={data.id} data={data}/>)} 
        </>
    );
}

export default FetchUe;
