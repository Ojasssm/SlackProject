import React from 'react'

export default function HeroSection() {
  return (
    <div className="heroSection">
      <div className="herosec-left">
        <h1>Made for people.</h1>
        <h1>Built for productivity.</h1>
        <p className='p1'>Connect the right people, find anything that you need and automate the rest. That’s work in Slack, your productivity platform.</p>
        <div className="sec1-btns">
          <button className="sec1-btn1">SIGN UP WITH EMAIL ADDRESS</button>
          <button className="sec1-btn2">SIGN UP WITH GOOGLE</button>
        </div>
        <p className='p1'>Slack is free to try for as long as you like</p>
      </div>
      <div className="herosec-right">
        <video src="./images/Slack video 1.mp4"></video>
      </div>
    </div>
  )
}
