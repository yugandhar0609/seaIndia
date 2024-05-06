import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import Map from "../assets/map.jpg";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  // const apiURL = "process.env.REACT_APP_API_URL";
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `https://seaindia-backend.onrender.com/post`,
        formData
      );
      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Something went wrong");

      // console.log("Data", data);
    }
  };

  return (
    <>
      <div className="container  my-4 px-4 lg:px-20 mt-24">
        <form onSubmit={handleSubmit}>
          <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
            <div className="flex">
              <h1 className="font-bold uppercase text-5xl">
                Send us a <br /> message
              </h1>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="First Name*"
                required
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Last Name*"
                required
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email*"
                required
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="Phone*"
                required
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="my-4">
              <textarea
                placeholder="Message*"
                className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="my-2 w-1/2 lg:w-1/4">
              <button
                type="submit"
                className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>

        <div className=" relative z-20 w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl">
          <div className="flex flex-col text-black">
            <h1 className="font-bold uppercase text-4xl texrt- my-4">
              Our Offices
            </h1>

            {/* Main Office */}
            <div className="flex my-2 w-full lg:w-2/3">
              <div className="flex flex-col">
                <h2 className="text-2xl">Main Office</h2>
                <div className="text-white">
                  <Link to="https://maps.app.goo.gl/YykVukc2jyqrPgHu6">
                    <p className="hover:text-black transition-color duration-500">
                      SEAINDIA Freight System PRVT LTD Old 309/310, II Floor,
                      Linghi Chetty street, Chennai 600 001, TN IN{" "}
                    </p>
                  </Link>{" "}
                  <Link to="tel:914425217261" className="hover:text-black transition-color duration-500">Tel : +91 44 2521 7261</Link><br />
                  <Link to="mailto:info@seaindia.com" className="hover:text-black transition-color duration-500">
                    {" "}
                    Mail : info@seaindia.co.in
                  </Link>
                </div>
              </div>
            </div>

            {/* Branch Offices */}
            <div className="flex my-4 w-full lg:w-2/3">
              <div className="flex flex-col">
                <h2 className="text-2xl">MUMBAI Office </h2>
                <div className="text-white">
                  <Link to="https://maps.app.goo.gl/BSkgYdoFqdTom7Dt8">
                    <p className="hover:text-black transition-color duration-500"> 
                      Plot no.19, Office no.111, Gauri Commercial Complex,
                      Secton No. 11, CBD Belapur, NAVI MUMBAI - 400614.{" "}
                    </p>
                  </Link>{" "}
                  <Link to="tel:9102227572192" className="hover:text-black transition-color duration-500">Tel : +91 022 27572192</Link><br />
                  <Link to="mailto:mumbai@seaindia.co.in" className="hover:text-black transition-color duration-500">
                    {" "}
                    Mail : mumbai@seaindia.co.in
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex my-4 w-full lg:w-2/3">
              <div className="flex flex-col">
                <h2 className="text-2xl">TUTICORIN</h2>
                <div className="text-white">
                  <Link to="https://maps.app.goo.gl/DUayDbVxZwSPvNL66">
                    <p className="hover:text-black transition-color duration-500">4/48, New Salt Colony, Tuticorin - 628 003 </p>
                  </Link>
                  <Link to="tel:91 4612376840" className="hover:text-black transition-color duration-500">Tel : +91 461 237 6840</Link><br />
                  <Link to="mailto:tuticorin@seaindia.co.in" className="hover:text-black transition-color duration-500">
                    {" "}
                    Mail : tuticorin@seaindia.co.in
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <div className=" inline-block lg:-mt-72 my-10 ">
           <Link to="" className="rounded-2xl z-10 container"> <img src={Map} alt="map" /> </Link>
           </div>
      </div>
    </>
  );
};

export default ContactForm;
