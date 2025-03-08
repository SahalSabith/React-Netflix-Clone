import React from 'react'
import './Footer.css'
import facbook_logo from '../../assets/facebook.png'
import instgram_logo from '../../assets/instagram.png'
import twitter_logo from '../../assets/twitter.png'
import youtube_logo from '../../assets/youtube.png'

function Footer() {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={facbook_logo} alt="" />
        <img src={instgram_logo} alt="" />
        <img src={twitter_logo} alt="" />
        <img src={youtube_logo} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Investor Relation</li>
        <li>Legal Notices</li>
        <li>Help Centre</li>
        <li>Jobs</li>
        <li>Cookie Prefernce</li>
        <li>Gift Cards</li>
        <li>Terms of Use</li>
        <li>Corprate Information</li>
        <li>Media Centre</li>
        <li>Privacy</li>
        <li>Contact Us</li>
      </ul>
      <button className='footer-btn'>Service Code</button>
      <p className='copyright-text'>© 1997-2025 Netflix inc</p>
    </div>
  )
}

export default Footer
