import React from 'react'
import img from "../assets/ship2.jpg"
import "../Components/css/service.css"

const Services = () => {
  return (
    <>
    <div>
      <div className="relative opacity-90">
        <img className='h-[90vh] w-[100%] object-cover' src={img} alt="ship"/>
      </div>
      <div className="header_title text-6xl font-bold">
        <p>Ship <span className=' hover:animate-pulse text-orange-500'>Now</span> & Pay <span className='hover:animate-pulse text-orange-500'>Later</span></p>
      </div>
      <div className='Description text-white sm:absolute'>
        Access a simple financial solution for your Train,Truck,Ship and Air freight shipping. <br /> Facilitate 
        delivery processes and expand your supply chain globally with the DFA<br /> Membership Ship Now, Pay Later program. 
        </div>
       
    </div>
    
    
    
    
    
    
    </>
  )
}

export default Services
