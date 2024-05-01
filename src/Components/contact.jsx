import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";

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
      const response = await axios.post('http://localhost:5000/post', formData);
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
      <div className="container mx-auto my-4 px-4 lg:px-20 mt-24">
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

        <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-gradient-to-r from-orange-500 to-red-800 rounded-2xl">
          <div className="flex flex-col text-black">
            <h1 className="font-bold uppercase text-4xl texrt- my-4">Our Offices</h1>

            {/* Main Office */}
            <div className="flex my-2 w-full lg:w-2/3">
              <div className="flex flex-col">
                <h2 className="text-2xl">Main Office</h2>
                <p className="text-white">
                  SEAINDIA Freight System PRVT LTD Old 309/310, II Floor, Linghi
                  Chetty street, Chennai 600 001, TN IN <br />
                  Tel : +91 44 2521 7261<br /> mail : info@seaindia.co.in
                </p>
                <Link
                  to="https://maps.app.goo.gl/YykVukc2jyqrPgHu6"
                  className="text-blue-900 hover:text-blue-400"
                >
                  Google Map
                </Link>
              </div>
            </div>

            {/* Branch Offices */}
            <div className="flex my-4 w-full lg:w-2/3">
              <div className="flex flex-col">
                <h2 className="text-2xl">MUMBAI Office </h2>
                <p className="text-white">
                  Plot no.19, Office no.111, Gauri Commercial Complex, Secton
                  No. 11, CBD Belapur, NAVI MUMBAI - 400614.<br /> Tel : +91 022
                  27572192 <br />Fax : +91 022 27572194<br /> Mail : mumbai@seaindia.co.in
                </p>
                <Link
                  to="https://maps.app.goo.gl/BSkgYdoFqdTom7Dt8"
                  className="text-blue-900 hover:text-blue-400"
                >
                  Google Map
                </Link>
              </div>
            </div>

            <div className="flex my-4 w-full lg:w-2/3">
              <div className="flex flex-col">
                <h2 className="text-2xl">TUTICORIN</h2>
                <p className="text-white">
                  4/48, New Salt Colony, Tuticorin - 628 003 <br />Tel : +91 461 237
                  6840, +91 461 400 0850 <br />Fax : +91 461 237 819 <br />Mail :
                  tuticorin@seaindia.co.in
                </p>
                <Link
                  to="https://maps.app.goo.gl/3d7D5WUY74txgUir8"
                  className="text-blue-900 hover:text-blue-400"
                >
                  Google Map
                </Link>
              </div>
            </div>

            {/* Contact Information
            <div className="flex my-4 w-full lg:w-2/3">
              <div className="flex flex-col pr-4">
                <i className="fas fa-phone-alt pt-2 pr-2" />
              </div>
              <div className="flex flex-col">
                <h2 className="text-2xl">Contact Us</h2>
                <p className="text-gray-400">Tel: xxx-xxx-xxx</p>
                <p className="text-gray-400">Fax: xxx-xxx-xxx</p>
              </div>
            </div> */}

            {/* Social Media Links */}
            {/* <div className="flex my-4 w-full lg:w-2/3">
              <Link
                to="https://www.facebook.com/ENLIGHTENEERING/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1"
              >
                <i className="fab fa-facebook-f text-blue-900" />
              </Link>
              <Link
                to="https://www.linkedin.com/company/enlighteneering-inc-"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1"
              >
                <i className="fab fa-linkedin-in text-blue-900" />
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
