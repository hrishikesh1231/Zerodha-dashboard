import React from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Home = () => {
   const [auth, setAuth] = useState(null);
   useEffect(() => {
    axios.get('http://localhost:3002/check-auth',{ withCredentials: true })
      .then((res) => {
        if (res.data.loggedIn) {
          setAuth(true);
        } else {
          window.location.href = "http://localhost:3000"; // back to login
        }
      })
      .catch(() => {
        window.location.href = "http://localhost:3000";
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
