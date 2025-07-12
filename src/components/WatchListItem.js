import React, { useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Tooltip from '@mui/material/Tooltip';
import Grow from '@mui/material/Grow';
import WatchListAction from './WatchListAction';


const WatchListItem = ({stock,idx}) => {
    const [showWatchlistActive,setShowWatchlistActive] = useState(false);
    
    const handleMouseEnter=()=>{
        setShowWatchlistActive(true);
    } 
    const handleMouseExit=()=>{
        setShowWatchlistActive(false);
    } 


  return (
    <div >
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>
            <div  className='item'>
                <p className={stock.isDown?"down":"up"}>{stock.name}</p>
                <div className='itemInfo'>
                    <span className='percent'>{stock.percent}</span>
                    <span>{stock.isDown? < ArrowDropDownIcon className="down"/>:<ArrowDropUpIcon className='up'/>}</span>
                    <span className='price'>{stock.price}</span>
                </div>
            </div>
            {showWatchlistActive && <WatchListAction uid={stock.name} price={stock.price}/>}
        </li>
    </div>
  )
}

export default WatchListItem;

