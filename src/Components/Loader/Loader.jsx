import React from 'react'
import Logo from '../../Assets/Logo.png'
import "./Loader.css"

function Loading() {
  
    return (
        
        <div className="loading-modal">
        <div className="loading-indicator">
             <img src={Logo} className="rotate"  alt="Loading" width="200" height="40" />
        </div>
      </div>
  )
}

export default Loading
