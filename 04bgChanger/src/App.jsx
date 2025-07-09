import { useState } from 'react'

import './App.css'

function App() {
 const [color, setColor] = useState('olive')

  function changeColor(color) {
    setColor(color)
  }

  return (
    <div className='w-full h-screen duration-200 bg-black 'style={{ backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 '>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl ' style={{ backgroundColor: color }}>
          <button onClick={()=>changeColor('red')} className='outline-none px-4 py-1 rounded-full shadow-lg bg-red-500'>Red</button>
          <button onClick={()=>changeColor('blue')} className='outline-none px-4 py-1 rounded-full shadow-lg bg-blue-500'>Blue</button>
          <button onClick={()=>setColor('yellow')} className='outline-none px-4 py-1 rounded-full shadow-lg bg-yellow-500'>Yellow</button>
          {/* we dont need to use changeColor here setColor itself is method or function which will work */}
        </div>
      </div>
    </div>
  )
}

export default App
