import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHeart,
    faUser, // Replace with Dermatology icon if you have one
    faRunning, // Replace with Physiotherapy icon if you have one
    faBone // Replace with Orthopaedics icon if you have one
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faHeart, faUser, faRunning, faBone); // Add the icons to the library

function ServicesSection() {
    return (
        <div className="bg-white py-12">
            <div className="container mx-auto px-4">
                {/* Heading Section */}
                <div className="text-center mb-10">
                    <p className="text-purple-500 uppercase font-semibold tracking-wider">Services & Specialties</p>
                    <h2 className="text-3xl font-bold text-gray-800">
                        Comprehensive Health Care Services Tailored To Your Needs
                    </h2>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Cardiology */}
                    <div className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                        <div className="text-5xl text-gray-700 mb-4">
                            <FontAwesomeIcon icon="heart" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Cardiology</h3>
                        <p className="text-gray-600 text-sm">
                            Branch of medicine that concerns diseases and disorders of the heart.
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
                            <FontAwesomeIcon icon="running" />  {/* Replace with Physiotherapy icon */}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Physiotherapy</h3>
                        <p className="text-gray-600 text-sm">
                            Treatment to restore, maintain, and make the most of a patient's mobility.
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
    );
}

export default ServicesSection;
