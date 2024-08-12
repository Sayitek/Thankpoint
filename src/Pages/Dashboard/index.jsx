import React, { useEffect , useState} from 'react';
import './Dashboard.css';
import { Outlet, useLocation, useNavigate, NavLink } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import PeopleIcon from '@mui/icons-material/People';
import ChatIcon from '@mui/icons-material/Chat';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import Logo from '../../Assets/Logo.png'
import Avatar from '../../Assets/Avatar.png'
import { getAuthentication } from '../../Helper/VariableHelper';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';

export default function DashboardLayout() {
    const navigate = useNavigate()
    const location = useLocation();
    const [userDetails, setUserDetails] = useState(getAuthentication())

    useEffect(() => {
        if (location.pathname === '/dashboard' || location.pathname === '/dashboard/') {
            navigate('/dashboard/')
        }
    }, [])

    return (
        <div className='dashboard_container'>
            <div className='dashboard_sidebar'>
                <div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItem: 'center', width: '100%'
                    }}>
                        <img src={Logo} alt='Logo'
                        style={{
                             width: '40%'
                        }}
                        
                        />
                    </div>

                    <div className='link'>
                    <NavLink
                        to=" "
                        className={({ isActive }) =>
                            isActive
                                ? "isActive"
                                : "isNotActive"
                        }
                    >
                        <DashboardIcon />  Dashboard
                    </NavLink>

                    <NavLink
                        to="customer"
                        className={({ isActive }) =>
                            isActive
                                ? "isActive"
                                : "isNotActive"
                        }
                    >
                        <PersonIcon />    Customer
                    </NavLink>
                    <NavLink
                        to="merchant"
                        className={({ isActive }) =>
                            isActive
                                ? "isActive"
                                : "isNotActive"
                        }
                    >
                        <PeopleIcon />   Merchant
                    </NavLink>
                    <NavLink
                        to="rebate"
                        className={({ isActive }) =>
                            isActive
                                ? "isActive"
                                : "isNotActive"
                        }
                    >
                        <DashboardIcon />    Rebate Offers
                    </NavLink>
                    <NavLink
                        to="rewards"
                        className={({ isActive }) =>
                            isActive
                                ? "isActive"
                                : "isNotActive"
                        }
                    >
                        <WorkspacePremiumIcon />    Rewards
                    </NavLink>
                    <NavLink
                        to="communications"
                        className={({ isActive }) =>
                            isActive
                                ? "isActive"
                                : "isNotActive"
                        }
                    >
                        <ChatIcon />     Communications
                    </NavLink>
                    </div>
                

                </div>
                <div>

                <NavLink
               to="settings"
                        className={({ isActive }) =>
                            isActive
                                ? "isActive"
                                : "isNotActive"
                        }
                    >
                        <MiscellaneousServicesIcon />    Settings
                    </NavLink>
                </div>
            </div>
            <div className='dashboard_outlet'>
                <div className='dashboard_outlet_navbar' style={{
                    justifyContent:'flex-end'
                }}>
                    
                    <div 
                    style={{
                       display:'flex',
                            paddingRight:'4%',
                            columnGap:'12px'
                    }}
                    >
                        <img src={Avatar} alt="Avatar"
                         style={{
                            width:'40px',
                            height:'40px'
                        }}
                        />
                        <div>
                            <p 
                            style={{
                                fontSize:'15px',
                              fontWeight:'800'
                                   }}
                            >{userDetails?.name}</p>
                            <p style={{
                     fontSize:'10px',
                     marginTop:'6px'
                        }}>{userDetails?.userType}</p>
                        </div>
                       
                    </div>

                </div>
                <div className='dashboard_outlet_content'>
                    <Outlet />
                </div>
            </div>
        </div>
    )


}
