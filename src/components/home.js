import React from 'react'
import Navbar from '../pages/navbar'
import Carousel from '../pages/heroslider';
import heroimg from "../assets/72351f9d3ad5e1074662490290ef160c.jpg"
import heroimg2 from "../assets/PRE- PRIMARY 4.jpeg"
import Levels from "../pages/levels"
import Footer from "../pages/footer"
import Mission from "../pages/mission"
import Booknow from "../pages/booknow"
import Values from "../pages/values"
import Facility from "./facility"
import Translator from './hindi.js';
import AboutSummery from '../pages/aboutsummery';
const home = () => {
  const images = ['heroimg2'];
  return (
    <div className='h-auto overflow-x-hidden bg-stone-100'>
     <Navbar/>
     <Carousel  />
     <Levels/>
     <AboutSummery/>
     <Mission/>
     <Values/>
     <Booknow/>
     <Facility/>
     <Footer/>  
     {/* <Carousel images={images}  /> */}
    </div>
  )
}

export default home