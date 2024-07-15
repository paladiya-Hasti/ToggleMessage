import React, { useState } from 'react'

const UserAuthentication = () => {
    let [Loggrdin,setLoggedin]=useState(false)

    const togglelogin=()=>{
       setLoggedin(!Loggrdin)
    }

  return (
    <div>
        <p>{Loggrdin ? 'welcom back, user' : 'Please log in to continue.'}</p>
        <button onClick={togglelogin}> {Loggrdin?'login':'logout'}</button>
    </div>
  )
}

export default UserAuthentication