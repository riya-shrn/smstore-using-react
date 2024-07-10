import React from 'react'
import './womensclothing.css'
import axios from 'axios';
import { useEffect,useState } from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

export default function Womensclothing() {
    const [jewel,setjewel]=useState([])
    console.log(jewel);
    
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products/category/women's%20clothing").then((response)=> {
            console.log(response.data)
            setjewel(response.data)
    
          })
        },[])

        const cat =(parameter)=>{
          navigate(`/single-product/${parameter}`);
        }

  return (
    <div>
         <div className='jewelmain'>
           <Navbar/>
            <div className='womimg'>
            <span className='headjewel'><h1>women's clothing</h1></span>
            </div>
    <div className='conjewel'>
    {jewel.map((value,index)=>(
                    <div className='jewel-api' onClick={()=>{cat(value.id)}}>
                      
                        <img src={value.image} alt="" srcset="" height={'250'} width={'250'} /><div className='jewelrate'> {value.rating.rate}</div><br/>
                        
                        <div className='textjewel'>{value.category}
                            <h5 style={{fontWeight:700}}>{value.title}</h5>
                            <h6>${value.price}</h6>
                        </div>
    
                    </div>
                ))}
    </div>
        </div>
    </div>
  )
}
