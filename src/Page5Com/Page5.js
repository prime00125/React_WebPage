import React from 'react'
import '../ComStyles/Page5.css'
import Navbar from '../NavbarCom/Navbar'
import MainPage from '../Component/MainPage'
import Fotter from '../FotterCom/Fotter'
import worksImg from '../images/how yozoi works/banner.jpg'
import P5Body from './P5Body'
function Page5() {
  return (
    <div className="Page5">
   <Navbar/>
  <MainPage content={"How Yozoi Works"} img={worksImg}/> 
   <P5Body/>
   <Fotter/>
    </div>
  )
}

export default Page5