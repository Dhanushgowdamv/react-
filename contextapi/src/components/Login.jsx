import React,{useState , useContext} from 'react'
import userContext from '../context/userContext'

function Login () {
    const [username, setusername] = useState("00")
    const [password, setpassword] = useState("00")
    const {setuser} = useContext (userContext)
const handlesubmit = (e) =>{
   e.preventDefult()
   setuser({username,password})
}


  return (
    <div>
        <h2>login</h2>
        <input type="text "
        value={username}
        onChange={(e) => setusername(e.target.value)}
        placeholder='username' />

        {"  "}
        <input type="text " 
         value={password}
         onChange={(e) => setpassword(e.target.value)}
         placeholder='passsword' />
        <button onClick={handlesubmit}>submit</button>
    </div>
  )
}

export default Login