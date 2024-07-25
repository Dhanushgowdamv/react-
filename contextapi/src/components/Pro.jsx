import React  from 'react'
import { useContext } from 'react';
import userContext from '../context/userContext';


function Pro ()  {
    const {user} = useContext(userContext);
    if(!user) return <div>please login</div>
  
    return <div>welcome{user.username}</div>
  
}

export default Pro