import React from 'react';
import Homeopathy from '../images/Homeopathy.png';
import women from '../images/women.png';
import d5 from '../images/d5.png';

const About = () => {
    return (
        <>
            <div className="container mx-auto py-20 px-4">
                {/* About Us Section */}
                <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
                    About Us
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    {/* Text Content */}
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                            Our Mission
                        </h3>
                        <p className="text-gray-600 mb-6 text-justify">
                            At Aura Homeopathy Clinic, people come first. We help each of our
                            patients achieve optimal wellness and health by using a whole-body
                            approach to healing. This means not just focusing on symptoms, but
                            addressing overall immunity, emotional well-being, lifestyle
                            balance, hormonal harmony, and the body's natural healing
                            ability. Great care and personalized treatment ensure that
                            everything we do supports long-term health and well-being.
                        </p>

                        <h3 className="text-2xl font-semibold text-gray-700 mb-4 text-justify">
                            More Than Anything Else, We Love Restoring Balance And Wellness
                            Naturally.
                        </h3>
                        <p className="text-gray-600 text-justify">
                            We work hard to stay up to date with the most advanced
                            homeopathic techniques and holistic approaches to ensure our
                            patients receive the best care possible. Our clinic utilizes
                            comprehensive case analysis and individualized treatment protocols
                            to address the root cause of ailments for long-term healing. This
                            enables precise and personalized remedies to be selected, ensuring
                            optimal results. Advanced homeopathic diagnostics assess overall
                            health, immune function, and lifestyle impact. We also
                            incorporate the best natural remedies for treating chronic and
                            acute conditions with precision. Dr. Princy is a strong advocate
                            for gentle, effective healing, ensuring minimal side effects and
                            long-lasting wellness.
                        </p>
                    </div>

                    {/* Image */}
                    <div className="relative">
                        <img
                            src={Homeopathy}
                            alt="Doctor at Aura Homeopathy Clinic"
                            className="rounded-lg shadow-md w-full object-cover aspect-square"
                        />
                        <button className="absolute top-4 right-4 bg-[#b05888] text-white font-bold py-2 px-4 rounded">
                            Book An Appointment
                        </button>
                    </div>
                </div>
            </div>

            {/* Meet Our Specialists Section */}
            <div className="container mx-auto py-12 px-4">
                <h2 className="text-3xl font-semibold text-gray-800 text-center mb-4">
                    Meet Our Specialists
                </h2>
                <p className="text-gray-600 text-center mb-8 ">
                    We use only the best quality materials on the market in order to
                    provide the best products to our patients.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    {/* Image */}
                    <div className="relative">
                        <img
                            src={women}
                            alt="Dr. Princy"
                            className="rounded-lg shadow-md  w-full h-[500px] object-cover aspect-square"
                        />
                    </div>

                    {/* Text Content */}
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                            DR. Princy
                        </h3>
                        <p className="text-gray-600 text-justify">
                            Dr. Princy provides expert homeopathic care at Aura Homeopathy
                            Clinic, offering natural and holistic treatments for a wide range
                            of health conditions. With extensive experience in homeopathy, she
                            specializes in personalized, gentle, and effective remedies for
                            chronic and acute ailments, including allergies, skin disorders,
                            respiratory issues, digestive problems, and lifestyle-related
                            diseases.
                        </p>
                        <p className="text-gray-600 mt-4 text-justify">
                            At Aura Homeopathy Clinic, Dr. Princy is committed to restoring
                            balance and well-being through safe, non-invasive treatments that
                            support the body's natural healing process.
                        </p>
                    </div>
                </div>
            </div>

            {/* Consultation Banner Section */}
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
                        className="bg-white text-[#A5487D]  font-bold py-2 px-6 rounded-full hover:bg-gray-100 hover:text-[#A5487D]"
                    >
                        Book Consultation
                    </button>
                </div>
            </div>

        </>
    );
};

export default About;

