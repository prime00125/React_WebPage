import React from 'react'
import '../ComStyles/Change.css'
function Card2(props) {
    return (
        <>
        <div className='card2' id="mobstyle">
        <div className='c2right'>
                <div className="black"/>
                <img  src={props.img1} className="C2MainImg"/>
                <div className='logo'>
                    <img src={props.logo}/>
                    {props.heading}
                </div>
            </div>
        <div className='c2left'>
                <h2>{props.heading}</h2>
                <p>{props.content}</p>
            </div>
            
            </div>
           <div className='arrow'><img src={props.arrow} className='arrowimg'/></div>
        </>
        
    )
}

export default Card2