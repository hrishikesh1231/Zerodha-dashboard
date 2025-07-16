import React from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Home = () => {
   const [auth, setAuth] = useState(null);
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

  if (auth === null) return <p>Loading...</p>;
  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;
