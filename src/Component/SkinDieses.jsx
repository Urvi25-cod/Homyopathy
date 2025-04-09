import React from 'react';
import d5 from '../images/d5.png';


const SkinDieses = () => {

  const diseases = [
    {
      name: "Eczema (Atopic Dermatitis)",
      symptoms: "Dry skin, itching, redness, swelling, crusting, and oozing.",
      benefits:
        "Reduce inflammation and itching, alleviate symptoms, reduce frequency of flare-ups, and improve overall skin health.",
    },
    {
      name: "Psoriasis",
      symptoms: "Red, scaly patches on the skin, itching, burning, and stinging.",
      benefits:
        "Reduce scaling and inflammation, alleviate symptoms, reduce frequency of flare-ups, and improve overall skin health.",
    },
    {
      name: "Acne",
      symptoms: "Pimples, blackheads, whiteheads, oily skin, and scarring.",
      benefits:
        "Reduce inflammation and prevent scarring, alleviate symptoms, reduce frequency of breakouts, and improve overall skin health.",
    },
    {
      name: "Rosacea",
      symptoms: "Redness, flushing, pimples, and visible blood vessels.",
      benefits:
        "Reduce redness and inflammation, alleviate symptoms, reduce frequency of flare-ups, and improve overall skin health.",
    },
    {
      name: "Vitiligo",
      symptoms: "White patches on the skin due to pigment loss.",
      benefits:
        "Restore skin pigmentation, reduce white patches, and improve overall skin health.",
    },
    {
      name: "Lichen Planus",
      symptoms: "Itchy, flat, and purple skin lesions; oral ulcers.",
      benefits:
        "Reduce inflammation and itching, alleviate symptoms, reduce frequency of flare-ups, and improve overall skin health.",
    },
    {
      name: "Dermatitis",
      symptoms: "Redness, itching, dryness, and crusting.",
      benefits:
        "Soothe and calm the skin, alleviate symptoms, reduce frequency of flare-ups, and improve overall skin health.",
    },
    {
      name: "Urticaria (Hives)",
      symptoms: "Itchy, raised red skin lesions; swelling.",
      benefits:
        "Reduce itching and inflammation, alleviate symptoms, reduce frequency of flare-ups, and improve overall skin health.",
    },
    {
      name: "Herpes Simplex",
      symptoms: "Painful blisters and sores; itching and burning.",
      benefits:
        "Reduce pain and inflammation, alleviate symptoms, reduce frequency of outbreaks, and improve overall skin health.",
    },
    {
      name: "Warts",
      symptoms: "Small, rough hardened skin growths; itching and discomfort.",
      benefits:
        "Reduce wart growths, alleviate symptoms, and improve overall skin health.",
    },
  ];
  
  return (
    <>
      <div className="bg-white py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading and Description */}
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
              Skin diseases treatment
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-2 text-justify sm:text-center max-w-3xl mx-auto">
              Homeopathy offers various treatments for skin diseases based on the principle of treating the individual as a whole, rather than just the symptoms. The remedies are chosen based on the person's constitution, lifestyle,
              and the specific characteristics of the skin condition. Here are some common skin conditions and their homeopathic treatments:
            </p>
          </div>

          {/* Banner */}
          <div
            className="relative bg-[#A5487D] rounded-3xl flex flex-col sm:flex-row items-center justify-between shadow-md px-4 sm:px-8 py-8 sm:py-12 md:py-16"
          >
            {/* Background Image */}
            <div className="absolute inset-0 opacity-30 rounded-3xl overflow-hidden">
              <img
                src={d5}
                alt="Background"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 text-center sm:text-left mb-4 sm:mb-0">
              <h2 className="text-xl sm:text-2xl font-bold text-white">Start Now Your</h2>
              <p className="text-lg sm:text-xl text-white">Consult Your Health</p>
            </div>

            {/* Right Side: Buttons */}
            <div className="relative z-10 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
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

          <h1 className="text-2xl md:text-3xl font-semibold text-center mb-6 mt-5">
            Skin Diseases & Benefits of Treatment
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {diseases.map((disease) => (
              <div
                key={disease.name}
                className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <h2 className="text-xl font-semibold text-gray-500  mb-2">
                  {disease.name}
                </h2>
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold">Symptoms:</span> {disease.symptoms}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Benefits of Treatment:</span>{" "}
                  {disease.benefits}
                </p>
              </div>
            ))}
          </div>


        </div>
      </div>

    </>
  );
};

export default SkinDieses;