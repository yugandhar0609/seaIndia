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
      <div>
        <nav>
          <div className="hidden md:flex  bg-orange-500 py-2 gap-2 md:gap-10 ">
            <div className="flex flex-wrap ml-2">
              <div className="flex ml-2 mb-2 md:mb-0 md:mx-10">
                <HiOutlineMailOpen className="mt-1 text-lg" />
                <h1 className="ml-1">info@seaindia.com</h1>
              </div>
              <div className="flex mb-2 ml-2 md:mb-0">
                <MdPhone className="mt-1 text-lg" />
                <h1 className="">+91 7342890780</h1>
              </div>
            </div>
            <div className="flex mr-2 mt-5 md:mt-1 ml-auto mr- md:mr-16 gap-8 text-lg">
              <FaFacebookF />
              <FaTwitter />
              <RiInstagramFill />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <img
              className="md:ml-9 mb-4 md:mb-0"
              src={img}
              alt="logo"
              style={{ width: "130px", height: "65px" }}
            />

            <ul
              className=" hidden md:flex ml-2  md:ml-auto md:gap-10 mr-4 md:mr-16 text-black font-semibold mt-2 md:mt-0 text-lg"
              OnClick={closeNavbar}
            >
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/aboutus">About Us</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/team">The Team</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
            <div className="lg:hidden md:flex flex-col justify-end">
              <button onClick={toggleNavbar}>
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {mobileDrawerOpen && (
            <div className="fixed right-0 z-20 bg-white  w-full  p-12 flex flex-col justify-center items-center  lg:hidden">
              <ul onClick={closeNavbar}>
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/aboutus">About Us</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/team">The Team</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </div>
    </>
  );
};

export default Nav;
