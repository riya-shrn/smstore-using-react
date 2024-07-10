import React, { useState } from "react";
import "./registration.css";
import { Link } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';


export default function Registration() {
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
  axios.post("https://vadakara-mca-craft-backend.onrender.com/api/register/user",inputchange).then((response)=>{
    toast.success(response.data.Message)
    console.log(response.data.Message)
   
}).catch((error)=>{
  console.log(error);
  toast.error(error.response.data.Message)
  console.log(error.response.data.Message);


})
}

  return (
    <div className="registration">
      <Toaster
  position="bottom-center"
  reverseOrder={false}
/>
<Toaster
  position="bottom-center"
  reverseOrder={false}
/>
      <form action="">
        <h1>SM STORE</h1>
        <h2 className="heading">Registration form</h2>
        <br />
        <br />
        <label htmlFor="name">NAME:</label>
        <input type="text" defaultValue="" placeholder="enter your name" 
        name="name"
        onChange={handleChange}
         />
        {/* <br />
        <br /> */}
        {/* <label htmlFor="name">LAST NAME:</label>
        <input type="text" defaultValue=""
        placeholder="enter your last name"
        name="lastname"
        onChange={handleChange}
         /> */}
        <br />
        <br />
        <label htmlFor="mobile">Mobile Number</label>
        <br />
        <br />
        <input type="text" defaultValue="" 
        placeholder="enter your mobile number"
        name="mobile"
        onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="">PASSWORD:</label>
        <br />
        <br />
        <input type="password" defaultValue="" 
        name="password"
        onChange={handleChange} />
        <br />
        <br />
        <label htmlFor="address">ADDRESS:</label>
        <br />
        <br />
        <textarea name="addresss" id="" rows={5} defaultValue={""}
        onChange={handleChange} />
        <br />
        <br />
        <label htmlFor="" />
        EMAIL:
        <br />
        <br />
        <input type="email" defaultValue=""
        placeholder="enter your email"
        name="email"
        onChange={handleChange}
         />
        <br />
        <br />
        {/* <label htmlFor="" />
        GENDER:
        <br />
        <br />
        <input type="radio" defaultValue=""
        value={"male"}
        name="gender"
        onClick={handleChange}
         />
        MALE
        <input type="radio" defaultValue=""
        name="gender"
        value={"female"}
        onClick={handleChange}
         />
        FEMALE
        <br />
        <br />
        <label htmlFor="">CITY:</label>
        <br />
        <br />
        <select name="CITY" id="CITY" onChange={handleChange}>
          <option value="">selecy your city</option>
          <option value="calicut">calicut</option>
          <option value="kochi">kochi</option>
          
        </select>
        <br /> */}
        <br />
        <button onClick={handleclick}>register now</button>
        <br />
        <br />
        <h5>Already have an account?</h5>
        <button>
          <Link className="reglog" to={"/"}>
            LOGIN IN
          </Link>
        </button>
        <br />
        <br />
        <a href="https://www.maitexa.com">visit maitexa for further info</a>
        <br />
        <br />
      </form>
    </div>
  );
}
