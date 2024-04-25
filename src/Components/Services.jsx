import React from 'react'
import img from "../assets/ship2.jpg"
import "../Components/css/service.css"

const Services = () => {
  return (
    <>
    <div>
      <div className="relative opacity-90">
        <img className='h-[80vh] w-[100%] object-cover' src={img} alt="ship"/>
      </div>
      <div className="overlay-text">
        <h2>You Fill the <span className='text-blue-800'>Container</span> ,
        We Fill In the <span className="text-red-800">Rest</span>.</h2>
      </div>
    </div>
    
    
    
    
    
    
    </>
  )
}

export default Services
