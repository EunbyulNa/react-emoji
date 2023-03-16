import React, { useState } from "react";

function App(){

  const [counter, setCounter] = useState(0);

  function increase(){
   setCounter(counter+1);
  }

  function decrease(){
    setCounter(counter-1);
  }

  return (
  <div className="container">
    <h1>{counter}</h1>
    <button onClick={increase}>+</button>
    <button onClick={decrease}>-</button>
  </div>
  )
}

export default App