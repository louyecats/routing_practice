import React from 'react'
import {useParams} from 'react-router-dom';
//Params is a parameter within our query from App.js

const Hello = () => {

    const {name} = useParams();
    //name must match the parameter name from App.js Route path="/hello/:name"

  return (
    <div>
        <h1>This is the Hello Page 😉</h1>
        {name === "Gray" ? <h2 style={{color: "blue"}}>Hey, you're cool!!</h2> : <h2> You're not Gray, you're not cool!</h2>}
        <h2>Hello {name}!</h2>
        {/* Now, name is dynamic, so whatever the user puts in the Route it will be grabbed from our request, then called here */}
        {/* ex: http://localhost:3000/hello/Gray */}
    </div>
  )
}

export default Hello