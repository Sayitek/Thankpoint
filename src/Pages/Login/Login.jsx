import React, { useState } from 'react'
import './Login.css'
import LoginImage from '../../Assets/LoginImage.png'
import { SimpleInput } from '../../Components/Input'
import Logo from '../../Assets/Logo.png'
import { useNavigate } from 'react-router-dom'
import { NoTokenApi } from '../../Helper/ApiHelper'
import { setAuthentication } from '../../Helper/VariableHelper'
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';



export default function Login() {

    const navigate = useNavigate()
    const [username, setUsername] = useState()
    const [userpassword, setUserPassword] = useState()
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const handleUsername = (event) => {
        setUsername(event.target.value)
    }
    const handleClose = (event, reason) => {
        setError(false);
    };
    const handleUserPassword = (event) => {
        setUserPassword(event.target.value)
    }

    const userLogin = async () => {
        setLoading(true)
        try {
            const response = await NoTokenApi.post('auth/login', {
                "username": username,
                "password": userpassword
            });
            if (response?.data?.code === '00') {
                setAuthentication('user', response?.data?.data)
              
                navigate('/dashboard')
            }
            setError(response?.data?.message)

        } catch (error) {
            setError('Error Occur')
        } finally {
            setLoading(false)
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        userLogin()
    }
    return (
        <div className='loginContainer'>
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
            <div className='loginImage'>
                <img src={LoginImage} alt='LoginImage' />
            </div>
            <div className='loginForm'>
                <form onSubmit={handleSubmit}>
                    <div className='loginFormContent'>
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
                            <p>Username</p>
                            <SimpleInput
                                onChange={handleUsername}
                                fullWidth
                                required placeholder='admin@thankspoint.com' />
                        </div>
                        <div>
                            <p>Password</p>
                            <SimpleInput
                                onChange={handleUserPassword}
                                fullWidth
                                required placeholder='Password123@' />
                        </div>
                        <button disabled={loading}>
                            {loading ? 'Processing...' : 'Login'}
                        </button>
                        <div style={{ textAlign: 'center', color: 'red' }}>
                            <span style={{ cursor: 'pointer', fontSize: '13px' }}
                                onClick={() => navigate('/forgotpassword')}
                            >Forgot Password</span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
