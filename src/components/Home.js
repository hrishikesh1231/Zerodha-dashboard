import React from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Home = () => {
   const [auth, setAuth] = useState(null);
   const [res, setRes] = useState(null);
  //  const handle=()=>{
  //   axios.get(`${process.env.REACT_APP_BACKEND_URL}/bhai`).then((res)=>{
  //     setRes(res);
  //   })
  //  }
  //  useEffect(async()=>{
  //   await axios.get(`${process.env.REACT_APP_BACKEND_URL}/bhai`);
  //  },[])
  //  useEffect(async() => {
  //   await axios.get(`${process.env.REACT_APP_BACKEND_URL}/check-auth`,{ withCredentials: true })
  //     .then((res) => {
  //       if (res.data.loggedIn) {
  //         setAuth(true);
  //       } else {
  //         window.location.href = "https://zerodha-frontend-kappa-dun.vercel.app"; // back to login
  //       }
  //     })
  //     .catch(() => {
  //       window.location.href = "https://zerodha-frontend-kappa-dun.vercel.app";
  //     });
  // }, []);
  useEffect(() => {
  const checkAuth = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/check-auth`, {
        withCredentials: true,
      });
      console.log("/check-auth response:", res.data); // ✅ check backend response
      if (res.data.loggedIn) {
        setAuth(true);
      } else {
        window.location.href = "https://zerodha-frontend-kappa-dun.vercel.app";
      }
    } catch (err) {
      console.error("Auth check failed:", err);
      window.location.href = "https://zerodha-frontend-kappa-dun.vercel.app";
    }
  };

  checkAuth(); // call the async function
}, []);


  // if (auth === null) return <p>Loading....</p>;
  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;
