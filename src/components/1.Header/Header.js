import React from 'react';
// import SearchIcon from './images/SearchIcon.png'
export default function Header() {
  return (
    <div className="navbar">
        <div className="logo">slack</div>
        <div className="options">
            <div className="option">Features</div>
            <div className="option">Solutions</div>
            <div className="option">Enterprise</div>
            <div className="option">Resources</div>
            <div className="option">Pricing</div>            
        </div>
        <div className="navbar-functions">
            <img src= "./images/SearchIcon.png" alt="" />
            <div className='sign-in'><a href="">Sign In</a></div>
            <div className="btns">
                <button className="btn btn1">TALK TO SALES</button>
                <button className="btn btn2">TRY FOR FREE</button>
            </div>
        </div>



    </div>
        
  )
}
