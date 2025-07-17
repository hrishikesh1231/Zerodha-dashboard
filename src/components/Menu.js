import React, { useState } from "react";
import { Link,useLocation } from "react-router-dom";
// import {  } from 'react-router-dom';


const Menu = () => {

  const location = useLocation();
  const path = location.pathname;
  
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
            <a href="/" style={{textDecoration:"none"}} onClick={()=>handleMenuClick(0)}><p className={path === '/' ? activeMenuclass : menuclass} >Dashboard</p></a>
          </li>
          <li>
            <a href="/orders" style={{textDecoration:"none"}} onClick={()=>handleMenuClick(1)}><p className={path === '/orders' ? activeMenuclass : menuclass} >Orders</p></a>
          </li>
          <li>
            <a href="/holdings" style={{textDecoration:"none"}} onClick={()=>handleMenuClick(2)} ><p className={path === '/holdings' ? activeMenuclass : menuclass} >Holdings</p></a>
          </li>
          <li>
            <a style={{textDecoration:"none"}} href="/positions" onClick={()=>handleMenuClick(3)}><p className={path === '/positions' ? activeMenuclass : menuclass} onClick={()=>handleMenuClick(3)}>Positions</p></a>
          </li>
          <li>
            <a style={{textDecoration:"none"}}  href="/funds"><p className={path === '/funds' ? activeMenuclass : menuclass} onClick={()=>handleMenuClick(4)}>Funds</p></a>
          </li>
          <li>
            <a style={{textDecoration:"none"}}  href="/apps"><p className={path === '/apps' ? activeMenuclass : menuclass} onClick={()=>handleMenuClick(5)}>Apps</p></a>
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
