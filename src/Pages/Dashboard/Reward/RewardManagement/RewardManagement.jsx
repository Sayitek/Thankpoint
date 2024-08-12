import React from 'react'
import MangementCustomizedTables from './ManagementTable'
import './RewardManagement.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate } from 'react-router-dom';

export default function Management() {
    const navigate = useNavigate()
    
    return (
        <div className='reward_management_container'>

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

                }} />  <span>Back</span>
            </div>
            <h1>
                Reward Management
            </h1>


            <div className='reward_management_table'>
                <MangementCustomizedTables />
            </div>
        </div>
    )
}
