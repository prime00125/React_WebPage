import Yozoi from '../images/Yozoi.png'
import React from 'react'
import './Navbar.css'
import dots from '../images/9dots.png'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import { useState,useEffect } from 'react'
import List from './List'

function Navbar() {

  const[isOpen,setisOpen]=useState(false)
  return (
    <div>
      <nav className='mobileNav'>
        <div className='na'>
      <div class="navleft">
        <Link to="/Page5"><img src={Yozoi} className='yozoi'/></Link>
            
              </div>
              <div className="navright">
                <button type="button" id="btn" onClick={()=>setisOpen(true)}><FontAwesomeIcon icon={faBars} fade /></button>
               
              </div>
              </div>
              <List open={isOpen} className="list" close={()=>setisOpen(false)}/>
        
      </nav>
















        <nav>
          <div class="navleft">
        <Link to="/Page5"><img src={Yozoi} className='yozoi'/></Link>
              <select>
                <option>Company</option>
              </select>      
              <a>safety</a>
            
              <a>FAQ</a>
              </div>
              <div className="navright">
                <img src={dots} className='dots'/>
                <a>Services</a>
                <a>Log in</a>
                <button type="button">sign Up</button>
              </div>
        </nav>
    </div>
  )
}

export default Navbar