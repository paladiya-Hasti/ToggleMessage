import React, { useState } from 'react'

const ToggalMassge = () => {
    let[toggle,settoggle]=useState(false)

    const toggalmessage=()=>{
       settoggle(!toggle)
    }
  return (
    <div>
      <p>{toggle  ?'message is visible' : 'Message is hidden'}</p>
      <button onClick={toggalmessage}>
        {toggle ? 'Hide Message' : 'Show Message'}
      </button>

    </div>

  )
}

export default ToggalMassge