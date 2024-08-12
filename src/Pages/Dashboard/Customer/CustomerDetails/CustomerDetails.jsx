import React, { useEffect, useState } from 'react'
import './CustomerDetails.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import CustomizedLogTables from './LogTable';
import CustomizedHistoryTables from './HistoryTable';
import woman from '../../../../Assets/Foto.png'
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from '@mui/base';
import { TokenApi } from '../../../../Helper/ApiHelper';
import Loading from '../../../../Components/Loader/Loader';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
export default function CustomerDetails() {
    const navigate = useNavigate()
    const [details, setDetails] = useState()
    const [activities, setActivities] = useState()
    const [logs, setLogs] = useState()
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    const { name } = useParams()
    useEffect(() => {
        const userDetails = async () => {
            setLoading(true)
            try {
                const response = await TokenApi.get(`customers/${name}/profile`);
                if (response?.data?.code === '00') {
                    setDetails(response.data.data)
                } else { setError(response?.data?.message) }



            } catch (error) {
                setError("Error Occur")
            } finally {
                setLoading(false)
            }
        }

        const userLogs = async () => {
            setLoading(true)
            try {
                const response = await TokenApi.get(`customers/${name}/credited-rebates`);
                setLogs(response?.data?.result)
            } catch (error) {
                setError("Error Occur")
            } finally {
                setLoading(false)
            }
        }
        const userActivity = async () => {
            setLoading(false)
            try {
                const response = await TokenApi.get(`customers/${name}/activity-log`);
                setActivities(response?.data?.result)
            } catch (error) {
                setError("Error Occur")
            } finally {
                setLoading(false)
            }
        }
        userDetails();
        userLogs();
        userActivity();
    }, [])


    const changeStatus = async () => {
        setLoading(true)
        try {
            const response = await TokenApi.get(`customers/${name}/change-status`);
            if (response?.data?.code === '00') {
                navigate('/dashboard')
                setError("Successful")
            } else { setError(response?.data?.message) }
            setLogs(response?.data?.result)
        } catch (error) {
            setError("Error Occur")
        } finally {
            setLoading(false)
        }
    }

    const handleClose = (event, reason) => {
        setError(false);
    };

    return (
        <div>
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
            <h1>
                Customer
            </h1>
            <div className='customer_details_container'>
                <div className='customer_image'>
                    <div className='customer_image_content'>
                        <div style={{ display: "flex", justifyContent: 'center', marginBottom: '23px' }}>
                            <img src={woman} alt="Im" />
                        </div>
                        <div>
                            <h1>{details?.firstname} {details?.lastname}</h1>
                        </div>
                        <div className='customer_image_content_email'>
                            <p>{details?.email}</p>
                        </div>
                        <div className='customer_image_content_flex'>
                            <div>
                                <p>Number</p>
                                <p>{details?.phoneNo}</p>
                            </div>
                            <div>
                                <p>Status</p>
                                {details?.isActive ?
                                    <p>Active</p> : <p>InActive</p>
                                }
                            </div>
                            <div>
                                <p>Registration</p>
                                <p>{details?.regNo}</p>
                            </div>
                            <div>
                                <p>Total Order</p>
                                <p>{details?.totalOrder}</p>
                            </div>
                            <div>
                                <p>Total Rebate</p>
                                <p>{details?.totalRebate}</p>
                            </div>
                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            rowGap: '22px',
                            alignItems: 'center',
                            marginTop: '22px'
                        }}>
                            {/* <button
                                style={{
                                    width: '60%',
                                    fontWeight: '400'

                                }}

                                onClick={() => navigate('../edit')}

                            >Edit Profile</button> */}
                            <button
                                onClick={changeStatus}
                                style={{
                                    width: 'fitContent',
                                    backgroundColor: 'transparent',
                                    color: 'red',
                                    border: '1px solid red',
                                    fontWeight: '400', padding: '9px 31px'
                                }}

                            >{details?.isActive ?
                                'Deactivate' : 'Activate'
                                } </button>
                        </div>
                    </div>
                </div>
                <div className='customer_table'>
                    <div>
                        <CustomizedLogTables rows={logs} />
                    </div>
                    <div
                        style={{ marginTop: '41px' }}
                    >
                        <CustomizedHistoryTables rows={activities} />
                    </div>
                </div>
            </div>
        </div>
    )
}
