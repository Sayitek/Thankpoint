import React from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate } from 'react-router-dom';
import CallIcon from '@mui/icons-material/Call';


export default function Help() {

    const data = [
        {
        name:'Account Management',
        date:'23rd May, 2024 ',
        time:'10:05 am',
        tittle:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        name:'Rebate',
        date:'23rd May, 2024 ',
        time:'10:05 am',
        tittle:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    }
]
    const navigate = useNavigate()
  return (
    <div>
    <div
        style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '93%',
        }}
    >
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

                }} />  <span>Back</span>
            </div>
            <div>
                <h1>Help & Support</h1>
            </div>
        </div>
        <div className='calls'>
            <CallIcon />
            <p>0800000000</p>
        </div>
       
    </div>
    <div className='call_content_container'>
            <p style={{ color: 'red' }}>FAQs</p>
            {data.map((item,index) => (<div key={index} 
           
           className='call_content'
            >
                <p>{item.name}</p>
                <div 
                
                style={{border:'1px solid rgba(224, 224, 224, 1)',
                 borderRadius:'8px',marginTop:'22px',padding:"7px 23px",
                 paddingBottom:"23px"
                 }}
                 
                 >
                    <span style={{fontSize:'10px'}} >Question</span>
                    <p 
                    style={{
                  marginTop:'12px',
                  fontSize:'15px',
                  width:'80%',
                  lineHeight:"17px",
                }}
                    
                    >{item.tittle}</p>
                </div>
                <div  
                 style={{border:'1px solid rgba(224, 224, 224, 1)',
                 borderRadius:'8px',marginTop:'22px',padding:"7px 23px",
                 paddingBottom:"23px"
                 }}
                
                >
                    <span  style={{fontSize:'10px'}} >Answer</span>
                    <p style={{
                  marginTop:'12px',
                  fontSize:'12px',
                  lineHeight:"17px",
                  width:'80%'
                }}>{item.comment}</p>
                </div>

                <div style={{display:'flex', justifyContent:'flex-end',marginTop:"16px"}}>
                    <button style={{padding:"14px 45px"}}>Save</button>
                </div>
            </div>))}
        </div>
</div>
  )
}
