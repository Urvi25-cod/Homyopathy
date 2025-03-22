// import React from 'react';
// import d5 from '../images/d5.png';
// import Alopecia1 from './Alopecia1';


// const Alopecia = () => {
//   return (
//     <>
//     <div className="bg-white py-20">
//       <div className="container mx-auto px-4">
//         {/* Heading and Description */}
//         <div className="text-center mb-8">
//           <h2 className="text-3xl font-semibold text-gray-800">
//             Alopecia
//           </h2>
//           <p className="text-gray-600 mt-2">
//           Alopecia is a condition that causes hair loss, which can be temporary or permanent. It occurs due to various factors, including genetics, autoimmune disorders, hormonal changes, or stress. The most common types include Alopecia Areata (patchy hair loss), Androgenetic Alopecia (male/female pattern baldness), and Telogen Effluvium (temporary shedding due to stress or illness).
//           </p>
//         </div>

//         {/* Banner */}
//         <div
//                             className="container mx-auto px-12 py-24 md:py-14 rounded-3xl flex flex-col md:flex-row items-center justify-between shadow-md relative"
//                             style={{ backgroundColor: '#A5487D' }} // Consistent background color
//                         >
//                             {/* Background Image */}
//                             <div className="absolute inset-0 opacity-30">
//                                 <img
//                                     src={d5}
//                                     alt=""
//                                     className="w-full h-full object-cover"
//                                 />
//                             </div>
        
//                             {/* Content Overlay */}
//                             <div className="relative z-10 text-center md:text-left mb-4 md:mb-0">
//                                 <h2 className="text-2xl font-bold text-white">Start Now Your</h2>
//                                 <p className="text-xl text-white">Consult Your Health</p>
//                             </div>
        
//                             {/* Right Side: Button */}
//                             <div className="flex space-x-4">
//                                 <button
//                                     className="bg-white text-[#A5487D] font-bold py-2 px-6 rounded-full hover:bg-gray-100 hover:text-[#A5487D]"
//                                 >
//                                     Book Consultation
//                                 </button>
//                                 <button className="bg-white text-[#A5487D] font-bold py-2 px-6 rounded-full hover:bg-gray-100 hover:text-[#A5487D]">
//                 Book An Appointment
//               </button>
//                             </div>
//                         </div>
//       </div>
//     </div>
//     <Alopecia1/>
//     </>
//   );
// };

// export default Alopecia;



import React from 'react';
import d5 from '../images/d5.png';
import Alopecia1 from './Alopecia1';

const Alopecia = () => {
  return (
    <>
      <div className="bg-white py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading and Description */}
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
              Alopecia
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-2 text-justify sm:text-center max-w-3xl mx-auto">
              Alopecia is a condition that causes hair loss, which can be temporary or permanent. It occurs due to various factors, including genetics, autoimmune disorders, hormonal changes, or stress. The most common types include Alopecia Areata (patchy hair loss), Androgenetic Alopecia (male/female pattern baldness), and Telogen Effluvium (temporary shedding due to stress or illness).
            </p>
          </div>

          {/* Banner */}
          <div
            className="relative bg-[#A5487D] rounded-3xl flex flex-col sm:flex-row items-center justify-between shadow-md px-4 sm:px-8 py-8 sm:py-12 md:py-16"
          >
            {/* Background Image */}
            <div className="absolute inset-0 opacity-30 rounded-3xl overflow-hidden">
              <img
                src={d5}
                alt="Background"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 text-center sm:text-left mb-4 sm:mb-0">
              <h2 className="text-xl sm:text-2xl font-bold text-white">Start Now Your</h2>
              <p className="text-lg sm:text-xl text-white">Consult Your Health</p>
            </div>

            {/* Right Side: Buttons */}
            <div className="relative z-10 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
              <button
                className="bg-white text-[#A5487D] font-bold py-2 px-4 sm:px-6 rounded-full hover:bg-gray-100 hover:text-[#A5487D] text-sm sm:text-base"
              >
                Book Consultation
              </button>
              <button
                className="bg-white text-[#A5487D] font-bold py-2 px-4 sm:px-6 rounded-full hover:bg-gray-100 hover:text-[#A5487D] text-sm sm:text-base"
              >
                Book An Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
      <Alopecia1 />
    </>
  );
};

export default Alopecia;
