import React from 'react'
import './slider.css'

export default function Slider() {
  return (
    <div className='slidemain'>
        <div
  id="carouselExampleAutoplaying"
  className="carousel slide"
  data-bs-ride="carousel"
>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="assets\images\69385802_115047156534011_2421328619604279296_n.jpg" className="d-block w-100" alt="" height={'800'} width={'300'}/>
      <div className="text">
          <span className="text1">Men's Collection </span>
          <br />
          <span className="text2">New Arrivals</span> <br />
          <button type="button" class="btn btn-primary" style={{height:'30px', width:'110px'}}>
            Shop now
          </button>
        </div>
    </div>
    <div className="carousel-item">
      <img src="assets\images\img-02-2b5d92e9.jpg" className="d-block w-100" alt="" height={'800'} width={'300'} />
      <div className="text">
          <span className="text1">Women's Collection </span>
          <br />
          <span className="text2">New Season's</span> <br />
          <button type="button" class="btn btn-primary" style={{height:'30px', width:'110px'}}>
            Shop now
          </button>
        </div>
    </div>
    <div className="carousel-item">
      <img src="assets\images\img-03-3a47f185.jpg" className="d-block w-100" alt="" height={'800'} width={'300'} />
      <div className="text">
          <span className="text1">Accessories </span>
          <br />
          <span className="text2">Slide Jacket</span> <br />
          <button type="button" class="btnsli btn-primary" style={{height:'30px', width:'110px'}}>
            Shop now
          </button>
        </div>
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleAutoplaying"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleAutoplaying"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </div>
  )
}
