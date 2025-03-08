import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import hero_banner from '../../assets/hero-banner.jpeg'
import hero_title from '../../assets/hero-title.png'
import info_btn from '../../assets/info.png'
import play_btn from '../../assets/play.png'
import Titlecards from '../../Components/TitleCards/Titlecards'
import Footer from '../../Components/Footer/Footer'

function Home() {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img'/>
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img'/>
          <p>An unusual group of robbers attempt to carry out the most perfect robbery 
            in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.</p>
            <div className="hero-btns">
              <button className='btn'><img src={play_btn} alt=""/>Play</button>
              <button className='btn dark-btn'><img src={info_btn} alt=""/>More Info</button>
            </div>
            <Titlecards/>
        </div>
      </div>
      <div className="more-cards">
      <Titlecards title={"Blockbuster Movie"} category={"top_rated"}/>
      <Titlecards title={"HollyWood Movies"} category={"popular"}/>
      <Titlecards title={"Only On Netflix"} category={"upcoming"}/>
      <Titlecards title={"Top Pics For You"} category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
