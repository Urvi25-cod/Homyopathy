import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faBars, faTimes, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faCaretDown, faBars, faTimes, faChevronRight);

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHairDropdownOpen, setIsHairDropdownOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle("overflow-hidden");
    setIsHairDropdownOpen(false); // Close dropdown when menu toggles
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove("overflow-hidden");
    setIsHairDropdownOpen(false); // Close dropdown when closing menu
  };

  const toggleHairDropdown = () => {
    setIsHairDropdownOpen(!isHairDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav className="fixed top-25 right-50 bg-white shadow-xl md:rounded-full w-full z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-purple-600">
            BrandName
          </Link>

          {/* Desktop Menu (lg screens) */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-purple-500">Home</Link>
            <Link to="/homeopathy" className="hover:text-purple-500">Homeopathy Treatment</Link>

            {/* Hair Treatment Dropdown */}
            <div className="relative group">
              <button className="flex items-center hover:text-purple-500">
                Hair Treatment
                <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-50">
                <div className="py-2">
                  {["HairGrowth", "HairLoss", "Male", "Femal", "Alopecia", "Dandruff", "SkinDieses"].map((route) => (
                    <Link key={route} to={`/${route}`} className="block px-4 py-2 text-sm hover:bg-purple-500 hover:text-white flex justify-between">
                      {route.replace(/([A-Z])/g, " $1").trim()} <FontAwesomeIcon icon={faChevronRight} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/Skin" className="hover:text-purple-500">Skin Treatment</Link>
            <Link to="/about" className="hover:text-purple-500">About</Link>
            <Link to="/contact" className="hover:text-purple-500">Contact</Link>
          </div>

          {/* Mobile Menu Button (smaller screens) */}
          <button className="md:hidden text-gray-600 hover:text-purple-600 focus:outline-none" onClick={toggleMenu}>
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar (visible on small screens) */}
      <div ref={mobileMenuRef} className={`fixed inset-y-0 right-0 w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        {/* Close Button */}
        <button className="absolute top-4 right-4 text-gray-600 hover:text-purple-600 focus:outline-none" onClick={closeMenu}>
          <FontAwesomeIcon icon={faTimes} className="text-2xl" />
        </button>

        <div className="flex flex-col items-start py-12 space-y-6 px-6">
          <Link to="/" className="hover:text-purple-500" onClick={closeMenu}>Home</Link>
          <Link to="/homeopathy" className="hover:text-purple-500" onClick={closeMenu}>Homeopathy Treatment</Link>

          {/* Mobile Hair Treatment Dropdown */}
          <button onClick={toggleHairDropdown} className="flex items-center hover:text-purple-500 focus:outline-none">
            Hair Treatment <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
          </button>
          {isHairDropdownOpen && (
            <div className="ml-4 space-y-2">
              {["HairGrowth", "HairLoss", "Male", "Femal", "Alopecia", "Dandruff", "SkinDieses"].map((route) => (
                <Link key={route} to={`/${route}`} className="block text-sm hover:text-purple-500" onClick={closeMenu}>
                  {route.replace(/([A-Z])/g, " $1").trim()}
                </Link>
              ))}
            </div>
          )}

          <Link to="/Skin" className="hover:text-purple-500" onClick={closeMenu}>Skin Treatment</Link>
          <Link to="/about" className="hover:text-purple-500" onClick={closeMenu}>About</Link>
          <Link to="/contact" className="hover:text-purple-500" onClick={closeMenu}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;



