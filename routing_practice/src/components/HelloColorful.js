import React from 'react'
import {useParams} from 'react-router-dom';
//Params is a parameter within our query from App.js

const HelloColorful = () => {
    const {textColor, bgColor} = useParams();
    //name must match the parameter name from App.js Route path="/hello/:textColor"
    return (
        <div style={{backgroundColor:`${bgColor}`}}>
            <h1 style={{textColor: `${textColor}`}}>HELLO</h1>
        </div>
    )
}

export default HelloColorful