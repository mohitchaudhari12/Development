import { useState } from 'react';
import './App.css'
function App(){
  const [counter,setCounter] = useState(13)

  const addValue = () => {
    if(counter < 20){
      setCounter(counter+1)
    }
  }

  const removeValue = () => {
    if(counter > 0){
      setCounter(counter-1)
    }
  }
  return(
    <>
    <h1>Counter: {counter}</h1>
    <button onClick={addValue}>ADD: {counter}</button><br/>
    <button onClick={removeValue}>REMOVE: {counter}</button>
    </>
  )
}
export default App;