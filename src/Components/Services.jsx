import React from "react";
import img1 from "../assets/ship2.jpg";
import "./css/service.css";
import img2 from "../assets/new.png";
import mano from "../assets/mano.png";
import yugendhar from "../assets/yugendhar.png";
import ocean from "../assets/shipping2.png";
import frieght from "../assets/fieght3.png";
import railway from "../assets/railway2.png";
import road from "../assets/road.png";
import special from "../assets/special.png";
import intermodel from "../assets/intermodel.png";


const Services = () => {
  return (
    <div>
      <div className=" relative object-cover">
        <img className="img1 h-[450px] md:h-[650px] " src={img1} alt="" />
      </div>
      <div className=" mt-4 absolute overlay-p">
        <p>
          <span className="text-orange-500 animation- ">Our</span>{" "}
          <span className=" text-black  md:text-white   ">Services</span>
        </p>
      </div>

      <div className="emptyBox"></div>
      <p className=" mt-16 mb-10 px-4  flex justify-center text-3xl md:my-10 ">
        Looking for a specific service? Narrow your search by selecting a
        service.
      </p>
      <div className="bg-orange-500">
      <div className="  px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-5">
        <h2 className=" relative bottom-10 p-10 flex  justify-center text-3xl font-bold sm:text-4xl">
          Shipping Services
        </h2>
        <div className="grid gap-20 row-gap-5 sm:row-gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div  className="flex items-center justify-center w-20 h-10 mb-4 rounded-full bg-indigo-50">
              <img className="rounded-full" src={ocean} alt="ocean" />
            </div>
            <h6 className="mb-2 font-bold text-2xl leading-5">Ocean freight</h6>
            <p className="mb-3 text-bold text-white">
              Full Container Load (FCL) Shipping: Exclusive use of a container
              for a single shipment. Less than Container Load (LCL) Shipping:
              Consolidation of multiple shipments in a single container.
              Breakbulk Shipping: Transportation of oversized or
              non-containerized cargo.
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-semibold rounded-full shadow-sm text-black bg-deep-purple-accent-400 hover:bg-orange-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:ring-opacity-50 transition-colors duration-200"
            >
              Book Now
            </a>
          </div>
          <div>
          <div  className="flex items-center justify-center w-20 h-10 mb-4 rounded-full bg-indigo-50">
              <img className="rounded-full" src={frieght} alt="ocean" />
            </div>
            <h6 className="mb-2 font-bold text-2xl leading-5">Air freight</h6>
            <p className="mb-3 text-bold text-white">
              Expedited Shipping: Fast and time-sensitive delivery of goods via
              air transport. Direct and Consolidated Shipments: Options for
              exclusive or shared use of cargo space on aircraft.
              Temperature-Controlled Shipping: Transport of perishable or
              temperature-sensitive goods.
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-semibold rounded-full shadow-sm text-black bg-deep-purple-accent-400 hover:bg-orange-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:ring-opacity-50 transition-colors duration-200"
            >
              Book Now
            </a>
          </div>
          <div>
          <div  className="flex items-center justify-center w-20 h-10 mb-4 rounded-full bg-indigo-50">
              <img className="rounded-full" src={railway} alt="ocean" />
            </div>
            <h6 className="mb-2 font-bold text-2xl leading-5">Rail freight</h6>
            <p className="mb-3 text-bold text-white">
              Domestic and International Rail Services: Transport of cargo via
              rail networks within a country or across borders. Intermodal
              Transportation: Integration of rail transport with other modes,
              such as trucking and ocean shipping.
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-semibold rounded-full shadow-sm text-black bg-deep-purple-accent-400 hover:bg-orange-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:ring-opacity-50 transition-colors duration-200"
            >
              Book Now
            </a>
          </div>
          <div>
          <div  className="flex items-center justify-center w-20 h-10 mb-4 rounded-full bg-indigo-50">
              <img className="rounded-full" src={road} alt="ocean" />
            </div>
            <h6 className="mb-2 font-bold text-2xl leading-5">Road freight</h6>
            <p className="mb-3 text-bold text-white">
              Domestic and Cross-Border Trucking: Transport of goods by road
              within a country or between countries. Full Truckload (FTL) and
              Less than Truckload (LTL) Services: Options for exclusive or
              shared use of truck capacity based on shipment size.
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-semibold rounded-full shadow-sm text-black bg-deep-purple-accent-400 hover:bg-orange-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:ring-opacity-50 transition-colors duration-200"
            >
              Book Now
            </a>
          </div>
          <div>
          <div  className="flex items-center justify-center w-20 h-10 mb-4 rounded-full bg-indigo-50">
              <img className="rounded-full" src={intermodel} alt="ocean" />
            </div>
            <h6 className="mb-2 font-bold text-2xl leading-5">
              Intermodal transportation
            </h6>
            <p className="mb-3 text-bold text-white">
              Multimodal Solutions: Integration of multiple modes of
              transportation (e.g., trucking, rail, ocean, air) to optimize
              supply chain efficiency. Door-to-Door Delivery: Seamless movement
              of cargo from origin to destination, including pickup and final
              delivery.
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-semibold rounded-full shadow-sm text-black bg-deep-purple-accent-400 hover:bg-orange-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:ring-opacity-50 transition-colors duration-200"
            >
              Book Now
            </a>
          </div>
          <div>
          <div  className="flex items-center justify-center w-20 h-10 mb-4 rounded-full bg-indigo-50">
              <img className="rounded-full" src={special} alt="ocean" />
            </div>
            <h6 className="mb-2 font-bold text-2xl leading-5">
              Specialized Shipping Services:
            </h6>
            <p className="mb-3 text-bold text-white">
              Hazardous Materials Shipping: Safe and compliant transportation of
              dangerous goods, following regulatory requirements. Oversized and
              Heavy Haul Shipping: Transport of bulky or heavy cargo, including
              specialized equipment and permits as needed.
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-semibold rounded-full shadow-sm text-black bg-deep-purple-accent-400 hover:bg-orange-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:ring-opacity-50 transition-colors duration-200"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
      </div>

      <div className="">
        <h1 className="font-bold  text-4xl md:flex  justify-center pt-10 sm: flex justify-center">LOGISTICS</h1>
        <div className="emptyBox1"></div>
        <p className=" text-4xl  md:flex  justify-center py-10 pt-5 sm: text-l flex justify-center items-center">End-to-End Cargo Solutions That You Can Rely On</p>
      </div>
      
      <div w-full>
        <img className="w-full" src={img2} alt="logistics" />
      </div>

      <section className="bg-gray-50">
        <div className=" mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 py-5">
          <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Read trusted reviews from our customers
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
            <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-4">
                <img
                  alt=""
                  src={mano}
                  className="size-14 rounded-full object-cover"
                />

                <div>
                  <div className="flex justify-center gap-0.5 text-orange-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>

                  <p className="mt-0.5 text-lg font-medium text-gray-900">
                    Manojkumar
                  </p>
                </div>
              </div>

              <p className="mt-4 text-gray-700">
                "I've been using{" "}
                <span className=" text-orange-500"> Sea India </span> for all my
                shipping needs, and I couldn't be happier with the service they
                provide. Their team is always responsive, professional, and goes
                above and beyond to ensure that my shipments arrive on time and
                in perfect condition. Whether it's ocean freight, air freight,
                or trucking, I trust <span text-orange>Sea India</span> to
                handle my logistics needs with efficiency and reliability."
              </p>
            </blockquote>

            <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-4">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                  className="size-14 rounded-full object-cover"
                />

                <div>
                  <div className="flex justify-center gap-0.5 text-orange-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>

                  <p className="mt-0.5 text-lg font-medium text-gray-900">
                    Vasan
                  </p>
                </div>
              </div>

              <p className="mt-4 text-gray-700">
                One of the things I appreciate most about{" "}
                <span className="text-orange-500">SEA INDIA</span> is their
                comprehensive range of services. Whether it's ocean freight, air
                freight, or road transportation, they have the expertise and
                resources to handle all of my shipping needs. Their ability to
                offer end-to-end solutions, from customs clearance to final
                delivery, has streamlined my logistics operations and saved me
                valuable time and resources.
              </p>
            </blockquote>

            <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-4">
                <img
                  alt=""
                  src={yugendhar}
                  className="size-14 rounded-full object-cover"
                />

                <div>
                  <div className="flex justify-center gap-0.5 text-orange-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>

                  <p className="mt-0.5 text-lg font-medium text-gray-900">
                    Yugendhar
                  </p>
                </div>
              </div>

              <p className="mt-4 text-gray-700">
                <span className="text-orange-500">Sea india</span> delivers on
                both speed and security. I've been using their services for
                urgent shipments, and they consistently impress me with their
                quick turnaround times without compromising on safety. From
                pickup to delivery, my shipments arrive on time and intact,
                giving me peace of mind knowing that my goods are in safe hands.
                Highly recommended for anyone in need of fast and secure
                logistics solutions!"
              </p>
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
