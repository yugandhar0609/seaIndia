import React from 'react'

const Team = () => {
  return (
    <>
        <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          alt=""
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <p className="inline-block px-3 py-px mb-4 text-xs font-bold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
          <span className="text-orange-400">
          SEA
            </span> INDIA
          </p>
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            Your Lightinig
            <br className="hidden md:block" />
            fast{' '}
            <span className="text-orange-400">
            Delivery Partners
            </span>

          </h2>
          <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
          Teamwork is crucial in shipping, clearing, and forwarding firms, with agents, specialists, and coordinators contributing significantly. 
          </p>
          <div className="flex items-center">
            <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold text-orange-400 transition-colors duration-200 hover:text-black"
          >
            Learn more...
          </a>

          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Team
