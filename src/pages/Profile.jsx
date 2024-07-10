import React, { useEffect, useState } from 'react'
import './profile.css'
import Navbar from '../components/Navbar'
import axios from 'axios'

export default function Profile() {

const login= localStorage.getItem("loginId")
console.log(login)

const [pro,setpro]=useState({})
console.log(pro);

useEffect(()=>{
  axios.get(`https://vadakara-mca-craft-backend.onrender.com/api/user/view-profile/${login}`).then((response)=>{
      console.log(response.data)
      setpro(response.data.data[0])

    })
  },[])

  return (
    <div >
      <Navbar/>
      
      <div className='promain'>
        <div className='pro3'>
        <form action="">
        <h1>SM STORE</h1>
        <h2 className="heading">Profile Details</h2>
      
        <div className='proli'>
________________________________________________________________________
        </div>
        <br /><br />
        <label htmlFor="name">Full Name : </label>
        <input type="text" className='profile' value={pro?.name}
        />
        <br />
        <br />
        <label htmlFor="mobile">Mobile Number: </label>
        <input type="text" 
        className='profile' value={pro?.mobile}/>
        <br />
        <br />
        <label htmlFor="email">EMAIL:</label>
        <input type="email" className='profile' value={ pro?.email} />
        <br />
        <br />
        <label htmlFor="" > Address: {pro?.address}</label>
      <textarea name="" id="" rows={3} className='profile'></textarea>
        <br />
        <br />
        <br />
       
        <button className='btnpro' >edit</button>
       
        
        {/* <button>
          <Link className="reglog" to={"/"}>
            LOGIN IN
          </Link>
        </button> */}
        {/* <br />
        <br />
        <a href="https://www.maitexa.com">visit maitexa for further info</a>
        <br />
        <br /> */}
      </form>
      </div>
      </div>
    </div>
  )
}
