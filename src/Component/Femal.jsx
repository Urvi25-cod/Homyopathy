// import React from 'react';
// import d5 from '../images/d5.png';
// import Femal1 from './Femal1';



// const Femal = () => {
//     return (
//         <>
//             <div className="bg-white py-20">
//                 <div className="container mx-auto px-4">
//                     {/* Heading and Description */}
//                     <div className="text-center mb-8">
//                         <h2 className="text-3xl font-semibold text-gray-800">
//                         female Pattern Baldness
//                         </h2>
//                         <p className="text-gray-600 mt-2">
//                             Skin treatments can cause a variety of symptoms, depending on the type of treatment, the individual's skin type, and any underlying conditions. Below is a detailed breakdown of symptoms based on different categories of skin treatments:
//                         </p>
//                     </div>

//                     {/* Banner */}
//                     <div
//                                                className="container mx-auto px-12 py-24 md:py-14 rounded-3xl flex flex-col md:flex-row items-center justify-between shadow-md relative"
//                                                style={{ backgroundColor: '#A5487D' }} // Consistent background color
//                                            >
//                                                {/* Background Image */}
//                                                <div className="absolute inset-0 opacity-30">
//                                                    <img
//                                                        src={d5}
//                                                        alt=""
//                                                        className="w-full h-full object-cover"
//                                                    />
//                                                </div>
                           
//                                                {/* Content Overlay */}
//                                                <div className="relative z-10 text-center md:text-left mb-4 md:mb-0">
//                                                    <h2 className="text-2xl font-bold text-white">Start Now Your</h2>
//                                                    <p className="text-xl text-white">Consult Your Health</p>
//                                                </div>
                           
//                                                {/* Right Side: Button */}
//                                                <div className="flex space-x-4">
//                                                    <button
//                                                        className="bg-white text-[#A5487D] font-bold py-2 px-6 rounded-full hover:bg-gray-100 hover:text-[#A5487D]"
//                                                    >
//                                                        Book Consultation
//                                                    </button>
//                                                    <button className="bg-white text-[#A5487D] font-bold py-2 px-6 rounded-full hover:bg-gray-100 hover:text-[#A5487D]">
//                                    Book An Appointment
//                                  </button>
//                                                </div>
//                                            </div>
//                 </div>
//             </div>
//             <Femal1 />
//         </>
//     );
// };

// export default Femal;


import React from 'react';
import d5 from '../images/d5.png';
import Femal1 from './Femal1';

const Femal = () => {
    return (
        <>
            <div className="bg-white py-8 sm:py-12 md:py-16 lg:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Heading and Description */}
                    <div className="text-center mb-6 sm:mb-8">
                        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
                            Female Pattern Baldness
                        </h2>
                        <p className="text-sm sm:text-base text-gray-600 mt-2 text-justify sm:text-center max-w-3xl mx-auto">
                            Skin treatments can cause a variety of symptoms, depending on the type of treatment, the individual's skin type, and any underlying conditions. Below is a detailed breakdown of symptoms based on different categories of skin treatments:
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
            <Femal1 />
        </>
    );
};

export default Femal;
