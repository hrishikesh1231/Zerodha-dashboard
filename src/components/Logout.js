import axios from 'axios';
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
const Logout = () => {
    // alert("are you sure you want to laogout");
    axios.get('/logout').then(()=>{
        toast.success("Logged out!");
        window.location.href = "http://localhost:3001";
    });
  return (
    <div>
      
    </div>
  )
}

export default Logout
