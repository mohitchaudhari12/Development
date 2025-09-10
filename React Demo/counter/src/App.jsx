import './App.css'
import {useState} from 'react';

function App() {
  
  const [counter,setCounter] = useState(8)
  //let Counter = 8;

  const addValue = () =>{
    if(counter<20){
    console.log("clicked") 
    //counter = counter+1
    setCounter(counter+1)
    }
  }

  const removeValue = () =>{
    if(counter>0){
    console.log("removed")
    setCounter(counter-1)
    }
  }

  return (
    <>
      <h1>Vite React JS</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br/>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
