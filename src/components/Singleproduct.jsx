import React, { useEffect ,useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import './singleproduct.css'
import Navbar from './Navbar';


export default function Singleproduct() {
    const {product_id}  = useParams()
    console.log(product_id);

    const [single,setsin]=useState({})
console.log(single);



    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${product_id}`).then((response)=>{
            console.log(response.data)
            setsin(response.data)
    
          })
        },[])

  return (
    <div className='single'>
        <Navbar/>

    <div className='mainsingle'>
     
     <img src={single.image} alt="" srcset="" width={'300'} height={'300'} />
    <div className='textsingle'>
       <h2>{single.title}</h2> 
       {single.category}<br/>
       <h4>${single.price}</h4>
       __________________________________________________________<br/>
       {single.description}<br/>
       <button className='btnsing btn-primary' style={{height:40, width:140}}>Add to cart </button><br/>
       <div className='addsingle'><svg
  xmlns="http://www.w3.org/2000/svg"
  width={26}
  height={26}
  fill="currentColor"
  className="bi bi-plus-square-fill"
  viewBox="0 0 16 16"
>
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0" />
</svg> 
__  <svg
  xmlns="http://www.w3.org/2000/svg"
  width={26}
  height={26}
  fill="currentColor"
  className="bi bi-dash-square-fill"
  viewBox="0 0 16 16"
>
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm2.5 7.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1" />
</svg></div>


       </div>

     
    </div></div>
  )
}
