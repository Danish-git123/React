import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const {userid}=useParams()//useParams is also a hook
  return (
    // To see how dynamic routing works in react router dom we can use the user component
    <div className='bg-orange-500 text-black text-3xl text-center'>User:{userid}</div>
  )
}

export default User