import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faStar);

const testimonials = [
    {
        name: 'Thomas daniel',
        rating: 4,  // Set the rating here
        testimonial:
            'Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources.',
        image: 'https://i.pravatar.cc/150?img=1', // Replace with your image URL
    },
    {
        name: 'Alena Alex',
        rating: 5,  // Set the rating here
        testimonial:
            'Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources.',
        image: 'https://i.pravatar.cc/150?img=2', // Replace with your image URL
    },
    {
        name: 'Thomas Edison',
        rating: 3,  // Set the rating here
        testimonial:
            'Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources.',
        image: 'https://i.pravatar.cc/150?img=3', // Replace with your image URL
    },
];

function OurHappyClients() {
    return (
        <div className="bg-white py-12">
            <div className="container mx-auto px-4">
                {/* Heading Section */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-800 mb-3">Our Happy Clients</h2>
                    <p className="text-gray-600">
                        We use only the best quality materials on the market in order to provide the best products to our
                        patients.
                    </p>
                    <p className="text-gray-600">order to provide the best products to our
                    patients.</p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center mb-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="rounded-full w-12 h-12 mr-4"
                                />
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <FontAwesomeIcon
                                                key={i}
                                                icon="star"
                                                className={`text-yellow-500 ${i < testimonial.rating ? '' : 'opacity-25'}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-600 text-sm">{testimonial.testimonial}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default OurHappyClients;
