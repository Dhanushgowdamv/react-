import React, { useState }  from 'react'

import userContext from './userContext'

const Usercontextrovider = ({childern}) =>{
      const [user,setuser]= useState(null)
    return (
        <userContext.Provider value={{user , setuser}}>

        </userContext.Provider>
    )

}

export default Usercontextrovider;