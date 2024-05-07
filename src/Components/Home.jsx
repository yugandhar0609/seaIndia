import img1 from "../assets/back.jpg";
import mano from "../assets/mano.png";
import yugendhar from "../assets/yugendhar.png";
import ship from "../assets/ship1.jpg"
import why from "../assets/why.jpeg";
import figma from "../assets/figma.png";
import "../Components/css/Home.css";
import { Link } from "react-router-dom";
import { FaEarthAsia, FaKey } from "react-icons/fa6";
import { FaSave } from "react-icons/fa";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
      <div className="relative">
  <img
    src={img1}
    alt="background"
    className="w-full h-[450px] md:h-[680px] object-cover"
  />
  <div className="absolute overlay-text mobile text-black">
    <p className="text-white">
       <span className="text-orange-500">SEAINDIA</span> FREIGHT SYSTEM PRIVATE LIMITED
    </p>
  </div>
</div>


      <div>
        <p className="  mt-5 text-xl md:mt-6 text-center md:text-3xl font-extrabold text-black font-serif">
          Welcome to <span className="text-orange-500 ">SEAINDIA</span> Shipping, Clearing and Forwarding Agents
        </p>
        <div className="emptyBox md:mt-10"></div>
      </div>
      

      <div className="mt-5 md:flex">
        <div className="md:mt-10 md:flex-wrap ">
          <div className="flex md:flex-wrap text-lg  justify-center md:text-2xl  font-bold font-serif">
            <p>Solutions For Your Business Need</p>
          </div>

          <div className=" flex flex-wrap items-center justify-center gap-5 md:gap-20 md:ml-10 px-2  md:mt-10  md:px-4">
            <div className=" flex flex-col items-center  border border-blue-500 p-10 md:p-10 rounded-xl shadow-xl overflow-hidden shadow-md ">
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

        <div className="max-w-lg p-4 mx-auto rounded-xl ">
          <div className="p-4">
            <div className=" text-lg md:mr-10">
              <p className=" text-2xl md:text-4xl font-bold text-orange-500 justify-content">
                SEAINDIA
              </p>
              <p className="md:mt-4 text-gray-700  justify-content text-justify">
                We are your strong fortress for all your shipping requirements.
                Our experience and knowledge of the shipping industry give you
                and your cargo a competitive edge in your business. Our prayer
                for our valuable customers and us..
              </p>
              <p className="text-gray-700 mt-4 text-justify">
                May the Lord, the God of your fathers, increase you a thousand
                times and bless you as he has promised - Deuteronomy 1:11
              </p>
              <p className="text-gray-700 mt-4 text-justify">
                Freight System Private Limited, we stand as a stalwart fortress,
                guarding your shipping needs with unwavering dedication and
                expertise. With years of experience and a deep understanding of
                the intricacies of the shipping industry, we provide you and
                your cargo with a distinct advantage in the competitive market
                landscape.
              </p>
              <p className="text-gray-700 mt-4 text-justify">
                With gratitude for the trust you place in us and a steadfast
                commitment to your success.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <img
          src={ship}
          alt="background"
          className=" mt-10 w-full md:h-[400px] object-cover "
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-center">
          
          <p className="text-xl md:text-3xl lg:text-4xl font-bold text--300">
            THE BEST SEA FREIGHT SYSTEMS
          </p>
          <p className="text-lg md:text-xl lg:text-2xl font-bold text-white mt-2">
            For Book Your Shipping From Any Country
          </p>

          <Link to="/contact">
            
    
          </Link>
        </div>
      </div>

      <div className=" flex flex-wrap mt-5 mx-10 md:ml-28 lg:ml-32 grid md:grid-cols-3 md:gap-16 md:mt-16">
        <div className="">
          <img
            src={why}
            alt="images"
            className=" rounded-xl   md:w-[460px] md:h-[290px]"
          />
        </div>
        <div>
          <p className=" mt-4  text-xl font-bold">
            Why Choose Us ?
          </p>
          <p className=" mt-4  md:mt-3 text-justify">
            Our extensive global network ensures seamless transport, while our
            tailored solutions cater to your unique requirements. Count on us
            for on-time delivery, secure handling, and open communication
          </p>
          <p className=" mt-4 md:mt-3 text-justify">
            Embracing innovation, we utilize technology for optimized logistics.
            Choose SeaIndia Freight Systems as your trusted partner for
            dependable success.
          </p>
        </div>
        <div>
          <img
            src={figma}
            alt="services"
            className=" mt-4 md:h-[290px]"
          />
        </div>  
      </div>
      <section className="bg-gray-50">
        <div className=" mx-auto max-w-screen-xl px-4 py-14 sm:px-6 lg:px-8 py-5">
          <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Read trusted reviews from our customers
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
            <blockquote className="rounded-lg transform hover:scale-110 transition-transform duration-500 ease-in-out hover:border border-orange-500 p-6 shadow-xl sm:p-8">
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

            <blockquote className="rounded-lg transform hover:scale-110 transition-transform duration-500 ease-in-out hover:border border-orange-500 p-6 shadow-xl sm:p-8">
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

            <blockquote className="rounded-lg transform hover:scale-110 transition-transform duration-500 ease-in-out hover:border border-orange-500 p-6 shadow-xl sm:p-8">
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
      <Footer/>
    </>

  );
};

export default Home;
