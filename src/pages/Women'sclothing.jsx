import React from 'react'
import './womensclothing.css'

export default function Women'sclothing() {
    const [jewel,setjewel]=useState([])
    console.log(jewel);
    
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products/category/mens-clothing').then((response)=> {
            console.log(response.data)
            setjewel(response.data)
    
          })
        },[])

  return (
    <div className='jewelmain'>
            <Navbar/>
            <div className='jewelimg'>
            <span className='headjewel'><h1>women's clothing</h1></span>
            </div>
    <div className='conjewel'>
    {jewel.map((value,index)=>(
                    <div className='jewel-api'>
                      
                        <img src={value.image} alt="" srcset="" height={'250'} width={'250'} /><div className='jewelrate'> {value.rating.rate}</div><br/>
                        
                        <div className='textjewel'>{value.category}
                            <h5 style={{fontWeight:700}}>{value.title}</h5>
                            <h6>${value.price}</h6>
                        </div>
    
                    </div>
                ))}
    </div>
        </div>
  )
}
