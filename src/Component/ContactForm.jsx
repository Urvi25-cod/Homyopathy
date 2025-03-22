// import React from 'react';
// import map from '../images/map.png';

// const ContactForm = () => {
//   return (
//     <div className="container mx-auto py-12 px-4">
//       {/* Heading */}
//       <h2 className="text-3xl font-semibold text-gray-800 text-center mb-2">
//         Get In Touch
//       </h2>
//       <p className="text-gray-600 text-center mb-8 mt-10">
//         Book an Appointment for hassle-free treatment.
//       </p>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
//         {/* Left Side: Contact Information */}
//         <div>
//           {/* Map (Placeholder) */}
//           <div className="mb-4">
//             {/* Replace this with your actual map component */}
//             <img
//               src={map}
//               alt="Location Map"
//               className="w-full rounded-lg"
//             />
//           </div>

//           {/* Address */}
//           <div className="bg-gray-50 rounded-lg shadow-md p-4 mb-4">
//             <div className="flex items-center mb-2">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6 text-purple-600 mr-2"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
//                 />
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                 />
//               </svg>
//               <h3 className="text-lg font-semibold text-gray-700">Address</h3>
//             </div>
//             <p className="text-gray-600">
//               A-604 Vama Apex, Althan Canal Road, Surat, 395017
//             </p>
//           </div>

//           {/* Timings */}
//           <div className="bg-gray-50 rounded-lg shadow-md p-4 mb-4">
//             <div className="flex items-center mb-2">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6 text-purple-600 mr-2"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
//                 />
//               </svg>
//               <h3 className="text-lg font-semibold text-gray-700">Timings</h3>
//             </div>
//             <p className="text-gray-600">
//               Monday - Saturday (9:00am to 5pm)
//             </p>
//             <p className="text-gray-600">Sunday (Closed)</p>
//           </div>

//           {/* Email Address */}
//           <div className="bg-gray-50 rounded-lg shadow-md p-4 mb-4">
//             <div className="flex items-center mb-2">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6 text-purple-600 mr-2"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M3 8l7.89 5.26a2 2 0 002.224 0L21 8m0 0l-8.999 5.999A2 2 0 0112 15a2 2 0 01-8.999-5.999L3 8m0 0l4.807-5.34a2 2 0 013.142 0l5.193 5.778A2 2 0 0119 13.172l2.393-2.66a2 2 0 01.858 0z"
//                 />
//               </svg>
//               <h3 className="text-lg font-semibold text-gray-700">
//                 Email Address
//               </h3>
//             </div>
//             <p className="text-gray-600">princyc415@gmail.com</p>
//           </div>

//           {/* Phone Number */}
//           <div className="bg-gray-50 rounded-lg shadow-md p-4">
//             <div className="flex items-center mb-2">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6 text-purple-600 mr-2"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l.715 2.383a1 1 0 00.948.684H19a2 2 0 012 2v11a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
//                 />
//               </svg>
//               <h3 className="text-lg font-semibold text-gray-700">
//                 Phone Number
//               </h3>
//             </div>
//             <p className="text-gray-600">+91 97262 37092</p>
//           </div>
//         </div>

//         {/* Right Side: Form */}
//         <div>
//           <div className="bg-gray-50 rounded-lg shadow-md p-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//               <div>
//                 <label
//                   htmlFor="firstName"
//                   className="block text-gray-700 text-sm font-bold mb-2"
//                 >
//                   First name
//                 </label>
//                 <input
//                   type="text"
//                   id="firstName"
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="lastName"
//                   className="block text-gray-700 text-sm font-bold mb-2"
//                 >
//                   Last name
//                 </label>
//                 <input
//                   type="text"
//                   id="lastName"
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 />
//               </div>
//             </div>

//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-gray-700 text-sm font-bold mb-2"
//               >
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
//               />
//             </div>

//             <div>
//               <label
//                 htmlFor="phoneNumber"
//                 className="block text-gray-700 text-sm font-bold mb-2"
//               >
//                 Phone number
//               </label>
//               <div className="flex">
//                 <select
//                   id="countryCode"
//                   className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
//                 >
//                   <option>IND +91</option>
//                   {/* Add more country codes as needed */}
//                 </select>
//                 <input
//                   type="tel"
//                   id="phoneNumber"
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 />
//               </div>
//               <label
//                 htmlFor="date"
//                 className="block text-gray-700 text-sm font-bold mb-2 mt-4"
//               >
//                 Select date
//               </label>

//               <input
//                 type="date"
//                 id="date"
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
//               />
//             </div>

//             <div>
//               <label
//                 htmlFor="message"
//                 className="block text-gray-700 text-sm font-bold mb-2"
//               >
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 rows="4"
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
//               ></textarea>
//             </div>

//             <button
//               className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//               type="button"
//             >
//               Book an appointment
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;


import React from 'react';
import map from '../images/map.png';
import {
  MapPinIcon,
  ClockIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";


const ContactForm = () => {
  return (
    <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <h2 className="text-3xl font-semibold text-gray-800 text-center mb-2">
        Get In Touch
      </h2>
      <p className="text-gray-600 text-center mb-8 mt-4">
        Book an Appointment for hassle-free treatment.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        {/* Left Side: Contact Information */}
        <div>
          {/* Map (Placeholder) */}
          <div className="mb-4">
            {/* Replace this with your actual map component */}
            <img
              src={map}
              alt="Location Map"
              className="w-full rounded-lg" // Added shadow for map
            />
          </div>

          {/* Address */}
          <div className="bg-gray-50 rounded-lg shadow-md p-4 mb-4">
            <div className="flex items-center mb-2">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-purple-600 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg> */}
              <MapPinIcon className="h-6 w-6 text-pink-500 mr-2" />
              <h3 className="text-lg font-semibold text-gray-700">Address</h3>
            </div>
            <p className="text-gray-600">
              A-604 Vama Apex, Althan Canal Road, Surat, 395017
            </p>
          </div>

          {/* Timings */}
          <div className="bg-gray-50 rounded-lg shadow-md p-4 mb-4">
            <div className="flex items-center mb-2">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-purple-600 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg> */}
               <ClockIcon className="h-6 w-6 text-pink-500 mr-2" />
              <h3 className="text-lg font-semibold text-gray-700">Timings</h3>
            </div>
            <p className="text-gray-600">
              Monday - Saturday (9:00am to 5pm)
            </p>
            <p className="text-gray-600">Sunday (Closed)</p>
          </div>

          {/* Email Address */}
          <div className="bg-gray-50 rounded-lg shadow-md p-4 mb-4">
            <div className="flex items-center mb-2">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-purple-600 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.224 0L21 8m0 0l-8.999 5.999A2 2 0 0112 15a2 2 0 01-8.999-5.999L3 8m0 0l4.807-5.34a2 2 0 013.142 0l5.193 5.778A2 2 0 0119 13.172l2.393-2.66a2 2 0 01.858 0z"
                />
              </svg> */}
               <EnvelopeIcon className="h-6 w-6 text-pink-500 mr-2" />
              <h3 className="text-lg font-semibold text-gray-700">
                Email Address
              </h3>
            </div>
            <p className="text-gray-600">princyc415@gmail.com</p>
          </div>

          {/* Phone Number */}
          <div className="bg-gray-50 rounded-lg shadow-md p-4">
            <div className="flex items-center mb-2">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-purple-600 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l.715 2.383a1 1 0 00.948.684H19a2 2 0 012 2v11a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
                />
              </svg> */}
               <PhoneIcon className="h-6 w-6 text-pink-500 mr-2" />
              <h3 className="text-lg font-semibold text-gray-700">
                Phone Number
              </h3>
            </div>
            <p className="text-gray-600">+91 97262 37092</p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div>
          <div className="bg-gray-50 rounded-lg shadow-md p-6 border border-pink-300 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  First name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Last name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
              />
            </div>

            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Phone number
              </label>
              <div className="flex">
                <select
                  id="countryCode"
                  className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
                >
                  <option>IND +91</option>
                  {/* Add more country codes as needed */}
                </select>
                <input
                  type="tel"
                  id="phoneNumber"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <label
                htmlFor="date"
                className="block text-gray-700 text-sm font-bold mb-2 mt-4"
              >
                Select date
              </label>

              <input
                type="date"
                id="date"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
              ></textarea>
            </div>

            <button
              className="bg-[#b05888] hover:bg-[#9d4d79] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" // Added w-full
              type="button"
            >
              Book an appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
