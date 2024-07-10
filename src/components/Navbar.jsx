import React from 'react'
import './navbar.css'
import {Link, useNavigate} from 'react-router-dom'



export default function Navbar() {
  const navigate=useNavigate()

  const profilePage=(parameter)=>{
    navigate('/profile')
  }
  return (
    
    <div className='main'>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarTogglerDemo03"
      aria-controls="navbarTogglerDemo03"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    
    <a className="navbar-brand" href="#">
      SMSTORE
    </a>
    
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <div className='all'>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" style={{width:120}}>
            <div className="dropdown">
  <a
    className="btn3 btn-secondary dropdown-toggle"
    href="#"
    role="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
   
   Categories
  </a>
  <ul className="dropdown-menu">
    <li>
      <a className="dropdown-item" href="#">
        <Link className='dropdown-item' to={"/jewelery"}>Jewelery</Link>
      
      </a>
    </li>
    <li>
      <a className="dropdown-item" href="#">
       
     <Link className='dropdown-item' to={"/electronics"}>Electronics</Link>
      </a>
    </li>
    <li>
      <a className="dropdown-item" href="#">
      <Link className='dropdown-item' to={"/womens-clothing"}>Women's clothing</Link>
        
      </a>
    </li>
    <li>
      <a className="dropdown-item" href="#">
      <Link className='dropdown-item' to={"/mens-clothing"}>Men's clothing</Link>
        
      </a>
    </li>
  </ul>
</div>



          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page">
            Contact
          </a>
        </li>
      </ul></div>
      
      <form className="d-flex" role="search">
        <div className='search'>
       
        <input
          className="form-control me-2"
          type="search"
          placeholder="     type Search"
          aria-label="Search"
        /> <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="currentColor"
        className="bi2 bi-search"
        viewBox="0 0 19 19"
      >
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
      </svg>
      </div>
        <div className='profile' onClick={profilePage}><svg
  xmlns="http://www.w3.org/2000/svg"
  width={30}
  height={30}
  fill="currentColor"
  className="bi bi-person-fill"
  viewBox="0 0 16 16"
>
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
</svg>
</div>
        <div className='fav'><svg
  xmlns="http://www.w3.org/2000/svg"
  width={24}
  height={24}
  fill="currentColor"
  className="bi bi-heart"
  viewBox="0 0 16 16"
>
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
</svg>
</div>
        <div className='bag'><svg
  xmlns="http://www.w3.org/2000/svg"
  width={24}
  height={24}
  fill="currentColor"
  className="bi bi-bag"
  viewBox="0 0 16 16"
>
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
</svg>
</div>
      </form>
    </div>
  </div>
</nav>

    </div>
  )
}
