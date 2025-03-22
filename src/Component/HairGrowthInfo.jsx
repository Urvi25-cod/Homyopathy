import React from 'react';

function HairGrowthInfo() {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Content Area */}
        <div className="lg:pr-8">
          {/* Tab Navigation */}
          <div className="flex border-b">
            <button className="bg-purple-100 text-purple-700 py-2 px-4 font-semibold">Overview</button>
            <button className=" py-2 px-4 font-semibold hover:text-purple-700">Causes</button>
            <button className=" py-2 px-4 font-semibold hover:text-purple-700">Symptoms</button>
            <button className=" py-2 px-4 font-semibold hover:text-purple-700">Homeopathic Treatment</button>
            <button className=" py-2 px-4 font-semibold hover:text-purple-700">FAQs</button>
          </div>

          {/* Overview Content */}
          <div className="mt-4">
            <h2 className="text-2xl font-semibold">Overview of Hair Growth Treatment</h2>
            <p className="text-gray-700 mt-2">
              Hair growth treatment focuses on revitalizing the scalp, strengthening hair follicles, and promoting natural regrowth. Various factors such as stress, hormonal imbalances, nutritional deficiencies, and genetics contribute to hair loss, thinning, and premature graying. A holistic approach, including homeopathy, personalized nutrition, and scalp therapies, can effectively address these issues without harmful side effects.
            </p>
            <p className="text-gray-700 mt-2">
              Homeopathic remedies stimulate hair follicles, improve blood circulation, and restore the body's natural balance to encourage healthy hair growth. These treatments target the root cause of hair loss rather than just the symptoms, ensuring long-lasting results.
            </p>
            <p className="text-gray-700 mt-2">
              By using safe, natural solutions, hair growth treatment not only enhances hair thickness and strength but also improves overall scalp health. With a personalized and holistic approach, individuals can achieve fuller, healthier, and more vibrant hair.
            </p>
          </div>
        </div>

        {/* Get In Touch Form */}
        <div className="bg-gray-50 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Get In Touch</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
              <input type="text" id="fullName" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="First name" />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
              <div className="flex">
                <select className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-24">
                  <option>IND +91</option>
                  {/* Add more country codes as needed */}
                </select>
                <input type="tel" id="phone" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-2" placeholder="9999 999 999" />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">Select Date</label>
              <select id="date" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <option>December - 02 - 2022</option>
                {/* Add more dates as needed */}
              </select>
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
              <textarea id="message" rows="4" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
            </div>
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Book an Appointment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HairGrowthInfo;
