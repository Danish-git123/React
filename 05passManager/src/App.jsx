import { useState,useCallback,useEffect,useRef } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(9)//default length 9
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const passwordRef=useRef(null)

  const generatePassword=useCallback(()=>{
    let pass=""
    let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    console.log("Rendering password generator")
    if(numberAllowed) {
      str=str+"0123456789"
    }else if(charAllowed){
      str=str+"!@#$%^&*()_+"
    }

    for(let i=1;i<length;i++){
      const char=Math.floor(Math.random() * str.length +1)
      pass =pass +str.charAt(char)//charAt() method returns the character at a specified index (position) in a string for eg str.charAt(0) will return 'a' if str is 'abcde'
    }

    setPassword(pass)

  },[length,numberAllowed,charAllowed,]);//so as long as the dependencies are not changed the function will not be recreated

  useEffect(()=>{
    generatePassword()
  },[length,numberAllowed,charAllowed]);

  const copyPasstoClipBoard=()=>{
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  }

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center my-3'>Password generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
         type="text"
         value={password}
         className='outline-none w-full py-1 px-3' 
         placeholder='Password'
         readOnly
         ref={passwordRef}
         />
         <button onClick={copyPasstoClipBoard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className="flex items-center gap-x-1">
          <input type="range"
          min={6}
          max={20}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>setLength(e.target.value)} 
          // e is the event object
          name=""
          id="" />
          <label htmlFor="lenth">Length</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox"
          defaultChecked={numberAllowed} //defaultChecked is parameter to set the initial state
          onChange={()=>{
            setNumberAllowed((prevTorF)=>!prevTorF) //toggle the state here we are using the previous state to toggle the current state not passing directly the variable
          }}
          name=""
          id=""      
          />
          <label htmlFor="number">Number</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox"
          defaultChecked={charAllowed} //defaultChecked is parameter to set the initial state
          onChange={()=>{
            setCharAllowed((prevTorF)=>!prevTorF) //toggle the state here we are using the previous state to toggle the current state not passing directly the variable
          }}
          name=""
          id=""      
          />
          <label htmlFor="character">Charcters</label>
        </div>
      </div>
    </div>
  )
}

export default App
