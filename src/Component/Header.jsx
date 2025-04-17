import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faSearch, faCaretDown, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

library.add(faMapMarkerAlt, faPhone, faEnvelope, faSearch, faCaretDown, faBars, faTimes);

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);// toggel in mobile view

  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  const [isSearchOpen, setIsSearchOpen] = useState(false); // Saearch functions
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);// mobile saerch 
  const mobileMenuRef = useRef(null);

  return (
    <header className="relative">
      <div className="bg-white py-2 shadow-md">
        <div className="px-4 flex justify-between">
          {/* Logo */}
          <div className="flex items-center">
          <Link to="/"><img src={logo} alt="Aura Homoeopathy Logo" className="h-auto w-auto mr-4" /></Link>
          </div>

          {/* Contact Details - Shown only on large screens */}
          <div className="hidden lg:flex items-center space-x-6 ">
            <div className="flex  text-gray-700">
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              <p className="text-sm">+91 97262 37092</p>
            </div>
            <div className="flex  text-gray-700">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              <p className="text-sm">princyc415@gmail.com</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex items-center">
            {isSearchOpen && (
              <input
                type="text"
                placeholder="Search..."
                className="border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:border-purple-500 transition-all duration-300"
              />
            )}
            <button
              // className="ml-2 text-gray-500 hover:text-purple-500 focus:outline-none"
               className="ml-2 text-gray-500 hover:text-purple-500 focus:outline-none md:block hidden"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 hover:text-purple-600 focus:outline-none ml-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="absolute md:right-[3%] rounded-full lg:right-[15%] xl:right-[30%] bg-white shadow-md w-fit z-50 top-[75%]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="hidden md:flex justify-center items-center space-x-8 py-4">
            <Link to="/" className="hover:text-[#9d4d79]">Home</Link>
            <Link to="/Homeopathy" className="hover:text-[#9d4d79]">Homeopathy Treatment</Link>

            {/* Hair Treatment Dropdown - Desktop */}
            <div className="relative group">
              <button onClick={() => setIsDesktopDropdownOpen(!isDesktopDropdownOpen)} className="flex items-center hover:text-[#9d4d79]">
                Hair Treatment <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
              </button>

              {isDesktopDropdownOpen && (
                <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md z-50">
                  <Link to='/HairGrowth' className="block px-4 py-2 text-sm hover:bg-[#9d4d79] hover:text-white" onClick={() => setIsDesktopDropdownOpen(ture)}>Hair Growth Treatment</Link>
                  <Link to='/HairLoss' className="block px-4 py-2 text-sm hover:bg-[#9d4d79] hover:text-white" onClick={() => setIsDesktopDropdownOpen(ture)}>Hair Loss Treatment</Link>
                  <Link to='/Male' className="block px-4 py-2 text-sm hover:bg-[#9d4d79] hover:text-white" onClick={() => setIsDesktopDropdownOpen(ture)}>Male Pattern Baldness</Link>
                  <Link to='/Femal' className="block px-4 py-2 text-sm hover:bg-[#9d4d79] hover:text-white" onClick={() => setIsDesktopDropdownOpen(ture)}>Female Pattern Baldness</Link>
                  <Link to='/Alopecia' className="block px-4 py-2 text-sm hover:bg-[#9d4d79] hover:text-white" onClick={() => setIsDesktopDropdownOpen(ture)}>Alopecia</Link>
                  <Link to='/Dandruff' className="block px-4 py-2 text-sm hover:bg-[#9d4d79] hover:text-white" onClick={() => setIsDesktopDropdownOpen(ture)}>Dandruff Treatment</Link>
                  <Link to='/SkinDieses' className="block px-4 py-2 text-sm hover:bg-[#9d4d79] hover:text-white" onClick={() => setIsDesktopDropdownOpen(ture)}>Skin Disease </Link>
                   <Link to='/OtherDiseases' className="block px-4 py-2 over:bg-[#9d4d79] hover:text-white" onClick={() => setIsDesktopDropdownOpen(ture)}>Other Diseases </Link>
                </div>
              )}
            </div>

            <Link to="/Skin" className="hover:text-[#9d4d79]">Skin Treatment</Link>
            <Link to="/About" className="hover:text-[#9d4d79]">About</Link> 
            <Link to="/ContactForm" className="hover:text-[#9d4d79]">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div ref={mobileMenuRef} className={`fixed inset-y-0 right-0 w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        {/* Close Button */}
        
        <button
    className="flex items-center hover:text-purple-500 focus:outline-none mt-4 mx-4"
    onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
  >
    <FontAwesomeIcon icon={faSearch} className="mr-2" />
    Search
  </button>

  {isMobileSearchOpen && (
    <div className="mx-4 mt-2">
      <input
        type="text"
        placeholder="Search..."
        className="border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:border-purple-500 transition-all duration-300 w-full"
      />
    </div>
  )}
        <button className="absolute top-4 right-4 text-gray-600 hover:text-purple-600 focus:outline-none" onClick={() => setIsMenuOpen(false)}>
          <FontAwesomeIcon icon={faTimes} className="text-2xl" />
        </button>

        <div className="flex flex-col items-start py-12 space-y-6 px-6">
          <Link to="/" className="hover:text-purple-500" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/Homeopathy" className="hover:text-purple-500" onClick={() => setIsMenuOpen(false)}>Homeopathy Treatment</Link>

          {/* Mobile Hair Treatment Dropdown */}
          <button onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)} className="flex items-center hover:text-purple-500 focus:outline-none">
            Hair Treatment <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
          </button>

          {isMobileDropdownOpen && (
            <div className="ml-4 space-y-2">
              <Link to='/HairGrowth' className="block px-4 py-2 text-sm hover:bg-[#9d4d79] hover:text-white" onClick={() => setIsMenuOpen(false)}>Hair Growth Treatment</Link>
              <Link to='/HairLoss' className="block px-4 py-2 text-sm hover:bg-[#9d4d79] hover:text-white" onClick={() => setIsMenuOpen(false)}>Hair Loss Treatment</Link>
              <Link to='/Male' className="block px-4 py-2 text-sm hover:bg-[#9d4d79] hover:text-white" onClick={() => setIsMenuOpen(false)}>Male Pattern Baldness</Link>
              <Link to='/Femal' className="block px-4 py-2 text-sm hover:bg-[#9d4d79] hover:text-white" onClick={() => setIsMenuOpen(false)}>Female Pattern Baldness</Link>
              <Link to='/Alopecia' className="block px-4 py-2 text-sm hover:bg-[#9d4d79] hover:text-white" onClick={() => setIsMenuOpen(false)}>Alopecia</Link>
              <Link to='/Dandruff' className="block px-4 py-2 text-sm hover:bg-[#9d4d79] hover:text-white" onClick={() => setIsMenuOpen(false)}>Dandruff Treatment</Link>
              <Link to='/SkinDieses' className="block px-4 py-2 text-sm hover:bg-[#9d4d79] hover:text-white" onClick={() => setIsMenuOpen(false)}>Dandruff Treatment</Link>
            </div>
          )}

          <Link to="/Skin" className="hover:text-purple-500" onClick={() => setIsMenuOpen(false)}>Skin Treatment</Link>
          <Link to="/About" className="hover:text-purple-500" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link to="/ContactForm" className="hover:text-purple-500" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
