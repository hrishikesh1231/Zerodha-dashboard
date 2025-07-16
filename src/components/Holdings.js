import React, { useEffect, useState } from "react";
// import { holdings } from "../data/data";
// import { axios } from 'axios';
import axios from 'axios';
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {

  const [allHoldings,setAllHoldings] = useState([]);
  const [sum,setSum] = useState(0);

  useEffect(async()=>{
    await axios.get(`${process.env.REACT_APP_BACKEND_URL}/allHoldings`).then((res)=>{
      // console.log(res.data);
      setAllHoldings(res.data);
    });
  },[])
  useEffect(() => {
  const total = allHoldings.reduce((acc, stock) => acc + stock.price * stock.qty, 0);
  setSum(total);
  }, [allHoldings]);

  const labels = allHoldings.map((subArray)=>subArray["name"]);
  const data = {
    labels,
    datasets:[
      {
      label: 'Stock Prices',
      data: allHoldings.map((stock) =>stock.price ),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    ]
  }

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>
          </thead>
          <tbody>
          {allHoldings.map((stock,idx)=>{
            const currValue = stock.price*stock.qty;
            const isProfit = currValue-stock.avg*stock.qty>=0.0;
            const profclass = isProfit?"profit":"loss";
            const dayclass = stock.isLoss ? "loss":"profit";
            
            return(
              <tr key={idx}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg}</td>
                <td>{stock.price}</td>
                <td>{currValue.toFixed(2)}</td>
                <td className={profclass}>{(currValue-stock.avg*stock.qty).toFixed(2)}</td>
                <td className={profclass}>{stock.net}</td>
                <td className={dayclass}>{stock.day}</td>
              </tr>
            );
          })}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            {sum.toFixed(2)}{"  "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
      <VerticalGraph data={data}/>
    </>
  );
};

export default Holdings;
