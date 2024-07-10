import { useState,useEffect } from 'react'
import React from 'react'
import './mensclothing.css'
import axios from 'axios'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'


export default function Mensclothing() {
    const [jewel,setjewel]=useState([])
    console.log(jewel);
    
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products/category/men's%20clothing").then((response)=> {
            console.log(response.data)
            setjewel(response.data)
    
          })
        },[])

        const cat =(parameter)=>{
          navigate(`/single-product/${parameter}`);
        }
    
      return (
        <div className='menmain'>
            <Navbar/>
            <div className='menimg'>
            <span className='headmen'><h1>men's clothing</h1></span>
            </div>
    <div className='conmen'>
    {jewel.map((value,index)=>(
                    <div className='men-api' onClick={()=>{cat(value.id)}}>
                      
                        <img src={value.image} alt="" srcset="" height={'250'} width={'250'} /><div className='menrate'> {value.rating.rate}</div><br/>
                        
                        <div className='textmen'>{value.category}
                            <h5 style={{fontWeight:700}}>{value.title}</h5>
                            <h6>${value.price}</h6>
                        </div>
    
                    </div>
                ))}
    </div>
        </div>
      )
    }
    
