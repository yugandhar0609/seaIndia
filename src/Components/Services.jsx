import React from 'react'
import img from "../assets/ship.jpg"
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
      <div className='Description text-gray-800 font-bold text-xl'>
        Access a simple financial solution for your Train,Truck,Ship and <br /> Air freight shipping.  Facilitate 
        delivery processes and expand your <br /> supply chain globally with the DFA Membership Ship Now and <br/>Pay Later program. 
        </div>
        <div>
          <button className='btn1 border-2 border-gray-400 hover:bg-orange-400 text-1xl font-bold text-white bg-orange-500 p-3 px-5 rounded-md'>Request a demo</button>
        </div>
        <div className="content">

          <div>
            <h1 className='font-bold text-4xl'>How it works</h1>
          </div>

        </div>
    </div>
    
    
    
    
    
    
    </>
  )
}

export default Services
