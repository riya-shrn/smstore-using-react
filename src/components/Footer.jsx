import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <div className='main'>
        <>
  <div className="container my-5">
    
    <footer
      className="text-center text-lg-start text-white"
      style={{ backgroundColor: "black" }}
    >
      
      <div className="container p-4 pb-0">
      
        <section className="">
          
          <div className="row">
            {/* Grid column */}
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                SM STORE
              </h6>
              <br/>
              <br/>
              <br/>
              <h6>SUBSCRIBE</h6>
            </div>
            {/* Grid column */}
            <hr className="w-100 clearfix d-md-none" />
            {/* Grid column */}
            <div className="col-md-1 col-lg-1 col-xl-1 mx-auto mt-3">
              <p className=" mb-4 font-weight">Categories</p>
              {/* <p className=" mb-4 font-weight">About</p>
              <p className=" mb-4 font-weight">Contact</p> */}
              
              {/* <p>
                <a className="text-white">MDBootstrap</a>
              </p>
              <p>
                <a className="text-white">MDWordPress</a>
              </p>
              <p>
                <a className="text-white">BrandFlow</a>
              </p>
              <p>
                <a className="text-white">Bootstrap Angular</a>
              </p> */}
            </div>
            <div className="col-md-1 col-lg-1 col-xl-1 mx-auto mt-3">
              <p className=" mb-4 ">About</p></div>
            <div className="col-md-1 col-lg-1 col-xl-1 mx-auto mt-3">
              <p className=" mb-4 font-weight">Contact</p></div>
            
            {/* Grid column */}
            <hr className="w-100 clearfix d-md-none" />
            {/* Grid column */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3" >
              {/* <h6 className="text-uppercase mb-4 font-weight-bold">
                Useful links
              </h6> */}
              <p>
                <a className="text-white1" >Orders</a>
              </p>
              <p>
                <a className="text-white1">Shipping and Delivery</a>
              </p>
              <p>
                <a className="text-white1">Privacy Policy</a>
              </p>
              <p>
                <a className="text-white1">Help</a>
              </p>
            </div>
            {/* Grid column */}
            <hr className="w-100 clearfix d-md-none" />
            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              {/* <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6> */}
              <p>
                <i className="fas fa-home mr-3" />Payment Options
              </p>
              <p>
                <i className="fas fa-envelope mr-3" /> Guides
              </p>
              <p>
                <i className="fas fa-phone mr-3" />Terms of Use
              </p>
              <p>
                <i className="fas fa-print mr-3" /> 
              </p>
            </div>
            {/* Grid column */}
          </div>
          {/*Grid row*/}
        </section>
        {/* Section: Links */}
        {/* <hr className="my-3" /> */}
        {/* Section: Copyright */}
        <section className="p-3 pt-0">
          <div className="row d-flex align-items-center">
            {/* Grid column */}
            <div className="col-md-7 col-lg-8 text-center text-md-start">
              {/* Copyright */}
              {/* <hr className="my-1" />
              <div className="p-1">
                © 2020 Copyright:
                
              </div> */}
              {/* Copyright */}
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
              {/* Facebook */}
              <a
                className="btn btn-outline-light btn-floating m-1"
                role="button"
                
              >
              <svg
  xmlns="http://www.w3.org/2000/svg"
  width={30}
  height={30}
  fill="currentColor"
  className="bi bi-facebook"
  viewBox="0 0 25 25"
>
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
</svg>

        
                {/* <i className="fab fa-facebook-f" /> */}
               

              </a>
              {/* Twitter */}
              <a
                className="btn btn-outline-light btn-floating m-1"
                role="button"
              >
                <i className="fab fa-twitter" />
              </a>
              {/* Google */}
              <a
                className="btn btn-outline-light btn-floating m-1"
                role="button"
              >
                <i className="fab fa-google" />
              </a>
              {/* Instagram */}
              <a
                className="btn btn-outline-light btn-floating m-1"
                role="button"
              >
                <i className="fab fa-instagram" />
              </a>
            </div>
            {/* Grid column */}
          </div>
        </section>
        {/* Section: Copyright */}
      </div>
      {/* Grid container */}
    </footer>
    {/* Footer */}
  </div>
  {/* End of .container */}
</>

    </div>
  )
}
