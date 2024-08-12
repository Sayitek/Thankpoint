import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useNavigate } from 'react-router-dom';


export default function CofirmedPassword() {

  const navigate = useNavigate()

  const returnHome = () =>{
navigate('/')
  }
  return (
    <div className='otp_password_container'>
<div style={{textAlign:'center'}}>
<CheckCircleIcon  style={{color:'red',fontSize:'101px'}}/>
</div>
    <p style={{textAlign:'center', marginTop:'24px'}}>Your password has been reset successfully</p>
  
   
    <button style={{width:'100%', marginTop:'24px'}}
    onClick={returnHome}
    
    >CONTINUE</button>
  
   </div>
  )
}
