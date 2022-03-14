import React from 'react';
import PropTypes from 'prop-types';
import UeItem from './UeItem.js'



export function UeList({data}) {
    console.log(data)
    return(
        <div>
            {data.map( element => 
            <UeItem data={element}/>
            )}
        </div>   
    )
        
}

export default UeList;
