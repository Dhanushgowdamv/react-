import React from 'react'
import { useContext } from 'react'
import userContext from '../context/userContext'

function Pro() {
  const { user } = useContext(userContext)
  console.log("User in Pro component:", user)
  if (!user) return <div>Please login</div>

  return <div>Welcome {user.username}</div>
}

export default Pro
