import React from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import "./CustomerEdit.css"
import { useNavigate } from 'react-router-dom';


export default function CustomerEdit() {
    const navigate = useNavigate()
    return (
        <div>
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
                Customer
            </h1>
            <div className='customer_edit_content'>
<h1>Edit Profile</h1>
            </div>
        </div>
    )
}
