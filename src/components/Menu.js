import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {

  const [selectedMenu,setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen,setIsProfileDropdownOpen] = useState(false);

  const menuclass = "menu";
  const activeMenuclass = "menu selected";

  const handleMenuClick=(index)=>{
    setSelectedMenu(index);
  }

  const handleProfileClick=()=>{
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  }


  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li >
            <Link style={{textDecoration:"none"}} to="/dashboard/"><p className={selectedMenu===0?activeMenuclass:menuclass} onClick={()=>handleMenuClick(0)}>Dashboard</p></Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/dashboard/orders"><p className={selectedMenu===1?activeMenuclass:menuclass} onClick={()=>handleMenuClick(1)}>Orders</p></Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/dashboard/holdings"><p className={selectedMenu===2?activeMenuclass:menuclass} onClick={()=>handleMenuClick(2)}>Holdings</p></Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}}to="/dashboard/positions"><p className={selectedMenu===3?activeMenuclass:menuclass} onClick={()=>handleMenuClick(3)}>Positions</p></Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/dashboard/funds"><p className={selectedMenu===4?activeMenuclass:menuclass} onClick={()=>handleMenuClick(4)}>Funds</p></Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/dashboard/apps"><p className={selectedMenu===5?activeMenuclass:menuclass} onClick={()=>handleMenuClick(5)}>Apps</p></Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <Link className="fs-2" to="/logout">
          <h3 className="username">LOGOUT</h3></Link>
        </div>
      </div>
      
    </div>
  );
};

export default Menu;
