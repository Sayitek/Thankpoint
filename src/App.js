import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Pages/Login/Login';
import ForgotPassword from './Pages/ForgotPassword/Index';
import ResetPassword from './Pages/ForgotPassword/ResetPassword';
import NewPassword from './Pages/ForgotPassword/NewPassword';
import Otp from './Pages/ForgotPassword/Otp';
import CofirmedPassword from './Pages/ForgotPassword/CofirmedPassword';
import DashboardLayout from './Pages/Dashboard';
import Communication from './Pages/Dashboard/Communication/Index';
import DashboardLp from './Pages/Dashboard/DashboardLP/DashboardLp';
import Customer from './Pages/Dashboard/Customer/Customer';
import Merchant from './Pages/Dashboard/Merchant/Merchant';
import RebateOffers from './Pages/Dashboard/RebateOffers/RebateOffers';
import Rewards from './Pages/Dashboard/Reward';
import Management from './Pages/Dashboard/Reward/RewardManagement/RewardManagement';
import CreateReward from './Pages/Dashboard/Reward/CreateReward';
import Offer from './Pages/Dashboard/RebateOffers/Offer';
import OfferDetails from './Pages/Dashboard/RebateOffers/OfferDetails/OfferDetails';
import CustomerDetails from './Pages/Dashboard/Customer/CustomerDetails/CustomerDetails';
import CustomerEdit from './Pages/Dashboard/Customer/CustomerEdit/CustomerEdit';
import Call from './Pages/Dashboard/Communication/Call/Call';
import Help from './Pages/Dashboard/Communication/Help/Help';
import Feedback from './Pages/Dashboard/Communication/Feedback/Feedback';
import SingleFeedBack from './Pages/Dashboard/Communication/Feedback/SingleFeedBack';
import Settings from './Pages/Dashboard/Settings/Settings';
//import RewardManagement from './Pages/Dashboard/Reward/RewardManagement/RewardManagement';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="*" element={<NotFound />} /> */}
          <Route path="/forgotpassword" element={<ForgotPassword />} >
            <Route index element={<ResetPassword />} />
            <Route path="otp" element={<Otp />} />
            <Route path="confirmed" element={<CofirmedPassword />} />
            <Route path='newpassword' element={<NewPassword />} />

          </Route>

          <Route path="dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardLp />} />
            
            <Route path="customer"  >
            <Route index element={<Customer />} />
            <Route path='detail/:name' element={<CustomerDetails/>}/>
            <Route path='edit' element={<CustomerEdit/>}/>

            </Route>

            <Route path="merchant"  >
            <Route index element={<Merchant />} />
            <Route path='detail/:name' element={<CustomerDetails/>}/>
            <Route path='edit' element={<CustomerEdit/>}/>
              </Route>

            <Route path="rebate" >
              <Route index element={<RebateOffers />} />
              <Route path='offer' element={<Offer/>}/>
              {/* <Route path="createreward" element={<CreateReward />} /> */}
              <Route path="management" element={<Management />} />
              <Route path='detail/:name' element={<OfferDetails/>}/>

            </Route>

            <Route path="rewards"  >
              <Route index element={<Rewards />} />
              <Route path="createreward" element={<CreateReward />} />
              <Route path="management" element={<Management />} />
            </Route>


            <Route path="communications" >
              <Route index element={<Communication />} />
              <Route path="call" element={<Call />} />
              <Route path="help" element={<Help />} />
              <Route path="feedback" element={<SingleFeedBack/>} />
            </Route>
            


            <Route path="settings" element={<Settings/>} />


          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
