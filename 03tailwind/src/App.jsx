import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  let myObj={username:"Danish", post:"Student",address:"kolhapur"}

  let newArr=[1,2,3,4,5,6,7,8,9,10]
  
  return (
    <>
     <h1 className='text-3xl bg-green-500 p-3'>Vite with Tailwind</h1>
      <Card username="Danish" post="Student" intro="Fiber compares the old tree (Count: 0) with the new one (Count: 1) — this is diffing, and only the changed part (<h1>Count: 1</h1>) is marked for update."/>
      <Card username="Irshad" myArr={newArr}/>
      <Card />
      <Card />
    </>
  )
}

export default App
