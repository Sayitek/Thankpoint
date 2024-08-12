import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SimpleInput } from '../../Components/Input'
import { TokenApi } from '../../Helper/ApiHelper'
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

export default function ResetPassword() {
  const [email, setEmail] = useState('')
  const [data, setData] = useState()
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const userCount = async () => {
    setLoading(true)
    try {
      const response = await TokenApi.get(`auth/forgot-password?username=${email}`);

      if (response?.data?.code === '00') {
        setData(response.data.data)
        navigate('/forgotpassword/otp',{ state: email })
      } else { setError(response?.data?.message) }

    } catch (error) {
      setError("Error Occur")
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    userCount()
   
  }
  const handleClose = (event, reason) => {
    setError(false);
  };

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
      <h2>  ResetPassword</h2>
      <p>Enter your email for the verification proccess,we will send 4 digits code to your email.</p>
      <form onSubmit={handleSubmit}>
        <p style={{ color: 'red', marginTop: '17px', marginBottom: '17px' }}>Email</p>
        <SimpleInput
          fullWidth
          required placeholder='Enter email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <button style={{ width: '100%', marginTop: '21px' }}>CONTINUE</button>
      </form>
    </div>
  )
}
