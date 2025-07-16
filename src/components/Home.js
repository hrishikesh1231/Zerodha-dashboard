import React from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Home = () => {
   const [auth, setAuth] = useState(null);
   const [res, setRes] = useState(null);
   const handle=()=>{
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/bhai`).then((res)=>{
      setRes(res);
    })
   }
  //  useEffect(async()=>{
  //   await axios.get(`${process.env.REACT_APP_BACKEND_URL}/bhai`);
  //  },[])
   useEffect(async() => {
    await axios.get(`${process.env.REACT_APP_BACKEND_URL}/check-auth`,{ withCredentials: true })
      .then((res) => {
        if (res.data.loggedIn) {
          setAuth(true);
        } else {
          window.location.href = "https://zerodha-frontend-kappa-dun.vercel.app"; // back to login
        }
      })
      .catch(() => {
        window.location.href = "https://zerodha-frontend-kappa-dun.vercel.app";
      });
  }, []);

  if (auth === null) return <button onClick={handle}>helo</button>;
  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;
