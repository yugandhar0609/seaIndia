import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { HiOutlineMailOpen } from "react-icons/hi";
import { MdPhone } from "react-icons/md";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import img from "../assets/Logo.jpg";

const Nav = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  const closeNavbar = () => {
    setMobileDrawerOpen(false);
  };
  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-white z-50">
        <div className="hidden md:flex  bg-orange-500 py-2 gap-2 md:gap-10 ">
          <div className="flex flex-wrap ml-2">
            <div className="flex ml-2 mb-2 md:mb-0 md:mx-10 cursor-pointer">
              <HiOutlineMailOpen className="mt-1 text-lg" />
              <h1 className="ml-1">info@seaindia.com</h1>
            </div>
            <div className="flex mb-2 ml-2 md:mb-0 cursor-pointer">
              <MdPhone className="mt-1 text-lg" />
              <Link to="tel:+917293420670">+91 7293420670</Link>
            </div>
          </div>
          <div className="flex mr-2 mt-5 md:mt-1 ml-auto mr- md:mr-16 gap-8 text-lg cursor-pointer">
            <FaFacebookF />
            <FaTwitter />
            <RiInstagramFill />
          </div>
        </div>
        <div className=" bg-white flex items-center justify-between">
          <img
            className=" ml-2 md:ml-9 mb-4 md:mb-0"
            src={img}
            alt="logo"
            style={{ width: "130px", height: "65px" }}
          />

          <ul
            className=" hidden md:flex ml-2  md:ml-auto md:gap-10 mr-4 md:mr-16 text-black font-semibold mt-2 md:mt-0 text-lg"
            onClick={closeNavbar}
          >
            <li className="hover:text-orange-500">
              <Link to="/home">Home</Link>
            </li>
            <li className="hover:text-orange-500">
              <Link to="/aboutus">About Us</Link>
            </li>
            <li className="hover:text-orange-500">
              <Link to="/services">Services</Link>
            </li>
            <li className="hover:text-orange-500">
              <Link to="/team">The Team</Link>
            </li>
            <li className="hover:text-orange-500">
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
          <div className=" mr-2 lg:hidden md:flex flex-col justify-end ">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      <div className="pt-24">
        {mobileDrawerOpen && (
          <div className="fixed top-20 text-white right-0 z-20 text-xl font-bold text-black bg-gradient-to-r from-orange-500 to-red-800 h-[450px] flex flex-col justify-center items-center w-[300px] transition-all duration-800 lg:hidden">
            <ul onClick={closeNavbar}>
              <li className="mt-10 ml-2">
                <Link to="/home">Home</Link>
              </li>
              <li className="mt-10 ml-2">
                <Link to="/aboutus">About Us</Link>
              </li>
              <li className="mt-10 ml-2">
                <Link to="/services">Services</Link>
              </li>
              <li className="mt-10 ml-2">
                <Link to="/team">The Team</Link>
              </li>
              <li className="mt-10 ml-2">
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Nav;
