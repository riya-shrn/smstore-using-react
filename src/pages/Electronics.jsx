import React, { useState,useEffect } from 'react'
import './electronics.css'
import axios from 'axios';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';


export default function Electronics() {
    const [elec,setelec]=useState([])
console.log(elec);

const navigate = useNavigate()

useEffect(()=>{
    axios.get('https://fakestoreapi.com/products/category/electronics').then((response)=>{
        console.log(response.data)
        setelec(response.data)

      })
    },[])

    const cat =(parameter)=>{
      navigate(`/single-product/${parameter}`);
    }

  return (

    <div className='elecmain'>
        <Navbar/>
        <div className='imgelec'>
            <span className='headelec'><h1>electronics</h1></span>
           </div>

           <div className='conelec'>
            {elec.map((value,index)=>(
                <div className='elec-api' onClick={()=>{cat(value.id)}}>
                    <img src={value.image} alt="" srcset="" height={'250'} width={'250'} /><br/>
                    <div className='elecrate'> {value.rating.rate}</div>
                    <div className='textelec'>{value.category}
                        <h5 style={{fontWeight:700}}>{value.title}</h5>
                        <h6>${value.price}</h6>
                    </div>

                </div>
            ))}

           </div>

    </div>
  )
}
