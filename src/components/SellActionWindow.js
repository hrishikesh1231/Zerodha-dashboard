import React, { useEffect, useState } from 'react'
import './BuyActionWindow.css'
import { Link } from 'react-router-dom';
import GeneralContext from './GeneralContext';
import axios from 'axios';
const SellActionWindow = ({uid}) => {
    

    const handleCancleClick=()=>{
        GeneralContext.handleCloseSellWindow();
    }

    useEffect(async()=>{
    await axios.post(`${process.env.REACT_APP_BACKEND_URL}/sellHolding`,{name:uid},).then((res)=>{
        // console.log(res);
        setSellQty(res.data.qty);
        setSellprice(res.data.price);
      });
    },[]);  //useeffect imp once component change 
    
    const [sellQty,setSellQty] = useState(0);
    const [sellprice,setSellprice] = useState(0);
    
    const handleSellClick=async()=>{
        await axios.post(`${process.env.REACT_APP_BACKEND_URL}/newSellOrder`,{
            name: uid,
            qty: sellQty,
            price:sellprice,
            mode:"SELL",
        },{ withCredentials: true });
        
        GeneralContext.handleCloseSellWindow();
    }
    

 
  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <h4 className="text-center">Sell-{uid}</h4>
        {/* <h4 className="text-center">{price}</h4> */}
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              value={sellQty}
              onChange={(e) => setSellQty(Number(e.target.value))}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setSellprice(Number(e.target.value))}
              value={sellprice * sellQty}
            />
          </fieldset>
        </div>
      </div>
    
      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
            { sellQty >0 &&
          <Link className="btn btn-blue" onClick={handleSellClick} >
            Sell
          </Link>
            }
          <Link to="" className="btn btn-grey" onClick={handleCancleClick}>
            Cancel
          </Link>
          
        </div>
      </div>
    
    </div>
  )
}

export default SellActionWindow;
