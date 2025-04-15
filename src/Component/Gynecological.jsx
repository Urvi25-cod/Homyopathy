import React from 'react';
import d5 from '../images/d5.png';

function Gynecological() {
  return (
    <>
    
    <div className="bg-white py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          {/* Heading and Description */}
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">
            Gynecological
            </h2>
            <p className="text-gray-600 mt-2 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
            Homeopathy is a natural, holistic system of medicine that offers effective treatment for various gynecological concerns. 
            By stimulating the body's own healing mechanisms, homeopathy addresses both physical and emotional well-being, ensuring safe and lasting results.
            </p>
          </div>

          {/* Banner */}
          <div
            className="container mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 rounded-3xl flex flex-col sm:flex-row items-center justify-between shadow-md relative"
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
            <div className="relative z-10 text-center sm:text-left mb-4 sm:mb-0 w-full sm:w-auto">
              <h2 className="text-xl sm:text-2xl font-bold text-white">Start Now Your</h2>
              <p className="text-lg sm:text-xl text-white">Consult Your Health</p>
            </div>

            {/* Right Side: Buttons */}
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
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
    <div className="container mx-auto p-4">
      <div className="bg-white  rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Homeopathy for Gynecological Health</h1>
        <p className="mb-4">
          Homeopathy is a natural, holistic system of medicine that offers effective treatment for various gynecological concerns. By stimulating the body's own healing mechanisms, homeopathy addresses both physical and emotional well-being, ensuring safe and lasting results.
        </p>

        <h2 className="text-xl font-semibold mb-3">Common Gynecological Conditions Treated with Homeopathy</h2>
        
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">PCOS (Polycystic Ovary Syndrome)</h3>
          <ul className="list-disc ml-5">
            <li>Restoring hormonal balance to improve menstrual regularity.</li>
            <li>Reducing symptoms such as bloating, mood swings, and fatigue.</li>
            <li>Supporting weight management by improving metabolism.</li>
            <li>Addressing emotional stress, anxiety, and irritability.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">Menstrual Disorders</h3>
          <p>Homeopathy helps regulate cycles, ease pain, and control excessive bleeding by addressing the underlying hormonal imbalances and emotional stress that contribute to these issues.</p>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">Menopause Support</h3>
          <p>Homeopathy offers natural solutions that ease discomforts like hot flashes, mood swings, fatigue, and sleep disturbances during menopause.</p>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">Vaginal Infections and Discomfort</h3>
          <p>Conditions like vaginal itching, abnormal discharge, and candidiasis can be treated with homeopathic remedies to restore the body's natural balance.</p>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">Fibroids and Ovarian Cysts</h3>
          <p>Homeopathy focuses on shrinking fibroids and cysts naturally by improving hormonal balance and strengthening the body's healing process.</p>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">Pregnancy and Postpartum Care</h3>
          <p>From easing labor pains to supporting emotional stability post-delivery, homeopathy offers gentle remedies for a smoother pregnancy journey and faster postpartum recovery.</p>
        </div>

        <h2 className="text-xl font-semibold mb-3">Benefits of Homeopathy for Women's Health</h2>
        <ul className="list-disc ml-5 mb-6">
          <li><strong>Safe and Gentle Treatment:</strong> Non-toxic remedies suitable for all life stages, including pregnancy and breastfeeding.</li>
          <li><strong>Hormonal Balance:</strong> Addresses the root cause of hormonal imbalances for lasting results.</li>
          <li><strong>Minimal Side Effects:</strong> Rarely causes side effects, making it ideal for natural solutions.</li>
        </ul>

        <h2 className="text-xl font-semibold mb-3">Conclusion</h2>
        <p>Homeopathy provides a safe, natural, and personalized approach to gynecological health. By addressing both the body and mind, homeopathy empowers women to achieve lasting wellness and hormonal balance.</p>
      </div>
    </div>
    </>
  );
}

export default Gynecological;
