import { useEffect, useState } from 'react'
import ThemeButton from './components/ThemeButton'
import Card from './components/Card'
import { ThemeProvider } from './context/theme'

import './App.css'

function App() {
  
  const [themeMode, setThemeMode] = useState('light')

  const darkMode=()=>{
    setThemeMode('dark')//changing the state value is not enough for this 
  }

  const lightMode=()=>{
    setThemeMode('light')
  }

  // This is necessary
  useEffect(()=>{
    document.querySelector('html').classList.remove("dark","light")
    document.querySelector('html').classList.add(themeMode4)
  },[themeMode])

  return (
    <ThemeProvider value={{themeMode,darkMode,lightMode}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeButton />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
    </ThemeProvider>
      
    
  )
}

export default App
