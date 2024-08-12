import React from 'react'
import './Communication.css'
import Call from '../../../Assets/Call.png'
import Help from '../../../Assets/Help.png'
import Live from '../../../Assets/Live.png'
import Feedback from '../../../Assets/Feedback.png'
import { useNavigate } from 'react-router-dom'

export default function Communication() {
  const navigate = useNavigate()
  return (
    <div className='rebate_container'>
    <h1>Communication</h1>
      <div className='rebate_creation_container'>
        <div
        onClick={() => navigate('./call')}
        >
        <img src={Call} alt='Create'/>

        </div>
<div 
onClick={() => navigate('./help')}
>
<img src={Help} alt='Create'/>
  
</div>
<div 
// onClick={() => navigate('./feedback')}
>
<img src={Feedback} alt='Create'/>
  
</div><div 
// onClick={() => navigate('./offer')}
>
<img src={Live} alt='Create'/>
  
</div>
  
      </div>
      </div>
      )
}
