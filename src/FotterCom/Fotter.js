import React from 'react'
import google from '../images/google play.png'
import apple from '../images/app Store.png'
import Yozoi from '../images/Yozoi.png'
import '../FotterCom/fotter.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope,faPhone} from '@fortawesome/free-solid-svg-icons'
import {faFacebook,faLinkedin,faYoutube,faTelegram} from '@fortawesome/free-brands-svg-icons'


function Fotter() {
  return (
    <div className='fotter'>
        <div className="part1">
        <div className="part1Box">
            <h2>Learn More</h2>
            <a>About us</a>
            <a>terms & Condition</a>
            <a>Privacy Policy</a>
        </div>
        <div className="part2Box">
            <h2>Stay Connected</h2>
            <div>
            <FontAwesomeIcon icon={faLinkedin} beat className='icons'/>
            <FontAwesomeIcon icon={faYoutube} beat className='icons'/>
            <FontAwesomeIcon icon={faFacebook} beat className='icons'/>
            </div>
        </div>
        <div className="part1Box">
            <h2>Contact Us</h2>
            
            <a><FontAwesomeIcon icon={faPhone} />      +91 8962982574</a>
            
            <a><FontAwesomeIcon icon={faEnvelope} />     Dummy@gmail.com</a>
            
            <p><FontAwesomeIcon icon={faTelegram} />     Dummy Address Lorem Ipsum Sit Amet Dummy Pin Dummy place.</p>
        </div>
        </div>
        <img src={Yozoi} className='Yozoi'/>
        <p>Get it on</p>
        <div>
            <img src={google} className='store'/>
            <img src={apple} className='store'/>
        </div>
        <p> @ 2023 Yozoi Limited</p>
    </div>
  )
}

export default Fotter