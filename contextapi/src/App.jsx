import './App.css'
import UserContextProvider from './context/UserContextProvider'

import Pro from './components/Pro'
import Log from './components/Log'

function App() {
  return (
    <UserContextProvider>
      <h1>hi</h1>
      <Log />
      <Pro />
    </UserContextProvider>
  )
}

export default App
