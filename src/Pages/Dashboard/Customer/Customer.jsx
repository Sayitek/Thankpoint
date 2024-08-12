import React, { useEffect, useState } from 'react'
import './Customer.css'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';
import CustomizedTables from '../DashboardLP/Table';
import { TokenApi } from '../../../Helper/ApiHelper';
import Loading from '../../../Components/Loader/Loader';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import ReplayIcon from '@mui/icons-material/Replay';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';


export default function Customer() {

  const [name, setName] = React.useState('');
  const [date, setDate] = React.useState('');
  const [reset, setReset] = useState(false)
  const [table, setTable] = React.useState()
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const userTable = async () => {
    setLoading(true)
    try {
      const response = await TokenApi.post('customers?page=0&size=10', {
        role: " ",
        search: name,
        isActive: true,
        startDate: " ",
        endDate: " "
      });

      if (response?.data?.code === '00') {
        setTable(response?.data?.result)
      }else{  setError(response?.data?.message)}
    


    } catch (error) {
      setError("Error Occur")
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {

    userTable();
  }, [reset])

  const handleChange = (event) => {
    setName(event.target.value);
  };



  const handleDateReset = (event) => {
    // setDate(" ");
    setName(" ");
    setReset(true)
    // userTable();
  };

  const handleClose = (event, reason) => {
    setError(false);
};
  return (
    <div className='customer_container'>
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
      {loading && <Loading />}
      <h1> Customer</h1>

      <div className='customer_container_sort'>

        <div className='customer_container_search'>
          <input value={name} placeholder='Name/Email' onChange={handleChange} /><button onClick={userTable}>Search</button>
        </div>

        <div className='customer_container_sort3'
          style={{
            padding: '0px 18px',
            display: 'flex',
            justifyContent: "space-between",
            alignItems: 'center',
            cursor: "pointer"
          }}
        >
          <ReplayIcon style={{ color: 'red', fontSize: '16px' }} />
          <p
            style={{
              color: 'red'
            }}
            onClick={handleDateReset}
          >Reset Filter</p>
        </div>
      </div>

      <div className='dashboard_table'>
        <CustomizedTables rows={table} />
      </div>
    </div>
  )
}
