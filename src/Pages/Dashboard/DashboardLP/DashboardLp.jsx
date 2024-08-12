import React, { useEffect, useState } from 'react'
import './DashboardLp.css'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import icon1 from '../../../Assets/Icon.png'
import icon2 from '../../../Assets/Icon1.png'
import icon3 from '../../../Assets/Icon2.png'
import AreaChart from './AreaChart';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { TokenApi } from '../../../Helper/ApiHelper';
import DashboardCustomizedTables from './DashboardTable';
import Loading from '../../../Components/Loader/Loader';


export default function DashboardLp() {
    const [count, setCount] = useState();
    const [table, setTable] = useState()
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const userCount = async () => {
            setLoading(true)
            try {
                const response = await TokenApi.get('dashboard/counts');

                if (response?.data?.code === '00') {
                    setCount(response.data.data)
                } else { setError(response?.data?.message) }

            } catch (error) {
                setError("Error Occur")
            } finally {
                setLoading(false)
            }
        }

        const userTable = async () => {
            setLoading(true)
            try {
                const response = await TokenApi.post('customers?page=0&size=10', {
                    role: " ",
                    search: " ",
                    isActive: true,
                    startDate: " ",
                    endDate: " "
                });
                if (response?.data?.code === '00') {
                    setTable(response?.data?.result)
                } else { setError(response?.data?.message) }


            } catch (error) {
                setError("Error Occur")
            } finally {
                setLoading(false)
            }
        }
        userCount();
        userTable();
    }, [])
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
            <h1>Dashboard</h1>

            <div className='dashboard_stat'>
                <div className='active_user'>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}
                    >
                        <div
                            style={{
                                display: 'flex', flexDirection: 'column',
                                justifyContent: 'space-between'
                            }}
                        >
                            <span style={{ fontSize: '13px' }}>Active User</span>
                            <p style={{ fontSize: '17px', fontWeight: '700' }}>{count?.userCount?.totalCount}</p>
                        </div>
                        <div>
                            <img src={icon1} alt='Icon1'
                                style={{ width: '55px', height: '55px' }}
                            />
                        </div>

                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <TrendingUpIcon style={{ color: 'red', fontSize: '24px', marginRight: '9px' }} />
                        <span style={{ color: 'red', fontSize: '14px', marginRight: '6px' }} >{count?.userCount?.upYesterday}% </span>
                        <span style={{ fontSize: '13px' }}> up from yesterday</span>
                    </div>

                </div>
                <div className='rebate_officer'>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}
                    >
                        <div
                            style={{
                                display: 'flex', flexDirection: 'column',
                                justifyContent: 'space-between'
                            }}
                        >
                            <span style={{ fontSize: '13px' }}>Rebate Officer</span>
                            <p style={{ fontSize: '17px', fontWeight: '700' }}>{count?.rebateCount?.totalCount}</p>
                        </div>
                        <div>
                            <img src={icon2} alt='Icon1'
                                style={{ width: '55px', height: '55px' }}
                            />
                        </div>

                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <TrendingUpIcon style={{ color: 'red', fontSize: '24px', marginRight: '9px' }} />
                        <span style={{ color: 'red', fontSize: '14px', marginRight: '6px' }} >{count?.rebateCount?.percIncrease}% </span>
                        <span style={{ fontSize: '13px' }}> up from yesterday</span>
                    </div>
                </div>
                <div className='transaction_volume'>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}
                    >
                        <div
                            style={{
                                display: 'flex', flexDirection: 'column',
                                justifyContent: 'space-between'
                            }}
                        >
                            <span style={{ fontSize: '13px' }}>Transaction Volume</span>
                            <p style={{ fontSize: '17px', fontWeight: '700' }}>{count?.transactionVolume?.totalVolume}</p>
                        </div>
                        <div>
                            <img src={icon3} alt='Icon1'
                                style={{ width: '55px', height: '55px' }}
                            />
                        </div>

                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <TrendingUpIcon style={{ color: 'red', fontSize: '24px', marginRight: '9px' }} />
                        <span style={{ color: 'red', fontSize: '14px', marginRight: '6px' }} >{count?.transactionVolume?.percIncrease}% </span>
                        <span style={{ fontSize: '13px' }}> up from yesterday</span>
                    </div>
                </div>
            </div>

            <div className='dashboard_charts'>
                <div>
                    <h2>Revenue</h2>
                    <AreaChart height={90} />
                </div>
            </div>

            <div className='dashboard_table'>
                <div>
                    <h2 style={{ marginBottom: '23px' }}>Customer</h2>
                    <DashboardCustomizedTables rows={table} />
                </div>
            </div>

        </div>
    )
}
