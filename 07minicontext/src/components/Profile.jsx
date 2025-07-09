import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
  // User is object
  const {user}=useContext(UserContext)
  if(!user) return <h1>Not logged in</h1>
  return (
    <h1>Profile:{user.username}{" "} Password :{user.password}</h1>
  )
}

export default Profile