import { useState } from 'react'

import './App.css'

function App() {
  const [counter, setCounter] = useState(15)//here we set the value to 15 we can also use it to set the any other data type like string, object, array etc.

  // counter is a varible while the setCounter is a function to update the counter variable
  // let counter=15
  const addValue = () => {
    // counter=counter+1;
    // console.log(counter)
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
  }

  const removeValue = () => {
    // counter=counter-1;
    // console.log(counter)
    // setCounter(counter - 1)
    setCounter(prevCounter => prevCounter - 1)
    setCounter(prevCounter => prevCounter - 1)
    setCounter(prevCounter => prevCounter - 1)

  }


  return (
    <>
      <h1>React course with hitesh</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}> Add value</button>{" "}
      <button onClick={removeValue}>Remove value</button>
      <p>footer:{counter + 1}</p>
    </>
  )
}

export default App
