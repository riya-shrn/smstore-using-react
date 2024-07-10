import React,{useEffect,useState} from "react";
import "./home.css";
import Navbar from "../components/Navbar";
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";
import Slider from "../components/Slider";
import Footer from "../components/Footer";



export default function Home() {
  const [details,Setdetails] =useState([])
  console.log(details);
  
  const navigate = useNavigate()

  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products/categories').then((response)=>{
        console.log(response.data)
        Setdetails(response.data)

      })
    },[])
        const [state,Setstate] =useState([])
  console.log(state);

  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products').then((response)=>{
        console.log(response.data)
        Setstate(response.data)

    })
},[])

const cat =(parameter)=>{
  navigate(`/single-product/${parameter}`);
}

 const category =(parameter)=>{
  if (parameter=='electronics') {
    navigate('/electronics')
  }
  if (parameter=='jewelery') {
   navigate('/jewelery')
  }
  // if (parameter=='mensclothing') {
  //  navigate('/mens-clothing')
  // }
  // if (parameter=='jewelery') {
  //  navigate('/jewelery')
  // }
 }
  
  return (
    <div className="main1">
      <Navbar />
      <div className="one">
        <Slider/>
        {/* <div className="text">
          <span className="text1">Men's Collection </span>
          <br />
          <span className="text2">New Arrivals</span> <br />
          <button type="button" class="btn btn-primary">
            Shop now
          </button>
        </div> */}
      </div>
      <div className="container text-center">
      <div className="row">

        {details.map((value,index)=>(

          <div className="col-lg-2"  onClick={()=>{category(value)}}>
           
            <div className="coltext">
              <h5>{value}</h5>
            </div>
          </div>
        ))
      }
      
       
        </div>

        
        
      </div>

      <div className="exp" style={{ textAlign: "center" }}>
        <h3>Explore Products</h3>
        <div className="container2 text-center">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-6">
          <div className="col2">
               <a href="" className="colt">All</a>
             </div>
           
            <div className="col2">
              <a href="" className="colt"><Link className="colt" to={"/womens-clothing"}>women's clothing</Link></a>
            </div>
            <div className="col2">
              <a href="" className="colt"><Link className="colt" to={"/mens-clothing"}>men's clothing</Link></a>
            </div>
            <div className="col2">
              <a href="" className="colt">
                <Link className="colt" to={"/electronics"}>electronics</Link>
                </a>
            </div>
            <div className="col2">
              <a href="" className="colt">
              <Link className="colt" to={"/jewelery"}>jewelery</Link></a>
            </div>
           
          </div>
          <div className='container4'>
          {state.map((value,index)=>(
 
            <div className='card' onClick={()=>{cat(value.id)}} >
 <img src={value.image} alt="" height={'250px'} width={'250px'} />
 <span className="rate">{value.rating.rate}</span>
 <div className="text6">
  
 {value.category}
 
              <h4 style={{fontWeight:700}}>{value.title}</h4>
              <h5>${value.price}</h5>
              </div>
 </div>
          ))}
          </div>

        </div>
      </div>





     


    </div>
  )
}