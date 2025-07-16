// import { width } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Order.css"

const Orders = () => {
  const [orders,setOrders] = useState([]);
  const [name,setName] = useState();
  useEffect(async()=>{
    await axios.get(`${process.env.REACT_APP_BACKEND_URL}/allOrders`,{ withCredentials: true }).then((res)=>{
      setOrders(res.data.allOrders);
      // console.log(res); 
      setName(res.data.name);
    })
  },[])
  return (
    <div >
      <div>
        <p>You orders {orders.length}:-</p>
      
          {orders.map((item,idx)=>{
            return(
              <div className="Cards ">
                <div className="Card">
                  <h3 class="card-title">{item.name}</h3>
                  <span  class="card-text">Qty :- {item.qty}</span>
                  <span class="card-text">Price :- {item.price}</span>
                  <span class="card-text">Mode :- {item.mode}</span>
                  <span  class="card-text name text-muted">@{name}</span>
                </div>
              </div>
            )
          })}
        
      </div>
      <div className="no-orders">
        <p>You haven't placed any orders today</p>

        <Link to="/" className="btn">
          Get started
        </Link>
      </div>
    </div>
  );
};

export default Orders;
