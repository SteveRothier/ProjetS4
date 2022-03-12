import React from 'react';

export function UeItem({data}) {

    const {
        id,
        libUE
    } = data
    return (
        <tr>
            <td>UE {id}</td>
            <td>{libUE}</td>
        </tr>
    );
}

export default UeItem;