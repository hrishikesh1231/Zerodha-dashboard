import Grow from '@mui/material/Grow'
import Tooltip from '@mui/material/Tooltip'
import React, { useContext } from 'react'
import BarChartIcon from '@mui/icons-material/BarChart';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import GeneralContext from './GeneralContext';

const WatchListAction = ({uid,price}) => {
  const generalContext = useContext(GeneralContext);
  const handleClick=()=>{
    generalContext.openBuyWindow(uid,price);
  }
  const handleSellClick=()=>{
    generalContext.openSellWindow(uid);
  }
  return (
    <div className='actions'>
      <span >
        <Tooltip title="Buy (B)" placement='top' arrow TransitionComponent={Grow}>
             <button className='buy' onClick={handleClick}>buy</button>
        </Tooltip>
        <Tooltip title="Sell (s)" placement='top' arrow TransitionComponent={Grow}>
             <button className='sell' onClick={handleSellClick}>sell</button>
        </Tooltip>
        <Tooltip title="Analytic (A)" placement='top' arrow TransitionComponent={Grow}>
             <button className='action'><BarChartIcon className='icon'/></button>
        </Tooltip>
        <Tooltip title="More" placement='top' arrow TransitionComponent={Grow}>
             <button className=''><MoreHorizIcon className='icon'/></button>
        </Tooltip>
      </span>
    </div>
  )
}

export default WatchListAction
