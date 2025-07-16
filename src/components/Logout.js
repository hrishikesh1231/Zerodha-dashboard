import axios from 'axios';
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
const Logout = async() => {
    // alert("are you sure you want to laogout");
    await axios.get(`${process.env.REACT_APP_BACKEND_URL}/logout`).then(()=>{
        toast.success("Logged out!");
        window.location.href = "https://zerodha-frontend-kappa-dun.vercel.app";
    });
  return (
    <div>
      
    </div>
  )
}

export default Logout
