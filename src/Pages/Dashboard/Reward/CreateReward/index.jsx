import React from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import "./CreateRewards.css"
import { useNavigate } from 'react-router-dom';

export default function CreateReward() {

    const navigate = useNavigate()
    return (
        <div className='create_reward_container'>
            <div
                style={{
                    display: 'flex',
                    fontSize: '12px',
                    alignItems: 'center',
                    color: 'rgba(178, 178, 178, 1)',
                    marginBottom: '12px',
                    columnGap: '5px', 
                    cursor:'pointer'
                }}

                onClick={
                    () => navigate(-1) 
                }
            >
                <ArrowBackIosNewIcon style={{
                    color: 'rgba(178, 178, 178, 1)',
                    fontSize: '12px',
                }} />
                <span>Back</span>
            </div>
            <h1>
         Manage Reward
            </h1>
            <div className='create_reward_content'>
                <div className='reward_program'>
                    <div className='program_details'>
                        <h1>Program Details</h1>
                        <div>
                            <span>Description</span>
                            <p>Earn point  for every purchase and redeem rewards</p>
                        </div>
                        <div>
                            <span>Terms and Condition</span>
                            <p>1.Earn point  for every purchase and redeem rewards</p>
                            <p>2.Earn point  for every purchase and redeem rewards</p>
                            <p>3.Earn point  for every purchase and redeem rewards</p>
                        </div>
                        <div>
                            <span>Eligibility Criteria</span>
                            <p>Earn point  for every purchase and redeem rewards</p>
                        </div>
                    </div>
                    <div className='customized_option'>

                    </div>
                    <div className='offer_parameter'>

                    </div>
                </div>

                <div className='reward_tiers'>

                    <div className='reward_tiers_content'>
                        <h1>Customized Option</h1>
                        <div style={{ marginTop: '29px' }}>
                            <p className='header'> Tier 1</p>
                            <div className='title'>
                                <span>Title</span>
                                <p>Loyalty Point Program</p>
                            </div>
                            <div className='point'>
                                <span>Point Required</span>
                                <p>100</p>
                            </div>
                            <div className='type'>
                            </div>
                            <div className='method'>
                                <span>Redemption Method</span>
                                <p>Apply discount code at checkout</p>
                            </div>
                        </div>
                        {/* <div style={{ marginTop: '29px' }}>
                            <p className='header'> Tier 2</p>
                            <div className='title'>
                                <span>Title</span>
                                <p>Loyalty Point Program</p>
                            </div>
                            <div className='point'>
                                <span>Point Required</span>
                                <p>100</p>
                            </div>
                            <div className='type'>
                            </div>
                            <div className='method'>
                                <span>Redemption Method</span>
                                <p>Apply discount code at checkout</p>
                            </div>
                        </div> */}
                        {/* <div style={{ marginTop: '29px' }}>
                            <p className='header'> Tier 3</p>

                            <div className='title'>
                                <span>Title</span>
                                <p>Loyalty Point Program</p>
                            </div>
                            <div className='point'>
                                <span>Point Required</span>
                                <p>100</p>
                            </div>
                            <div className='type'>

                            </div>
                            <div className='method'>
                                <span>Redemption Method</span>
                                <p>Apply discount code at checkout</p>
                            </div>
                        </div> */}
                    </div>
                    <div className='reward_tiers_button'>
                        <button className='cancel'>Cancel</button>
                        <button className='save'
                         onClick={
                            () => navigate('../management') 
                        }
                        >Save Program</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
