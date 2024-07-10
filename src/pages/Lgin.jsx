import React, { useState } from "react";
import "./lgin.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

export default function Lgin() {

const navigate=useNavigate()

  const [inputchange, setinputchange] = useState({});
  const handleChange = (event) => {
    // console.log(event.target.value);
    // const name = event.target.name;
    // const value = event.target.value;
    setinputchange({ ...inputchange, [event.target.name]: event.target.value });
  };
console.log(inputchange);

const handleclick=(event)=>{
  event.preventDefault()
  axios.post("https://vadakara-mca-craft-backend.onrender.com/api/login",inputchange).then((response)=>{
    console.log(response.data)
    localStorage.setItem("loginId",response.data.loginId)
    navigate('/home')
   
}).catch((error)=>{
  console.log(error);
  toast.error(error.response.data.Message)
  console.log(error.response.data.Message);

})
}



  return (
    <div className="login">
      <Toaster
  position="bottom-center"
  reverseOrder={false}
/>
      <form action="">
        <h1>LOGIN</h1>
        <br />
        <br />
        <label htmlFor="">EMAIL</label>
        <input
          type="email"
          placeholder="enter your email"
          defaultValue=""
          name="email"
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="">PASSWORD:</label>
        <input
          type="password"
          defaultValue=""
          name="password"
          onChange={handleChange}
        />
        <br />
        <br />
        <button onClick={handleclick}>
          {/* <Link className="loghome" to={"/home"}> */}
            LOGIN NOW
          {/* </Link> */}
        </button>
        <br />
        <br />
        <h5>Don"t have an account?</h5>
        <button>
          <Link className="logreg" to={"/registration"}>
            SIGN IN
          </Link>
        </button>
        <br />
        <br />
      </form>
    </div>
  );
}
