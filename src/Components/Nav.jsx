import { Link } from "react-router-dom";
import { HiOutlineMailOpen } from "react-icons/hi";
import { MdPhone } from "react-icons/md";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import img from "../assets/Logo.jpg";

const Nav = () => {
  return (
    <>
      <div>
        <nav>
          <div className="flex  bg-orange-500 py-2 gap-2 md:gap-10 ">
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
            <div className="flex  ml-auto mr- md:mr-10 gap-8 text-lg">
              <FaFacebookF />
              <FaTwitter />
              <RiInstagramFill />
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between">
            <img
              className="ml-2 mb-4 md:mb-0"
              src={img}
              alt="logo"
              style={{ width: "130px", height: "70px" }}
            />

            <ul className="flex ml-2  md:ml-auto md:gap-10 mr-4 md:mr-16 text-black font-semibold mt-2 md:mt-0">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="#">About Us</Link>
              </li>
              <li>
                <Link to="#">Services</Link>
              </li>
              <li>
                <Link to="#">The Team</Link>
              </li>
              <li>
                <Link to="#">Contact Us</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Nav;
