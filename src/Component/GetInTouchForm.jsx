import React from "react";

const GetInTouchForm = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Section */}
        <div className="md:w-2/3">
          {/* Tabs */}
          <div className="flex border-b border-gray-300">
            {['Overview', 'Causes', 'Symptoms', 'Homeopathic Treatment', 'FAQs'].map((tab, index) => (
              <button
                key={index}
                className={`px-4 py-2 border-r last:border-r-0 ${index === 0 ? 'bg-purple-700 text-white' : 'bg-gray-100'}`}
              >
                {tab}
              </button>
            ))}
          </div>
          {/* Content */}
          <div className="mt-4">
            <h2 className="font-bold text-lg">Overview of Hair Growth Treatment</h2>
            <p className="text-gray-600 mt-2">
              Hair growth treatment focuses on revitalizing the scalp, strengthening hair follicles,
              and promoting natural regrowth. Various factors such as stress, hormonal imbalances,
              nutritional deficiencies, and genetics contribute to hair loss, thinning, and premature graying.
            </p>
            <p className="text-gray-600 mt-2">
              Homeopathic remedies stimulate hair follicles, improve blood circulation, and restore the body's
              natural balance to encourage healthy hair growth. These treatments target the root cause of hair loss
              rather than just the symptoms, ensuring long-lasting results.
            </p>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="md:w-1/3 border p-6 rounded-lg shadow-lg bg-white">
          <h3 className="font-bold text-lg text-center">Get In Touch</h3>
          <form className="mt-4 space-y-4">
            <input type="text" placeholder="Full Name" className="w-full p-2 border rounded" />
            <input type="tel" placeholder="Phone Number" className="w-full p-2 border rounded" />
            <input type="date" className="w-full p-2 border rounded" />
            <textarea placeholder="Message" className="w-full p-2 border rounded" rows="3"></textarea>
            <button className="w-full bg-purple-700 text-white p-2 rounded">Book an appointment</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetInTouchForm;
