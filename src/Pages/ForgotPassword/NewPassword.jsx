import React, { useState } from 'react'
import { SimpleInput } from '../../Components/Input'
import { useNavigate, useLocation } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { TokenApi } from '../../Helper/ApiHelper';


export default function NewPassword() {
   
    const [data, setData] = useState()
    const [showToken, setShowToken] = useState(false);
    const [token, setToken] = useState('');
    const [password, setPassword] = useState('');
    const [newpassword, setNewPassword] = useState('');
    const handleClickShowToken = () => setShowToken((show) => !show);
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const location = useLocation();

    const navigate = useNavigate();
   
    const userCount = async () => {
        setLoading(true)
        try {
            const response = await TokenApi.post('auth/reset-password', {
                "email": location?.state?.email,
                "newPassword": password,
                "confirmNewPassword": newpassword,
                "otp": location?.state?.otp
            });

            if (response?.data?.code === '00') {
                setData(response.data.data)
                navigate('/forgotpassword/confirmed')
            } else { setError(response?.data?.message) }

        } catch (error) {
            setError("Error Occur")
        } finally {
            setLoading(false)
        }
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleClose = (event, reason) => {
        setError(false);
    };

    const handleTokenChange = (event) => {
        setToken(event.target.value);
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newpassword !== password) {
            setError('Use A Matching Password')
            return
        }
        userCount()
    }

    return (
        <div className='reset_password_container'>
            <Snackbar open={error}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                autoHideDuration={6000} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity="error"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    {error}
                </Alert>
            </Snackbar>
            <h2>  New Password</h2>
            <p>Set the new password for your account so you can login and access all featuress.</p>
            <form onSubmit={handleSubmit}>
                <div>

                    <p style={{ color: 'red', marginTop: '17px', marginBottom: '7px' }}>Enter new password</p>
                    <SimpleInput
                        fullWidth
                        required placeholder='8 symbls at least'
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>

                <div>

                    <p style={{ color: 'red', marginTop: '27px', marginBottom: '7px' }}>Confirm password</p>
                    <SimpleInput
                        fullWidth
                        required placeholder='8 symbls at least'
                        onChange={(e)=>setNewPassword(e.target.value)}
                    />
                </div>
                <div>
                </div>
                <button style={{ width: '100%', marginTop: '21px' }}>UPDATE PASSWORD</button>
            </form>
        </div>
    )
}
