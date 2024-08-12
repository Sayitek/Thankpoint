import React from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate } from 'react-router-dom';
import CallIcon from '@mui/icons-material/Call';

export default function SingleFeedBack() {

    const data = [
        {
            name: 'Customer A',
            email: 'josju@gmail.com',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            name: 'Customer A',
            email: 'josju@gmail.com',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
    ]

    const navigate = useNavigate()
    return (
        <div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '93%',
                }}
            >
                <div>
                    <div
                        style={{
                            display: 'flex',
                            fontSize: '12px',
                            alignItems: 'center',
                            color: 'rgba(178, 178, 178, 1)',
                            marginBottom: '12px',
                            columnGap: '5px',
                            cursor: 'pointer'
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
                    <div>
                        <h1>Receive Feedbacks</h1>
                    </div>
                </div>
            </div>
            <div style={{ marginTop: "31px" , background:'white', width:'65%', padding:'27px 34px'}}>
                <p>Description</p>

                <div style={{ marginTop: "31px" , fontSize:'13px'}}>
                    <p style={{ fontSize:'13px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    </p>
                </div>

                <p>Contact Details</p>

<div>
    <p>Lorem ipsum dolor sit amet,  </p>
</div>
            </div>

        </div>
    )
}
