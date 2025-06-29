import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import logo from "../assets/Images/hearthy_logo.png";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Service', path: '/service' },
    { name: 'Training & Events', path: '/training' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleGetStartedClick = () => {
    setIsOpen(false);
    navigate('/contact');
  };

  const handleHomePage = () => {
    setIsOpen(false);
    navigate('/');
  };

  return (
<nav className="sticky top-[54px] z-[50] bg-[#F4F9F8] border-b border-gray-200 w-full h-[105px] lg:h-[140px] px-[5%] flex justify-between items-center">

      {/* Logo */}
      <div className="logo mt-2">
        <img 
          src={logo} 
          alt="logo"
          className='lg:w-[140px] md:w-[140px] w-[90px]'
          loading='lazy' 
          onClick={handleHomePage}
        />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-10">
        <ul className="flex gap-[25px] text-[17px]">
          {navItems.map((item) => 
            <li key={item.path} >
              <Link
                to={item.path}
                className={`${
                  location.pathname === item.path
                    ? 'font-bold text-primary'
                    : 'font-normal text-black/50'
                } hover:text-[#224d38] transition-colors`}
              >
                {item.name}
              </Link>
            </li>
          )}
        </ul>
        
        <button 
          onClick={handleGetStartedClick}
          className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-[#055f82] transition-colors"
        >
          Contact Us
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <button 
          onClick={toggleMenu} 
          className="text-3xl mt-4 text-[#1877F3] bg-transparent focus:outline-none hover:bg-transparent"
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ y: -500, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 25,
                bounce: 0.5
              }
            }}
            exit={{
              y: -500,
              opacity: 0,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 30,
                bounce: 0
              }
            }}
            className="fixed top-[145px] left-0 w-full bg-white shadow-lg z-50 p-6"
          >
            <ul className="flex flex-col gap-6 items-center">
              {navItems.map((item) => (
                <li key={item.path} className="w-full text-center">
                  <Link
                    to={item.path}
                    className={`block py-2 text-[17px] ${
                      location.pathname === item.path
                        ? 'font-bold text-primary'
                        : 'font-normal text-gray-700'
                    } hover:text-[#224d38] transition-colors`}
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 text-center">
              <button 
                onClick={handleGetStartedClick}
                className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-[#224d38] transition-colors w-full max-w-[200px]"
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;