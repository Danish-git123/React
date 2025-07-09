import React from 'react'
import { useState ,useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {setUser}=useContext(UserContext)

    const handleSumbit=(e)=>{
      e.preventDefault()
      setUser({username,password}) //here we are setting the User with object
        // Prevent the page from refreshing
    }

  return (
    <div>
        <h2>Login</h2>
        <input 
        type="text"
        onChange={(e)=>setUsername(e.target.value)}
        placeholder='Username'
        />
        {" "}
        <input 
        type="password"
        onChange={(e)=>setPassword(e.target.value)}
        placeholder='Password'
        />
        <button onClick={handleSumbit}>Submit</button>

    </div>
  )
}

export default Login