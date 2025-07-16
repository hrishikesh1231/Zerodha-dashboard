import React from "react";
import { Route, Routes ,useLocation} from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";

import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
// import BuyActionWindow from "./BuyActionWindow";
import { GeneralContextProvider } from "./GeneralContext";
import Logout from "./Logout";

const Dashboard = () => {
  const location = useLocation();
  return (
    <div className="dashboard-container">
    
    <GeneralContextProvider>
      <WatchList />
    </GeneralContextProvider>  
      
      <div className="content">
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
      
    </div>
  );
};

export default Dashboard;
