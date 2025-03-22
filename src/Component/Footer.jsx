// import React from 'react';
// import logo from '../images/logo.png'; // Replace with your actual logo path
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faInstagram, faYoutube, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
// import { library } from '@fortawesome/fontawesome-svg-core';

// library.add(faFacebook, faInstagram, faYoutube, faLinkedin, faTwitter);

// function Footer() {
//   return (
//     <footer className="bg-white py-6">
//       <div className="px-4">
//         <div className="border-b border-gray-200 pb-4 mb-4">
//           <div className="flex items-center justify-between">
//             {/* Logo and Text */}
//             <div className="flex items-center">
//               <img src={logo} alt="Aura Homoeopathy Logo" className="h-30 w-auto mr-4" />
//             </div>

//             {/* Navigation Links */}
//             <div className="hidden md:flex space-x-6 text-gray-600">
//               <a href="/" className="hover:text-purple-500">Home</a>
//               <a href="/Abots" className="hover:text-purple-500">About</a>
//               <a href="ContactForm" className="hover:text-purple-500">Contact</a>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="flex items-center justify-between text-sm text-gray-500">
//           {/* Copyright Text */}
//           <div>
//             &copy; {new Date().getFullYear()} All rights reserved aura homeopathy | Terms and conditions apply!
//           </div>

//           {/* Social Icons */}
//           <div className="flex space-x-4">
//             <a href="#" className="text-gray-500 hover:text-purple-500">
//               <FontAwesomeIcon icon={faFacebook} size="lg" />
//             </a>
//             <a href="#" className="text-gray-500 hover:text-purple-500">
//               <FontAwesomeIcon icon={faInstagram} size="lg" />
//             </a>
//             <a href="#" className="text-gray-500 hover:text-purple-500">
//               <FontAwesomeIcon icon={faYoutube} size="lg" />
//             </a>
//             <a href="#" className="text-gray-500 hover:text-purple-500">
//               <FontAwesomeIcon icon={faLinkedin} size="lg" />
//             </a>
//             <a href="#" className="text-gray-500 hover:text-purple-500">
//               <FontAwesomeIcon icon={faTwitter} size="lg" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;


import React from 'react';
import logo from '../images/logo.png'; // Replace with your actual logo path
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faFacebook, faInstagram, faYoutube, faLinkedin, faTwitter);

function Footer() {
  return (
    <footer className="bg-white py-6">
      <div className="px-4 md:px-6 lg:px-8">
        <div className="border-b border-gray-200 pb-4 mb-4">
          <div className="flex flex-wrap items-center justify-between">
            {/* Logo and Text */}
            <div className="flex items-center w-full md:w-auto mb-4 md:mb-0">
              <img src={logo} alt="Aura Homoeopathy Logo" className="h-30 w-auto mr-4" />
            </div>

            {/* Navigation Links */}
            <div className="flex flex-wrap space-x-6 text-gray-600 w-full md:w-auto">
              <a href="/" className="hover:text-purple-500">Home</a>
              <a href="/About" className="hover:text-purple-500">About</a>
              <a href="/ContactForm" className="hover:text-purple-500">Contact</a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-wrap items-center justify-between text-sm text-gray-500">
          {/* Copyright Text */}
          <div className="w-full md:w-auto mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} All rights reserved aura homeopathy | Terms and conditions apply!
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 w-full md:w-auto justify-center md:justify-end">
            <a href="#" className="text-gray-500 hover:text-purple-500">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a href="#" className="text-gray-500 hover:text-purple-500">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a href="#" className="text-gray-500 hover:text-purple-500">
              <FontAwesomeIcon icon={faYoutube} size="lg" />
            </a>
            <a href="#" className="text-gray-500 hover:text-purple-500">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            <a href="#" className="text-gray-500 hover:text-purple-500">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
