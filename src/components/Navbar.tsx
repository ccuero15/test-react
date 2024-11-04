import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//import AOS from 'aos';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl">Logo</div>
        
        <div className="block lg:hidden">
          <button 
            onClick={toggleMenu} 
            className="text-white focus:outline-none"
            data-aos="fade-down" 
            data-aos-duration="500"
          >
            {isOpen ? '✖' : '☰'}
          </button>
        </div>

        <ul className={`flex-col lg:flex lg:flex-row lg:space-x-4 absolute lg:static bg-gray-800 w-full lg:w-auto transition-all duration-300 ease-in-out ${isOpen ? 'top-16' : 'top-[-200px]'}`}>
          <li data-aos="fade-down" data-aos-duration="500">
            <Link to="/" className="block text-white hover:text-gray-400 p-2">Home</Link>
          </li>
          <li data-aos="fade-down" data-aos-duration="600">
            <Link to="/evaluation" className="block text-white hover:text-gray-400 p-2">Evaluations</Link>
          </li>
          {/* <li data-aos="fade-down" data-aos-duration="700">
            <Link to="/services" className="block text-white hover:text-gray-400 p-2">Services</Link>
          </li>
          <li data-aos="fade-down" data-aos-duration="800">
            <Link to="/contact" className="block text-white hover:text-gray-400 p-2">Contact</Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
