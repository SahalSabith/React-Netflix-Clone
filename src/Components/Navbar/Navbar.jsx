import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import bell from '../../assets/bell.png'
import profile from '../../assets/profile.png'
import search from '../../assets/search.png'
import sortDown from '../../assets/sort-down.png'
import { logout } from '../../firebase'

function Navbar() {

  const navRef = useRef();

  useEffect(() => {
    window.addEventListener('scroll',() => {
      if(window.scrollY >= 80){
        navRef.current.classList.add('nav-dark')
      }else{
        navRef.current.classList.remove('nav-dark')
      }
    })
  },[])

  return (
    <div ref={navRef} className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="logo"/>
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse By Language</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search} alt="search" className='icons'/>
        <p>Children</p>
        <img src={bell} alt="bell" className='icons'/>
        <div className="navbar-profile">
          <img src={profile} alt="profile" className='profile'/>
          <img src={sortDown} alt="sortdown" />
          <div className="dropdown">
            <p onClick={() => {logout()}}>Sign Out Of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
