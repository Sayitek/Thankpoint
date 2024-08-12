import React from 'react'
import './ForgotPassword.css'
import Logo from '../../Assets/Logo.png'
import { Outlet} from "react-router-dom";
export default function ForgotPassword() {
    return (
        <div
            className='forgotPassword_container'
        >
            <div className='forgotPassword_content'>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: '100%',
                    marginBottom: '24px'
                }}>
                    <img src={Logo} alt='LogoImage'
                        style={{
                            width: '40%'
                        }}
                    />
                </div>
                <div>
                < Outlet/>
                </div>
            </div>


        </div>
    )
}
