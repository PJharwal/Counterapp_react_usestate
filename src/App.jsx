import React, { useState } from 'react'
import './App.css'

function App() {

  const[count, setCount] = useState(0);


return(

  <div style={{alignContent: 'center', margin: "500px"}}>
    <h1>{count} </h1>
    <button onClick={() => setCount(count + 1)}> Increment  </button>
    <button onClick={() => setCount(count - 1)}> Decrement</button>
    <button onClick={() => setCount(0)}>Reset Button</button>
  </div>
);




};

export default App
