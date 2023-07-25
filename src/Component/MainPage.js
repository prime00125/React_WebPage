import React from 'react'
import '../ComStyles/MainPage.css'

function MainPage(props) {
  return (
<>

    <img src={props.img} className='Mainimg'/>
    
    <div className="MainPage">
     <a>{props.content}</a> 
    </div>
    </>
  )
}

export default MainPage