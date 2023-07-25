import React from 'react'
import '../ComStyles/Card3.css'
function Card3(props) {
    return (
        <>
        <div className='card1'>
            <div className='c1left'>
                <h2>{props.heading}</h2>
                <p>{props.content}</p>
            </div>
            <div className='c1right'>
                <div className="c3black"/>
                <img src={props.img1}/>
                <div className='logo'>
                    <img src={props.logo}/>
                    {props.heading}
                </div>
            </div>
            </div>
        </>
        
    )
}

export default Card3