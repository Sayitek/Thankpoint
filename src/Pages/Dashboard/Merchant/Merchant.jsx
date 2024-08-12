import React, { useEffect, useState } from 'react'
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

export default function Merchant() {

  const BootstrapInput = styled(Select)(({ theme }) => ({
    // 'label + &': {
    //   marginTop: theme.spacing(3),
    // },

    '& .MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root': {
      borderRadius: 0,
    },

    '& .MuiSelect-select.MuiInputBase-input.MuiOutlinedInput-input': {

      borderRadius: 0,
    },

    '& .MuiSelect-select': {
      borderRadius: 0,
      backgroundColor: theme.palette.background.paper,
      border: 0,
      fontSize: 16,
      borderTop: 0,
      // padding: '10px 26px 10px 12px',
      '&:focus': {
        border: '1px solid grey',

      },

      '&: hover': {
        border: '1px solid grey',
      }
    },

    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderWidth: '2px',
      borderRadius: 0,
      border: '1px solid grey',
    },

  }));

  const [age, setAge] = React.useState('');
  const [mail, setMail] = React.useState('');
  const [name, setName] = React.useState('');
  const [date, setDate] = React.useState('');
  const [table, setTable] = React.useState()
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [reset, setReset] = useState(false)

  const userTable = async () => {
    setLoading(true)
    try {
      const response = await TokenApi.post('merchants?page=0&size=10', {
        role: " ",
        search: name,
        isActive: true,
        startDate: " ",
        endDate: " "
      });
      if (response?.data?.code === '00') {
        setTable(response?.data?.result)
      }
      setError(response?.data?.message)

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

  const handleEmailChange = (event) => {
    setMail(event.target.value);
  };
  const handleDateReset = (event) => {
    console.log('bbh')
    // setDate(" ");
    setName(" ");
    setReset(true)
    // userTable();
  };

  return (
    <div
      className='customer_container'
    >
      {loading && <Loading />}
      <h1>Merchant</h1>

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
