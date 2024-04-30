import img1 from "../assets/cirilando.png";
import image from "../assets/choose.jpeg";
import why from "../assets/why.jpeg";
import figma from "../assets/figma.png";
import "../Components/css/Home.css";
import { Link } from "react-router-dom";
import { FaEarthAsia, FaKey } from "react-icons/fa6";
import { FaSave } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <div className="relative object-cover">
        <img
          src={img1}
          alt="background"
          className=" w-full h-[450px] md:h-[580px] "
        />
        <div className=" absolute overlay-text mobile">
          <p>SEAINDIA FREIGHT SYSTEM PRIVATE LIMITED</p>
          <p className="sub-text mobile">
            Shipping, Clearing and Forwarding Agents
          </p>
        </div>
      </div>

      <div>
        <p className="  mt-5 text-xl md:mt-6 text-center md:text-3xl font-extrabold text-blue-500">
          Welcome to SEAINDIA Freight System Private Limited!
        </p>
      </div>

      <div className="md:flex">
        <div className="md:mt-5 md:flex-wrap">
          <div className="flex md:flex-wrap text-lg  ml-10 md:ml-20 md:text-5xl font-bold font-serif">
            <p>Solutions For Your Business Need</p>
          </div>

          <div className=" flex flex-wrap items-center justify-center gap-5 md:gap-20 md:ml-10 px-2  md:mt-10  md:px-4">
            <div className=" flex flex-col items-center  border border-blue-500 p-10 md:p-10 rounded-xl shadow-xl overflow-hidden shadow-md">
              <FaEarthAsia className="text-xl md:text-4xl" />

              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                Your intercontinental
              </h2>
              <h2 className="text-lg md:text-xl font-bold text-gray-800">
                shipping solutions
              </h2>
              <p className="text-gray-600  mt-2">
                With enhanced supply chain solution
              </p>
              <p className="text-gray-600 ">will accelerate your business</p>
            </div>
            <div className="flex flex-col items-center  border border-blue-500 p-12  md:p-10 rounded-xl shadow-xl overflow-hidden shadow-md">
              <FaSave className="text-xl md:text-4xl" />

              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                One Place to save all
              </h2>
              <h2 className="text-lg md:text-xl font-bold text-gray-800">
                Your document
              </h2>
              <p className="text-gray-600  mt-2">
                We provide cloud storage to save
              </p>

              <p className="text-gray-600">all your documents</p>
            </div>
            <div className="flex flex-col items-center  p-10 border border-blue-500   md:p-10 rounded-xl shadow-xl overflow-hidden shadow-md">
              <FaKey className="text-xl md:text-4xl" />

              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                Secure , reliable
              </h2>
              <h2 className="text-lg md:text-xl font-bold text-gray-800">
                and transparent
              </h2>
              <p className="text-gray-600 mt-2">
                Check every logistics in your pocket
              </p>
              <p className="text-gray-600">Your logistics is safe</p>
            </div>
          </div>
        </div>

        <div className="max-w-lg p-4 mx-auto   rounded-xl shadow-xl overflow-hidden shadow-md">
          <div className="p-4">
            <div className=" text-lg md:mr-10">
              <p className=" text-2xl md:text-4xl font-bold text-orange-500 text-center">
                SEAINDIA
              </p>
              <p className="md:mt-4 text-gray-700">
                We are your strong fortress for all your shipping requirements.
                Our experience and knowledge of the shipping industry give you
                and your cargo a competitive edge in your business. Our prayer
                for our valuable customers and us..
              </p>
              <p className="text-gray-700 mt-4">
                May the Lord, the God of your fathers, increase you a thousand
                times and bless you as he has promised - Deuteronomy 1:11
              </p>
              <p className="text-gray-700 mt-4">
                Freight System Private Limited, we stand as a stalwart fortress,
                guarding your shipping needs with unwavering dedication and
                expertise. With years of experience and a deep understanding of
                the intricacies of the shipping industry, we provide you and
                your cargo with a distinct advantage in the competitive market
                landscape.
              </p>
              <p className="text-gray-700 mt-4">
                With gratitude for the trust you place in us and a steadfast
                commitment to your success.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="text-lg md:mr-10">
          <p className="">
            We are your strong fortress for all your shipping requirements. Our
            experience and knowledge of the shipping industry gives you and your
            cargo a competitive edge in your business. Our prayer for our
            valuable customers and us..
          </p>
          <p>
            May the Lord, the God of your fathers, increase you a thousand times
            and bless you as he has promised - Deuteronomy 1:11
          </p>
        </div> */}

      {/* <div className="mt-10 container mx-auto  px-8 lg:px-8">
        <p className=" title text-center text-3xl font-extrabold text-orange-500">
          Welcome to SEAINDIA Freight System Private Limited!
        </p>
        <p className="mt-10 text-lg">
          At <b className="text-xl text-orange-500">SEAINDIA</b> Freight System
          Private Limited, we stand as a stalwart fortress, guarding your
          shipping needs with unwavering dedication and expertise. With years of
          experience and a deep understanding of the intricacies of the shipping
          industry, we provide you and your cargo with a distinct advantage in
          the competitive market landscape.
        </p>
        <p className="mt-10 text-lg">
          Just as the verse from Deuteronomy 1:11 implores, we too pray for
          abundant blessings and prosperity for our esteemed customers and
          ourselves. May the Lord, the God of your fathers, multiply your
          success a thousandfold and bestow upon you the blessings He has
          promised.
        </p>
        <p className="mt-10 text-lg">
          In every shipment we handle, we strive to embody the spirit of
          excellence and integrity, ensuring that your goods reach their
          destination safely and efficiently. With our comprehensive range of
          services encompassing shipping, clearing, and forwarding, we offer a
          seamless solution tailored to meet your specific requirements.
        </p>
        <p className="mt-10 text-lg">
          As your trusted partner in logistics, we are committed to going above
          and beyond to exceed your expectations. Whether you're navigating the
          complexities of international trade or seeking reliable transportation
          solutions, you can rely on SEAINDIA Freight System Private Limited to
          deliver results that propel your business forward.
        </p>
        <p className="mt-10 text-lg">
          With gratitude for the trust you place in us and a steadfast
          commitment to your success, we look forward to continuing our journey
          together, guided by faith and fueled by dedication.
        </p>
      </div> */}

      <div className="relative">
        <img
          src={image}
          alt="background"
          className=" mt-10 w-full md:h-[400px] object-cover opacity-80"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-center">
          <p className="text-lg md:text-xl lg:text-2xl font-extrabold text-black">
            We Provide
          </p>
          <p className="text-xl md:text-3xl lg:text-4xl font-bold text-black">
            THE BEST SEA FREIGHT SYSTEMS
          </p>
          <p className="text-lg md:text-xl lg:text-2xl font-bold text-orange-500">
            For Book Your Shipping From Any Country
          </p>

          <Link to="/contact">
            <button className="mt-3 bg-orange-500 font-bold text-white text-lg rounded-3xl p-2 md:mt-10 hover:bg-orange-600 hover:border hover:border-white">
              Contact With Us
            </button>
          </Link>
        </div>
      </div>

      <div className=" sflex flex-wrap mt-5 mx-6 grid md:grid-cols-3 md:gap-16 md:mt-16">
        <div>
          <img
            src={why}
            alt="images"
            className=" rounded-xl  md:ml-40 md:w-[460px] md:h-[290px]"
          />
        </div>
        <div>
          <p className=" mt-4 md:ml-28 text-xl font-semibold">
            Why Choose Us ?
          </p>
          <p className=" mt-4 md:ml-28 md:mt-3">
            Our extensive global network ensures seamless transport, while our
            tailored solutions cater to your unique requirements. Count on us
            for on-time delivery, secure handling, and open communication
          </p>
          <p className=" mt-4 md:ml-28 md:mt-3">
            Embracing innovation, we utilize technology for optimized logistics.
            Choose SeaIndia Freight Systems as your trusted partner for
            dependable success.
          </p>
        </div>
        <div>
          <img
            src={figma}
            alt="services"
            className=" mt-4 md:w-64 md:h-[290px]"
          />
        </div>
      </div>

      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Read trusted reviews from our customers
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
            <blockquote className="rounded-lg transform hover:scale-110 transition-transform duration-500 ease-in-out hover:border border-orange-500 p-6 shadow-xl sm:p-8">
              <div className="flex items-center gap-4">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                  className="size-14 rounded-full object-cover"
                />

                <div>
                  <div className="flex justify-center gap-0.5 text-green-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="orange"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="orange"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="orange"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="orange"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="orange"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>

                  <p className="mt-0.5 text-lg font-medium text-gray-900">
                    Paul Starr
                  </p>
                </div>
              </div>

              <p className="mt-4 text-gray-700">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
                sit rerum incidunt, a consequuntur recusandae ab saepe illo est
                quia obcaecati neque quibusdam eius accusamus error officiis
                atque voluptates magnam!
              </p>
            </blockquote>

            <blockquote className="rounded-lg transform hover:scale-110 transition-transform duration-500 ease-in-out hover:border border-orange-500 p-6 shadow-xl sm:p-8">
              <div className="flex items-center gap-4">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                  className="size-14 rounded-full object-cover"
                />

                <div>
                  <div className="flex justify-center gap-0.5 text-green-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="orange"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="orange"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="orange"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="orange"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="orange"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>

                  <p className="mt-0.5 text-lg font-medium text-gray-900">
                    Paul Starr
                  </p>
                </div>
              </div>

              <p className="mt-4 text-gray-700">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
                sit rerum incidunt, a consequuntur recusandae ab saepe illo est
                quia obcaecati neque quibusdam eius accusamus error officiis
                atque voluptates magnam!
              </p>
            </blockquote>

            <blockquote className="rounded-lg transform hover:scale-110 transition-transform duration-500 ease-in-out hover:border border-orange-500  p-6 shadow-xl sm:p-8">
              <div className="flex items-center gap-4">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                  className="size-14 rounded-full object-cover"
                />

                <div>
                  <div className="flex justify-center gap-0.5 text-green-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="orange"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="orange"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="orange"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="orange"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="orange"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>

                  <p className="mt-0.5 text-lg font-medium text-gray-900">
                    Paul Starr
                  </p>
                </div>
              </div>

              <p className="mt-4 text-gray-700">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
                sit rerum incidunt, a consequuntur recusandae ab saepe illo est
                quia obcaecati neque quibusdam eius accusamus error officiis
                atque voluptates magnam!
              </p>
            </blockquote>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
