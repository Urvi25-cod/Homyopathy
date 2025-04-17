import React from 'react';
import d5 from '../images/d5.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faHeart,
    faUser, // Replace with Dermatology icon if you have one
    faRunning, // Replace with Physiotherapy icon if you have one
    faBone, // Replace with Orthopaedics icon if you have one
    faPhone,
    faCheck,
} from '@fortawesome/free-solid-svg-icons';
import p1 from '../images/p1.png';
import OurHappyClients from './OurHappyClients';
import women from '../images/women.png';
import n3 from '../images/n3.png';
import n4 from '../images/n4.png';


library.add(faPhone, faHeart, faUser, faRunning, faBone, faCheck);

function Home() {
    return (
        <>
            <div>
                <div className="bg-[#D9D9D9]">
                    <div className="container mx-auto py-15  px-5 flex flex-col md:flex-row items-center">
                        {/* Left Side: Text Content */}
                        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                            <p className="text-purple-500 font-semibold mb-2">
                                <span className="mr-1">❤️</span> Your Health, Our Priority
                            </p>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                                Comprehensive Medical Care Tailored To You.
                            </h1>
                            <p className="text-gray-600 mb-6">
                                Welcome, I am Dedicated To Providing Personalized And Compassionate Healthcare.
                            </p>
                            <button className="bg-[#A5487D] text-white font-bold py-3 px-8 rounded-full">
                                Book An Appointment
                            </button>
                        </div>

                        {/* Right Side: Doctor Image */}
                        <div className="md:w-1/2">
                            <img src={women} alt="Doctor" className=" w-full h-auto object-cover" />
                             <p className="md:text-xl lg:text-3xl text-[#A5487D]  font-semibold mt-3 flex justify-center"> BHMS  M.D ( Pursuing)  </p>   
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className="bg-white">
                        <div className="mx-auto text-center">
                            {/* Stats */}


                            {/* Emergency Call Section */}
                            <div className="bg-[#A5487D] text-white py-12 px-12  flex flex-col items-center justify-center">
                                <h2 className="text-xl font-semibold">Emergency Call</h2>
                                <br></br>
                                <p className="flex items-center text-xl">
                                    <FontAwesomeIcon icon={faPhone} className="mr-2" />
                                    +91 97262 37092
                                </p>
                                <br></br>
                                <p className="text-xl">You Are About To Initiate An Emergency Call, Confirm To Proceed.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white py-12">
                    <div className="container mx-auto px-4">
                        {/* Heading Section */}
                        <div className="mb-10">
                            <p className=" text-2xl text-[#A5487D] uppercase font-bold tracking-wider">Services & Specialties</p>
                            <br></br>
                            <h2 className="text-4xl font-bold text-gray-800 ">
                                Comprehensive Health Care
                            </h2>
                            {/* <h2 className='"text-3xl font-bold text-gray-800 '> Services Tailored To Your Needs</h2> */}
                            <h2 className="text-4xl font-bold text-gray-800 mt-2">
                                Services Tailored To Your Needs
                            </h2>
                        </div>


                        {/* Services Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {/* Cardiology */}
                            <div className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                                <div className="text-5xl text-gray-700 mb-4">
                                    {/* <FontAwesomeIcon icon="heart" /> */}
                                    <img src={n4} className='w-15 h-15 '></img>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">stomach troubles</h3>
                                <p className="text-gray-600 text-sm">
                                Conditions concerned with gastric troubles.
                                </p>
                            </div>

                            {/* Dermatology */}
                            <div className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                                <div className="text-5xl text-gray-700 mb-4">
                                    <FontAwesomeIcon icon="user" />  {/* Replace with Dermatology icon */}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Dermatology</h3>
                                <p className="text-gray-600 text-sm">
                                    Branch of medicine that studies the skin and parts related to the skin.
                                </p>
                            </div>

                            {/* Physiotherapy */}
                            <div className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                                <div className="text-5xl text-gray-700 mb-4">
                                    {/* <FontAwesomeIcon icon="running" />  Replace with Physiotherapy icon */}
                                    <img src={n3} className='w-15 h-15 '></img>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Gynaecology </h3>
                                <p className="text-gray-600 text-sm">
                                Homeopathy is a natural, holistic system of medicine that offers effective treatment for various gynecological concerns.
                                </p>
                            </div>

                            {/* Orthopaedics */}
                            <div className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                                <div className="text-5xl text-gray-700 mb-4">
                                    <FontAwesomeIcon icon="bone" />  {/* Replace with Orthopaedics icon */}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Orthopaedics</h3>
                                <p className="text-gray-600 text-sm">
                                    Broad based medical and surgical specialty dedicated to the prevention, diagnosis.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-16">
                    {/* Heading */}
                    <div className="text-center mb-8 sm:mb-12">
                        <p className="text-[#A5487D] text-xl sm:text-2xl uppercase font-semibold tracking-wider">
                            Why Choose Us
                        </p>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-2">
                            Our Commitment <span className="block sm:inline">To Healing</span>
                        </h2>
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        {/* Image Section */}
                        <div className="md:w-1/2 flex justify-center">
                            <div className="relative w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] mx-auto">
                                {/* Main Image */}
                                <img
                                    src={p1}
                                    alt="Offshore Oil Rig"
                                    className="w-full rounded-lg shadow-md shadow-gray-900/80"
                                />
                                {/* Overlay Image */}
                                {/* <img
                                    src={p2}
                                    alt="Cargo Ship"
                                    className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-[40%] sm:w-[150px] md:w-[180px] lg:w-[200px] top-[65%] sm:top-[60%] rounded-lg shadow-md shadow-gray-900/90"
                                /> */}
                            </div>
                        </div>

                        {/* Text & List Section */}
                        <div className="md:w-1/2 px-4 sm:px-0">
                            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 text-center md:text-left">
                                Your Health Is Our Priority. Explore Our Services And Find The Care You Need.
                            </h3>
                            <p className="text-gray-600 text-sm sm:text-base mb-6 text-center md:text-left">
                                Discover the heart of our clinic, where Dedicated professionals work together
                                to provide exceptional healthcare services with compassion and expertise.
                            </p>

                            {/* List of Benefits */}
                            <ul className="space-y-3">
                                
                                <li className="flex items-center">
                                    <FontAwesomeIcon icon="check" className="text-purple-500 mr-2" />
                                    <p className="text-gray-700 text-sm sm:text-base">We are committed to providing healthcare service</p>
                                </li>
                                <li className="flex items-center">
                                    <FontAwesomeIcon icon="check" className="text-purple-500 mr-2" />
                                    <p className="text-gray-700 text-sm sm:text-base">Really know the true needs and expectations of patients</p>
                                </li>
                                <li className="flex items-center">
                                    <FontAwesomeIcon icon="check" className="text-purple-500 mr-2" />
                                    <p className="text-gray-700 text-sm sm:text-base">Quality</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


                <OurHappyClients />

                <div
                    className="container mx-auto px-12 py-24 md:py-14 rounded-3xl flex flex-col md:flex-row items-center justify-between shadow-md relative"
                    style={{ backgroundColor: '#A5487D' }} // Consistent background color
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
                        <h2 className="text-2xl font-bold text-white">Start Now Your</h2>
                        <p className="text-xl text-white">Consult Your Health</p>
                    </div>

                    {/* Right Side: Button */}
                    <div className="relative z-10">
                        <button
                            className="bg-white text-[#A5487D] font-bold py-2 px-6 rounded-full hover:bg-gray-100 hover:text-[#A5487D]"
                        >
                            Book Consultation
                        </button>
                    </div>
                </div>





            </div>
        </>
    );
}

export default Home;

