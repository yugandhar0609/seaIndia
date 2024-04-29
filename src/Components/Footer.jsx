
import { Link } from "react-router-dom"
const Footer = () => {
  return (
    <div>
         <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between px-4">
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-bold mb-2">SEAINDIA Freight Systems Pvt. Ltd.</h3>
          <p className="text-sm">123 Shipping Lane, Ocean City</p>
          <p className="text-sm">Seaport, SEA 12345</p>
          <p className="text-sm">Contact: +1 (123) 456-7890</p>
        </div>
        <div className="flex justify-center md:justify-end">
          <ul className="flex space-x-4">
            <li><Link to="/about" className="text-sm hover:text-gray-400">About Us</Link></li>
            <li><Link to="/services" className="text-sm hover:text-gray-400">Services</Link></li>
            <li><Link to="/contact" className="text-sm hover:text-gray-400">Contact</Link></li>
            <li><Link to="/privacy-policy" className="text-sm hover:text-gray-400">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="mt-4 text-center text-sm">
        <p>&copy; 2024 SEAINDIA Freight Systems Pvt. Ltd. All rights reserved.</p>
      </div>
    </footer>
    </div>
  )
}

export default Footer

