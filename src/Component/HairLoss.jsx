import React from 'react';
import d5 from '../images/d5.png';
import HairLoss1 from './HairLoss1';

const HairLoss = () => {
  return (
    <>
      <div className="bg-white py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading and Description */}
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
              Hair Loss Treatment
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-2 text-justify sm:text-center max-w-3xl mx-auto">
              Hair loss treatments vary depending on the cause and severity of hair loss. Common options include medications like minoxidil, which is a topical solution that stimulates hair growth, and finasteride, an oral medication that helps prevent further hair loss
              by blocking the hormone responsible for hair thinning
            </p>
          </div>

          {/* Banner */}
          <div
            className="container mx-auto px-4 sm:px-8 py-8 sm:py-12 md:py-16 rounded-3xl flex flex-col sm:flex-row items-center justify-between shadow-md relative"
            style={{ backgroundColor: '#A5487D' }}
          >
            {/* Background Image */}
            <div className="absolute inset-0 opacity-30">
              <img
                src={d5}
                alt=""
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 text-center sm:text-left mb-4 sm:mb-0">
              <h2 className="text-xl sm:text-2xl font-bold text-white">Start Now Your</h2>
              <p className="text-lg sm:text-xl text-white">Consult Your Health</p>
            </div>

            {/* Right Side: Buttons */}
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
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
      <HairLoss1/>
    </>
  );
};

export default HairLoss;
