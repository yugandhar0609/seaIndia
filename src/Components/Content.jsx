import React from "react";
import { Link } from "react-router-dom";


const Content = () => {
    const handleMenuClick = () => {
        scrollToTop(); // Scroll to top before navigating to the section
      };
      const scrollToTop = () => {
        animateScroll.scrollToTop({
          duration: 500,
          smooth: true,
        });
      };
  return (
    <div>
      <div className=" mt-6  md:mt-6  ">
        <footer class="bg-gray-900 md:mx-20 rounded-3xl">
          <div class="container px-6 py-8 mx-auto">
            <div class="flex flex-col items-center text-center">
              <p class="mt-5 text-l md:mt-6 text-center md:text-3xl font-extrabold text-white font-serif">
                Explore <span class="text-orange-500">SEAINDIA</span>{" "}
                Shipping, Clearing and Forwarding Agents
              </p>

              <div class="flex flex-col mt-4 sm:flex-row sm:items-center sm:justify-center">
                <Link to="/contact" onClick={handleMenuClick}>
                  <button class="w-full px-5 py-2 text-sm md:text-lg tracking-wide text-white capitalize transition-colors duration-300 transform bg-orange-600 rounded-full sm:mx-2 sm:order-2 sm:w-auto hover:bg-white hover:text-black ">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Content;
