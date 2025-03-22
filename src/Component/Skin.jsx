import React from 'react';
import d5 from '../images/d5.png';
import Skin1 from './Skin1';

const Skin = () => {
  return (
    <>
      <div className="bg-white py-20">
        <div className="container mx-auto px-4 md:px-8">
          {/* Heading and Description */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
              Skin Treatment
            </h2>
            <p className="text-gray-600 mt-2 text-sm md:text-base">
              Skin treatments can cause a variety of symptoms, depending on the type of treatment, the individual's skin type, and any underlying conditions. Below is a detailed breakdown of symptoms based on different categories of skin treatments:
            </p>
          </div>

          {/* Banner */}
          <div
            className="container mx-auto px-4 md:px-8 py-8 md:py-14 rounded-xl md:rounded-3xl flex flex-col md:flex-row items-center justify-between shadow-md relative"
            style={{ backgroundColor: '#A5487D' }}
          >
            {/* Background Image */}
            <div className="absolute inset-0 opacity-30">
              <img
                src={d5}
                alt=""
                className="w-full h-full object-cover"
               
              />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 text-center md:text-left mb-4 md:mb-0">
              <h2 className="text-xl md:text-2xl font-bold text-white">
                Start Now Your
              </h2>
              <p className="text-lg md:text-xl text-white">Consult Your Health</p>
            </div>

            {/* Right Side: Buttons */}
            <div className="flex flex-col md:flex-row space-y-4 md:space-x-4">
              <button
                className="bg-white text-[#A5487D] font-bold py-2 px-6 rounded-full hover:bg-gray-100 hover:text-[#A5487D] w-full md:w-auto"
              >
                Book Consultation
              </button>
              <button className="bg-white text-[#A5487D] font-bold py-2 px-6 rounded-full hover:bg-gray-100 hover:text-[#A5487D] w-full md:w-auto">
                Book An Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
      <Skin1 />
    </>
  );
};

export default Skin;

