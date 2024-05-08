import { Link } from "react-router-dom";
import img from "../assets/Logo.jpg";

const scrollToTop = () => {
  animateScroll.scrollToTop({
    duration: 500,
    smooth: true,
  });
};

const handleMenuClick = () => {
  scrollToTop(); // Scroll to top before navigating to the section
};
const Footer = () => {
  return (
    <div>
      <div className="bg-gray-200 ">
      <footer class="bg-gray-900 md:mx-20 rounded-t-3xl">
        <div class="container px-6 py-8 mx-auto">
          <div class="flex flex-col items-center text-center">
            {/* <a href="#">
                <img class="w-auto h-7" src={img} alt=""/>
            </a> */}

            <p class="mt-5 text-l md:mt-6 text-center md:text-3xl font-extrabold text-white font-serif">
              Welcome to <span class="text-orange-500">SEAINDIA</span> Shipping,
              Clearing and Forwarding Agents
            </p>

            <div class="flex flex-col mt-4 sm:flex-row sm:items-center sm:justify-center">
              <Link to="/contact"onClick={handleMenuClick}>
                <button class="w-full px-5 py-2 text-sm md:text-lg tracking-wide text-white capitalize transition-colors duration-300 transform bg-orange-600 rounded-full sm:mx-2 sm:order-2 sm:w-auto hover:bg-white hover:text-black ">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </footer>
      </div>
      <footer className="bg-gray-800 text-white py-8 z-20">
        <div className="container mx-auto flex flex-col md:flex-row justify-between px-4">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">
              SEAINDIA Freight Systems Pvt. Ltd.
            </h3>
            <p className="text-sm">
              Old 309/310, II Floor, Linghi Chetty street
            </p>
            <p className="text-sm">Chennai 600 001, TN IN</p>
            <p className="text-sm">Contact: +91 44 2521 7261</p>
          </div>
          <div className="flex justify-center md:justify-end">
            <ul className="flex space-x-4">
              <li>
                <Link to="/aboutus" className="text-sm hover:text-gray-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-gray-400">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-gray-400">
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-sm hover:text-gray-400"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-4 text-center text-sm">
          <p>
            &copy; 2024 SEAINDIA Freight Systems Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
