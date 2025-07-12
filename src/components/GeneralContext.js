import React, { useState } from "react";

import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";


const GeneralContext = React.createContext({
  openBuyWindow: (uid,price) => {}, //both are func
  closeBuyWindow: () => {},
  openSellWindow: (uid,price) => {}, //both are func
  closeSellWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [selectedStockPrice, setSelectedStockPrice] = useState("");
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);

  const handleOpenBuyWindow = (uid,price) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
    setSelectedStockPrice(price);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
    setSelectedStockPrice("");
  };
  const handleOpenSellWindow = (uid,price) => {
    setIsSellWindowOpen(true);
    setSelectedStockUID(uid);
    // setSelectedStockPrice(price);
  };

  const handleCloseSellWindow = () => {
    setIsSellWindowOpen(false);
    setSelectedStockUID("");
    // setSelectedStockPrice("");
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow, //openBywindow is a func
        closeBuyWindow: handleCloseBuyWindow,
        openSellWindow: handleOpenSellWindow, //openBywindow is a func
        closeSellWindow: handleCloseSellWindow,
      }}
    >
      {props.children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} price={selectedStockPrice} />}
      {isSellWindowOpen && <SellActionWindow uid={selectedStockUID} />}
      {/* {<SellActionWindow} */}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;