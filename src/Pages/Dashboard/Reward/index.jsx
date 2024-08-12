import React from 'react'
import './Reward.css'
import Create from '../../../Assets/TotalCustomers.png'
import { useNavigate } from 'react-router-dom'
export default function Rewards() {
  const navigate = useNavigate()
  return (
    <div className='reward_container'>
      <h1>Rewards Management</h1>
        <div className='reward_creation_container' 
        onClick={() => navigate('./createreward')}
        >
    <img src={Create} alt='Create'/>
    <p>Create Rebate Programs</p>
        </div>
        </div>
  )
}
