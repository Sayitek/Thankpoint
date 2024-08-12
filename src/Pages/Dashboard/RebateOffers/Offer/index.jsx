import React,{useEffect, useState} from 'react'
import './Offer.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import OfferCustomizedTables from './OfferTable';
import { useNavigate } from 'react-router-dom';
import { TokenApi } from '../../../../Helper/ApiHelper';


export default function Offer() {

    const navigate = useNavigate()
    const [table, setTable] = React.useState()
    const [error , setError] = useState(false)
    const [loading, setLoading]= useState(false)

    useEffect(() => {
 
        const userTable = async () => {
            setLoading(true)
              try {
                  const response = await TokenApi.post('rebates/filter?page=0&size=10', {
                      role: " ",
                      search: '',
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
              }finally{
                setLoading(false)
              }
          }
        userTable();
    }, [])

    return (
        <div className='offer_management_container'>
            <div
                style={{
                    display: 'flex',
                    fontSize: '12px',
                    alignItems: 'center',
                    color: 'rgba(178, 178, 178, 1)',
                    marginBottom: '12px',
                    columnGap: '5px',
                    cursor:'pointer'
                }}
                
                onClick={
                    () => navigate(-1) 
                }
            >
                <ArrowBackIosNewIcon style={{
                    color: 'rgba(178, 178, 178, 1)',
                    fontSize: '12px',

                }}
                
                />  <span>Back</span>
            </div>
            <h1>
                Rebate Offer
            </h1>
            <div className='offer_management_table'>
                <OfferCustomizedTables rows={table}/>
            </div>
        </div>
    )
}
