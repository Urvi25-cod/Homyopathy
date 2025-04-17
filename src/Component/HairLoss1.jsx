import React, { useState } from 'react';
import { ChevronDown } from "lucide-react"

const HairLoss1 = () => {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [date, setDate] = useState("")
  const [message, setMessage] = useState("")
  const [countryCode, setCountryCode] = useState("IND")
  const [activeTab, setActiveTab] = useState('Overview');
  const [faqOpen, setFaqOpen] = useState([false, false, false]);


  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const toggleFaq = (index) => {
    const newFaqOpen = [...faqOpen];
    newFaqOpen[index] = !newFaqOpen[index];
    setFaqOpen(newFaqOpen);
  };
  const handleSubmit = e => {
    e.preventDefault()
    // Handle form submission logic here
    console.log({ name, phone, date, message, countryCode })
  }


  return (
    <div className="container mx-auto py-12 px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      {/* Left Section: Text Content */}
      <div>
        {/* Tab Navigation */}
        <div className="border border-[#9d4d79] mb-4">
          <div className="flex flex-wrap md:flex-nowrap w-full">
            {['Overview', 'Causes', 'Symptoms', 'Homeopathic Tratment', 'Faqs'].map((tab, index, arr) => (
              <button
                key={tab}
                className={`flex-1 px-4 py-2 md:px-6 lg:px-3 lg:py-2 md:py-3 font-semibold text-sm md:text-base border-[#9d4d79]
                ${index !== arr.length - 1 ? 'border-r border-b md:border-b-0  md:border-r' : ''} 
                ${activeTab === tab ? 'text-white bg-[#9d4d79]' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'Overview' && (
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Homeopathy for Hair Fall – A Natural Solution
            </h2>
            <div className="text-gray-600">
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Why Choose Homeopathy?</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li className="flex items-center">
                    🌿 <span className="ml-2">Safe & Gentle</span> – No side effects, suitable for all ages
                  </li>
                  <li className="flex items-center">
                    🔬 <span className="ml-2">Root Cause Treatment</span> – Balances hormones, reduces stress, and improves scalp health
                  </li>
                  <li className="flex items-center">
                    💆 <span className="ml-2">Personalized Care</span> – Tailored solutions based on your unique hair and health profile
                  </li>
                  <li className="flex items-center">
                    🧘 <span className="ml-2">Mind-Body Healing</span> – Encourages overall well-being for long-term hair health
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Our Natural Approach:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li className="flex items-center">
                    ✔ <span className="ml-2">Scalp & Hair Health Analysis</span> – Understanding the underlying causes
                  </li>
                  <li className="flex items-center">
                    ✔ <span className="ml-2">Homeopathic Scalp Therapies</span> – Strengthening hair from the roots
                  </li>
                  <li className="flex items-center">
                    ✔ <span className="ml-2">Customized Diet & Lifestyle Plans</span> – Nourishing hair from within
                  </li>
                  <li className="flex items-center">
                    ✔ <span className="ml-2">Stress Management Techniques</span> – Supporting hair growth naturally
                  </li>
                </ul>
              </div>

              <div className="mt-6">
                ✨ <span className="ml-2">Healthy Hair Starts from Within!</span> Book your consultation today!
              </div>
            </div>
          </div>

        )}

        {activeTab === 'Causes' && (
          <div className="text-gray-600">
            {/* Content for Causes tab */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Causes of Hair Loss treatment
            </h2>
            {/* <div className="mb-8">
                           

                        </div> */}
            <div className="container mx-auto py-8 px-4 max-w-3xl">
              {/* Causes of Hair Loss */}
              <section className="mb-8">
                
                {/* <ol className="list-decimal pl-5">
                  <li className="mb-2">
                    <span className="font-medium">Genetics</span> - Family history of baldness.
                  </li>
                  <li className="mb-2">
                    <span className="font-medium">Hormonal Changes</span> - Pregnancy, menopause, thyroid problems.
                  </li>
                  <li className="mb-2">
                    <span className="font-medium">Stress</span> - Emotional or physical stress can cause hair fall.
                  </li>
                  <li className="mb-2">
                    <span className="font-medium">Poor Diet</span> - Lack of vitamins (iron, biotin, protein).
                  </li>
                  <li className="mb-2">
                    <span className="font-medium">Medical Conditions</span> - Alopecia, scalp infections, or diseases.
                  </li>
                  <li className="mb-2">
                    <span className="font-medium">Medications</span> - Side effects of some drugs (e.g., chemotherapy).
                  </li>
                  <li>
                    <span className="font-medium">Hairstyling & Chemicals</span> - Excessive heat, dye, or tight hairstyles.
                  </li>
                </ol> */}
                <div className="">
                  

                  {/* Medical Conditions */}
                  <div className="p-6 bg-white">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Medical Conditions</h2>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Androgenetic alopecia: A common condition that causes hair loss due to hormonal imbalances.</li>
                      <li>Thyroid disorders: Both hypothyroidism and hyperthyroidism can cause hair loss.</li>
                      <li>Autoimmune diseases: Conditions like alopecia areata, lupus, and rheumatoid arthritis can cause hair loss.</li>
                      <li>Skin conditions: Conditions like eczema, psoriasis, and dermatitis can cause hair loss.</li>
                    </ul>
                  </div>

                  {/* Nutritional Deficiencies */}
                  <div className="p-6 bg-white">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Nutritional Deficiencies</h2>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Iron deficiency: Low iron levels can cause hair loss.</li>
                      <li>Vitamin D deficiency: Vitamin D plays a role in hair growth, and deficiency can lead to hair loss.</li>
                      <li>Protein deficiency: Lack of protein can cause hair loss.</li>
                      <li>Other nutritional deficiencies: Deficiencies in vitamins like biotin, vitamin B12, and omega-3 fatty acids can also contribute to hair loss.</li>
                    </ul>
                  </div>

                  {/* Lifestyle Factors */}
                  <div className="p-6 bg-white">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Lifestyle Factors</h2>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Stress: Physical or emotional stress can cause hair loss.</li>
                      <li>Hairstyling: Excessive heat styling, tight hairstyles, and harsh chemical treatments can damage hair and lead to hair loss.</li>
                      <li>Hair care: Using harsh hair care products or excessive shampooing can strip hair of its natural oils and lead to hair loss.</li>
                    </ul>
                  </div>

                  {/* Hormonal Changes */}
                  <div className="p-6 bg-white">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Hormonal Changes</h2>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Pregnancy and childbirth: Hormonal changes during pregnancy and after childbirth can cause hair loss.</li>
                      <li>Menopause: Hormonal changes during menopause can cause hair loss.</li>
                    </ul>
                  </div>

                  {/* Other Factors */}
                  <div className="p-6 bg-white">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Other Factors</h2>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Genetics: Family history can play a role in hair loss.</li>
                      <li>Aging: Hair loss is a natural part of aging.</li>
                      <li>Medications: Certain medications, such as those used to treat depression, high blood pressure, and cancer, can cause hair loss.</li>
                    </ul>
                  </div>
                </div>

              </section>

              {/* Simple Hair Loss Treatments */}
              {/* <section>
                <h2 className="text-xl font-semibold mb-4">Simple Hair Loss Treatments</h2>
                <ul className="list-disc pl-5">
                  <li className="mb-2">
                    <span className="font-medium">Eat a Healthy Diet</span> - Protein, iron, biotin-rich foods.
                  </li>
                  <li className="mb-2">
                    <span className="font-medium">Use Mild Shampoo & Oil</span> - Coconut, onion, or castor oil.
                  </li>
                  <li className="mb-2">
                    <span className="font-medium">Reduce Stress</span> - Yoga, meditation, and good sleep.
                  </li>
                  <li className="mb-2">
                    <span className="font-medium">Take Supplements</span> - Vitamin D, iron, and biotin.
                  </li>
                  <li className="mb-2">
                    <span className="font-medium">Try Medical Treatments</span> - Minoxidil, PRP therapy, or hair transplant (for severe cases).
                  </li>
                  <li>
                    <span className="font-medium">Avoid Harsh Chemicals</span> - Limit hair coloring and heat styling.
                  </li>
                </ul>
              </section> */}

              {/* Question at the Bottom */}
              {/* <p className="mt-8">
                Would you like specific solutions based on your hair type? <span className="text-xl">😊</span>
              </p> */}
            </div>
          </div>
        )}

        {activeTab === 'Symptoms' && (
          <div>
            {/* Content for Symptoms tab */}
            <div className="text-gray-600">
              {/* Content for Symptoms tab */}
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Symptoms of Hair Loss Problems
              </h2>
              <div className="mb-4">
                <p className="text-gray-700 mb-6 text-justify">Hair loss can happen gradually or suddenly, depending on the cause. Here are common signs to look for:</p>

                <ol className="list-decimal pl-6">
                  <li className="mb-4">
                    <h2 className="text-lg font-medium">Gradual Thinning of Hair</h2>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Hair becomes thinner, especially on the top of the head.</li>
                      <li>Common in both men and women as they age.</li>
                    </ul>
                  </li>

                  <li className="mb-4">
                    <h2 className="text-lg font-medium">Receding Hairline (For Men)</h2>
                    <ul className="list-disc pl-6 mt-2">
                      <li>The hairline moves backward, forming an "M" shape.</li>
                      <li>Common in male pattern baldness.</li>
                    </ul>
                  </li>

                  <li className="mb-4">
                    <h2 className="text-lg font-medium">Widening Part (For Women)</h2>
                    <ul className="list-disc pl-6 mt-2">
                      <li>The part in the middle of the hair becomes wider.</li>
                      <li>More noticeable when tying or styling hair.</li>
                    </ul>
                  </li>

                  <li className="mb-4">
                    <h2 className="text-lg font-medium">Excessive Hair Shedding</h2>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Losing more than 100 strands per day.</li>
                      <li>Hair falls out in the shower, pillow, or comb.</li>
                    </ul>
                  </li>

                  <li className="mb-4">
                    <h2 className="text-lg font-medium">Bald Spots or Patches</h2>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Small circular bald spots on the scalp or beard.</li>
                      <li>May indicate Alopecia Areata (an autoimmune disease).</li>
                    </ul>
                  </li>

                  <li>
                    <h2 className="text-lg font-medium">Weak, Brittle Hair</h2>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Hair breaks easily and looks dull.</li>
                      <li>Caused by heat, chemicals, or lack of nutrients.</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'Homeopathic Tratment' && (
          <div>
            {/* Content for Homeopathic Treatment tab */}
            <div className="text-gray-600">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Homeopathic Hair Loss Treatment</h2>
              {/* <div>
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <span className="mr-2">1.</span>
                    <span className="font-semibold">Thuja Occidentalis</span>
                  </div>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>Best for hair loss due to dandruff or scalp infections.</li>
                    <li>Helps with dry, frizzy hair and hair thinning.</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <span className="mr-2">2.</span>
                    <span className="font-semibold">Phosphorus</span>
                  </div>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>Useful for excessive hair fall with dandruff.</li>
                    <li>Works well if hair loss is due to stress or weakness.</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <span className="mr-2">3.</span>
                    <span className="font-semibold">Silicea</span>
                  </div>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>Strengthens weak, brittle hair.</li>
                    <li>Good for hair fall due to poor nutrition or weak immunity.</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <span className="mr-2">4.</span>
                    <span className="font-semibold">Lycopodium</span>
                  </div>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>Effective for hair loss due to hormonal imbalance.</li>
                    <li>Works well for women after pregnancy or menopause.</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <span className="mr-2">5.</span>
                    <span className="font-semibold">Natrum Muriaticum</span>
                  </div>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>Helps with hair loss caused by stress, grief, or emotional trauma.</li>
                    <li>Also good for oily scalp and dandruff-related hair fall.</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <span className="mr-2">6.</span>
                    <span className="font-semibold">Arnica Montana</span>
                  </div>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>Improves blood circulation to the scalp.</li>
                    <li>Prevents hair thinning and strengthens roots.</li>
                  </ul>
                </div>
              </div> */}
               <div className="text-gray-600 text-sm md:text-base">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3 md:mb-4">Homeopathic Hair Growth Treatment</h2>

              <ol className="list-decimal pl-4 md:pl-5">
                <li className="mb-3 md:mb-4 text-justify">
                  <span className="font-semibold">Homeopathic Hair Growth Treatment</span>
                  <p>Homeopathy offers a natural and holistic approach to hair regrowth by treating the underlying causes of hair loss. Personalized remedies strengthen hair from within, addressing hormonal imbalances, nutritional deficiencies, and scalp health. Homeopathic treatments promote long-term results without harmful side effects.</p>
                </li>
                <li className="mb-3 md:mb-4 text-justify">
                  <span className="font-semibold">Nutritional Support for Hair Growth</span>
                  <p>A well-balanced diet rich in protein, iron, biotin, and essential fatty acids can support healthy hair growth. Supplements may also help replenish nutrient deficiencies and improve hair texture, strength, and shine.</p>
                </li>
                <li className="mb-3 md:mb-4 text-justify">
                  <span className="font-semibold">Stress Management and Lifestyle Changes</span>
                  <p>Managing stress through meditation, yoga, exercise, and proper sleep can prevent stress-related hair loss. Reducing caffeine and alcohol intake can also improve scalp health and hair growth.</p>
                </li>
                <li className="mb-3 md:mb-4 text-justify">
                  <span className="font-semibold">Scalp Care and Hygiene</span>
                  <p>Keeping the scalp clean and well-moisturized is essential for preventing infections and buildup. Natural oils like coconut, castor, and rosemary oil can improve scalp circulation and stimulate hair follicles.</p>
                </li>
                <li className="mb-3 md:mb-4 text-justify">
                  <span className="font-semibold">Avoiding Harsh Chemical Treatments</span>
                  <p>Limiting the use of chemical-based hair products, heat styling, and tight hairstyles can protect hair from further damage. Switching to mild, sulfate-free shampoos and herbal conditioners can support hair strength and regrowth.</p>
                </li>
              </ol>

              <p className="mb-3 md:mb-4 text-justify">By addressing the root cause of hair loss and following a holistic treatment plan, individuals can achieve healthy, strong, and vibrant hair naturally.</p>
            </div>
            </div>
          </div>
        )}

        {activeTab === 'Faqs' && (
          <div>
            {/* Content for FAQs tab */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h2>

              <div className="space-y-4">
                {/* FAQ 1 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <button
                    className="flex items-center justify-between w-full p-4 bg-[#D8B4C8] text-white font-semibold"
                    onClick={() => toggleFaq(0)}
                  >
                    1. Why is my hair falling out so much?
                    <span className="text-2xl">{faqOpen[0] ? '-' : '+'}</span>
                  </button>
                  {faqOpen[0] && (
                    <div className="p-4">
                      <p className="text-gray-700">Hair loss can happen due to genetics, stress, hormonal changes, poor diet, medical conditions, or
                        excessive hairstyling. Identifying the cause helps find the right treatment.</p>
                    </div>
                  )}
                </div>

                {/* FAQ 2 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <button
                    className="flex items-center justify-between w-full p-4 bg-[#D8B4C8] text-white font-semibold"
                    onClick={() => toggleFaq(1)}
                  >
                    2. Is hair loss permanent?
                    <span className="text-2xl">{faqOpen[1] ? '-' : '+'}</span>
                  </button>
                  {faqOpen[1] && (
                    <div className="p-4">
                      <p className="text-gray-700">It depends on the cause. Genetic hair loss (male/female pattern baldness) is usually permanent, but hair loss due to stress, diet, or illness is often reversible with proper care.</p>
                    </div>
                  )}
                </div>

                {/* FAQ 3 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <button
                    className="flex items-center justify-between w-full p-4 bg-[#D8B4C8] text-white font-semibold"
                    onClick={() => toggleFaq(2)}
                  >
                    3. Can stress cause hair loss?
                    <span className="text-2xl">{faqOpen[2] ? '-' : '+'}</span>
                  </button>
                  {faqOpen[2] && (
                    <div className="p-4">
                      <p className="text-gray-700">Yes, excessive stress can trigger hair fall (telogen effluvium). Reducing stress through meditation,
                        exercise, and proper sleep can help.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Right Section: Contact Form */}
      <div className="max-w-md mx-auto p-6">
        <div className="border border-pink-300 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-center mb-6">Get In Touch</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 mb-2">
                Full name
              </label>
              <input
                type="text"
                id="name"
                placeholder="First name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-pink-400"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700 mb-2">
                Phone number
              </label>
              <div className="flex">
                <div className="relative">
                  <button
                    type="button"
                    className="flex items-center justify-between px-3 py-3 border border-gray-300 rounded-l-lg bg-white text-gray-700 focus:outline-none"
                  >
                    <span>{countryCode}</span>
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  <div className="hidden absolute top-full left-0 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
                    <div
                      className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => setCountryCode("IND")}
                    >
                      IND
                    </div>
                    <div
                      className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => setCountryCode("USA")}
                    >
                      USA
                    </div>
                    <div
                      className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => setCountryCode("UK")}
                    >
                      UK
                    </div>
                  </div>
                </div>
                <input
                  type="tel"
                  id="phone"
                  placeholder="+91 9999 999 999"
                  // className="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-1 focus:ring-pink-400"
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="date" className="block text-gray-700 mb-2">
                Select date
              </label>
              <div className="relative">
                <input
                  id="date"
                  type="date"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-pink-400 bg-white"
                  value={date}
                  onChange={e => setDate(e.target.value)}
                >

                </input>
                {/* <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <ChevronDown className="h-5 w-5 text-gray-500" />
              </div> */}
              </div>
            </div>
            {/* <div>
           <label className="block text-gray-700 mb-2 font-medium">
              Select date
            </label>
           <input
              type="date"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-pink-400"
              value={formData.date}
              onChange={(e) => setFormData({...formData, date: e.target.value})}
            />
          </div> */}

            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-pink-400"
                value={message}
                onChange={e => setMessage(e.target.value)}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#b05888] text-white py-3 px-4 rounded-lg hover:bg-[#9d4d79] transition-colors"
            >
              Book an appointment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HairLoss1;
