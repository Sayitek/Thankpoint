import React, { useEffect, useState } from 'react'
import './OfferDetails.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate, useParams } from 'react-router-dom';
import { TokenApi } from '../../../../Helper/ApiHelper';

export default function OfferDetails() {
    const navigate = useNavigate()
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [details, setDetails] = useState()
    const { name } = useParams()

    useEffect(() => {
        const userDetails = async () => {
            setLoading(true)
            try {
                const response = await TokenApi.get(`rebates/${name}`);
                if (response?.data?.code === '00') {
                    setDetails(response.data.data)
                }
                setError(response?.data?.message)


            } catch (error) {
                setError("Error Occur")
            } finally {
                setLoading(false)
            }
        }
        userDetails();
    }, [])

    const userChangeState = async () => {
        setLoading(true)
        try {
            const response = await TokenApi.post(`rebates/${name}/review`,{
                
                    "isApproved": !details?.status,
                    "comment": "string"
                    
            });
            if (response?.data?.code === '00') {
                setDetails(response.data.data)
            }
            setError(response?.data?.message)


        } catch (error) {
            setError("Error Occur")
        } finally {
            setLoading(false)
        }
    }

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
                    cursor: 'pointer'
                }}

                onClick={
                    () => navigate(-1)
                }
            >
                <ArrowBackIosNewIcon style={{
                    color: 'rgba(178, 178, 178, 1)',
                    fontSize: '12px',

                }} />
                <span>Back</span>
            </div>
            <h1>
                Review Rebate Offer
            </h1>
            <div className='offer_details_content'>
                <div className='information'>
                    <div className='information_content'>
                        <h1>Offer Information</h1>
                        <div className='detail_content_flex' style={{ marginTop: '50px' }}>
                            <div
                                style={{ width: '35%' }}>
                                <h1>Merchant</h1>
                            </div>
                            <div
                                style={{ width: '65%' }}
                            >


                                <p>{details?.merchant}</p>
                            </div>

                        </div>
                        <div className='detail_content_flex1' >
                            <div
                                style={{ width: '35%' }}>
                                <h1>Title</h1>
                            </div>
                            <div
                                style={{ width: '65%' }}
                            >
                                <p>{details?.title}</p>


                            </div>

                        </div>
                        <div className='detail_content_flex1' >
                            <div
                                style={{ width: '35%' }}>
                                <h1>Description</h1>
                            </div>
                            <div
                                style={{ width: '65%' }}
                            >
                                <p>{details?.description}</p>


                            </div>

                        </div>
                        <div className='detail_content_flex1' >
                            <div
                                style={{ width: '35%' }}>
                                <h1>Submission date</h1>
                            </div>
                            <div
                                style={{ width: '65%' }}
                            >
                                <p>{details?.validFrom}</p>


                            </div>

                        </div>
                    </div>
                </div>
                <div className='details'>
                    <div className='detail_content'>
                        <h1>Offer Details</h1>
                        <div className='detail_content_flex' style={{ marginTop: '50px' }}>
                            <div
                                style={{ width: '35%' }}>
                                <h1>Terms and Condition</h1>
                            </div>
                            <div
                                style={{ width: '65%' }}
                            >
                                {details?.terms?.map((item, index) => (
                                    <p key={index}>{index + 1} . {item}</p>
                                ))}
                            </div>

                        </div>
                        <div className='detail_content_flex' >
                            <div
                                style={{ width: '35%' }}>
                                <h1>Eligibilty Criteria</h1>
                            </div>
                            <div
                                style={{ width: '65%' }}
                            >
                                {details?.criteria?.map((item, index) => (
                                    <p key={index}>{index + 1} . {item}</p>
                                ))}


                            </div>

                        </div>
                        <div className='detail_content_flex' >
                            <div
                                style={{ width: '35%' }}>
                                <h1>Validity Period</h1>
                            </div>
                            <div
                                style={{ width: '65%' }}
                            >
                                <p>Start Date: {details?.validFrom}</p>

                                <p>End Date:{details?.validTo}</p>
                            </div>

                        </div>
                        <div className='detail_content_flex' >
                            <div
                                style={{ width: '35%' }}>
                                <h1>Redemption Methods</h1>
                            </div>
                            <div
                                style={{ width: '65%' }}
                            >
                                {details?.redemptionMethods?.map((item, index) => (
                                    <p key={index}>{index + 1} . {item}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div
                        style={{
                            display: 'flex', justifyContent: 'flex-end',
                            marginTop: '21px', columnGap: '12px'
                        }}
                    >
                        {details?.status ? <button className='reject' onClick={userChangeState} >Reject</button> :
                         <button className='approve' onClick={userChangeState}>Approve</button>}
                        
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
