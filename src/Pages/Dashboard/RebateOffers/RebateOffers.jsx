import React from 'react'
import './RebateOffers.css'
import Create from '../../../Assets/TotalCustomers.png'
import Review from '../../../Assets/Review.png'
import { useNavigate } from 'react-router-dom'

export default function RebateOffers() {

  const navigate = useNavigate()
  return (
    <div className='rebate_container'>
    <h1>Rebate Offers</h1>
      <div className='rebate_creation_container'>
        {/* <div
        onClick={() => navigate('./createreward')}
        >
        <img src={Create} alt='Create'/>
  <p>Create Rebate Programs</p>
        </div> */}
<div 
onClick={() => navigate('./offer')}
>
<img src={Review} alt='Create'/>
  <p style={{marginLeft:'32px'}}>Review and Approval</p>
</div>
  
      </div>
      </div>
  )
}
