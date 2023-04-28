import React from 'react'
import {useParams} from "react-router-dom";

const Number = () => {
    const {num} = useParams();
    //num must match the parameter nae from App.js Route path="/:num"

  return (
    <div>
        <h1>Do you want {num} pizzas?</h1>
    </div>

  )
}

export default Number