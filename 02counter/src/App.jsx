import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] =useState(5)

 // let counter=5

  const addValue = () => {
    // console.log("value added",Math.random())
    if(counter<20){
   counter = counter + 1
   setCounter(counter)
    }
   //or setCounter(counter+1)
  }

  const removeValue=()=>{

    if(counter>0){
      counter = counter-1
      setCounter(counter)
    }

  }
  
  return (
    <>
      <h1>React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Decrease value:{counter}</button>

      <p>footer:{counter}</p>
    </>
  )
}

export default App
