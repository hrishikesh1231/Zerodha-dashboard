import React, { useEffect, useState } from "react";
// import { positions } from "../data/data";
import axios from "axios";

const Positions = () => {
  const [allPositions,setAllPositions] = useState([]);
  useEffect(()=>{
      axios.get("http://localhost:3002/allpositions").then((res)=>{
        setAllPositions(res.data);
      });
  },[])
  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>
          {allPositions.map((stock,idx)=>{
            const currValue = stock.price*stock.qty;
            const isProfit = currValue-stock.avg*stock.qty>=0.0;
            const profclass = isProfit?"profit":"loss";
            const dayclass = stock.isLoss ? "loss":"profit";
            return(
              <tr key={idx}>
                <td>{stock.product}</td>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td className={profclass}>{(currValue-stock.avg*stock.qty).toFixed(2)}</td>
                <td className={dayclass}>{stock.day}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Positions;
