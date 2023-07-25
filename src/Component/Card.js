import React from 'react'
import '../ComStyles/Card.css'
function Card(props) {
    return (
        <>
        <div className='card1'>
            <div className='c1left'>
                <h2>{props.heading}</h2>
                <p>{props.content}</p>
            </div>
            <div className='c1right'>
                <div className="black"/>
                <img src={props.img1}/>
                <div className='logo'>
                    <img src={props.logo}/>
                    {props.heading}
                </div>
            </div>
            </div>
           <div className='arrow'><img src={props.arrow}/></div>
        </>
        
    )
}

export default Card