import { useState } from 'react'

import './App.css'
import Usercontextrovider from './context/Usercontextrovider'
import Login from './components/Login'
import Pro from './components/Pro'



function App() {
  
  return (
    <Usercontextrovider>
      <h1>hi fhdoihgfoihb</h1>
    <Login/>
   <Pro/>

    </Usercontextrovider>
  )
}

export default App
