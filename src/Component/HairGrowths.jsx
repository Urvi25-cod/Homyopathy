import React, { useState } from 'react';
import { ChevronDown } from "lucide-react";

const HairGrowths = () => {
  const [activeTab, setActiveTab] = useState('Overview');
  const [faqOpen, setFaqOpen] = useState([false, false, false]);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const [countryCode, setCountryCode] = useState("IND");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const toggleFaq = (index) => {
    const newFaqOpen = [...faqOpen];
    newFaqOpen[index] = !newFaqOpen[index];
    setFaqOpen(newFaqOpen);
  };
  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ name, phone, date, message, countryCode });
  };

  return (
    <div className="container mx-auto py-8 px-4 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-start">
      {/* Left Section: Text Content */}
      <div className="w-full">
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
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3 md:mb-4">
              Overview of Hair Growth Treatment
            </h2>
            <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base text-justify">
              Hair growth treatment focuses on revitalizing the scalp,
              strengthening hair follicles, and promoting natural regrowth.
              Various factors such as stress, hormonal imbalances, nutritional
              deficiencies, and genetics contribute to hair loss, thinning, and
              premature graying. A holistic approach, including homeopathy,
              personalized nutrition, and scalp therapies, can effectively
              address these issues without harmful side effects.
            </p>
            <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base text-justify">
              Homeopathic remedies stimulate hair follicles, improve blood
              circulation, and restore the body's natural balance to encourage
              healthy hair growth. These treatments target the root cause of
              hair loss rather than just the symptoms, ensuring long-lasting
              results.
            </p>
            <p className="text-gray-600 text-sm md:text-base text-justify">
              By using safe, natural solutions, hair growth treatment not only
              enhances hair thickness and strength but also improves overall
              scalp health. With a personalized and holistic approach,
              individuals can achieve fuller, healthier, and more vibrant hair.
            </p>
          </div>
        )}

        {activeTab === 'Causes' && (
          <div>
            {/* Content for Causes tab */}
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3 md:mb-4">
              Causes of Hair Growth
            </h2>

            <div className="text-gray-600 text-sm md:text-base text-justify">
              {/* <p className="mb-3 md:mb-4">Hair loss and thinning can result from various internal and external factors. Identifying the root cause is essential for effective treatment. Below are some common causes of hair loss:</p> */}

              <section>
                <h2 className="text-xl font-bold mb-4 md:text-2xl"> Popular Hair Growth Treatments</h2>

                {/* A. Homeopathic Hair Growth Treatments */}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2 md:text-xl">A. Homeopathic Hair Growth Treatments</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Fluoricum Acidum - Stimulates hair regrowth in bald patches</li>
                    <li>Phosphorus - Ideal for hair loss due to stress & scalp dryness</li>
                    <li>Silicea (Silica) - Strengthens weak, brittle hair</li>
                    <li>Lycopodium - Helps in premature balding and hormonal hair loss</li>
                    <li>Jaborandi Oil - A natural homeopathic remedy for scalp massage</li>
                  </ul>
                </div>

                {/* B. Ayurvedic & Herbal Remedies */}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2 md:text-xl">B. Ayurvedic & Herbal Remedies</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Bhringraj Oil - Known as "King of Hair," promotes regrowth</li>
                    <li>Amla (Indian Gooseberry) - Rich in vitamin C, prevents hair fall</li>
                    <li>Onion Juice - Stimulates hair follicles, boosts collagen production</li>
                    <li>Aloe Vera - Hydrates scalp and improves hair thickness</li>
                  </ul>
                </div>

                {/* C. Medical & Cosmetic Treatments */}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2 md:text-xl">C. Medical & Cosmetic Treatments</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Minoxidil (Rogaine) - FDA-approved topical treatment for hair regrowth</li>
                    <li>Finasteride (Propecia) - Oral medication for male pattern baldness</li>
                    <li>Platelet-Rich Plasma (PRP) Therapy - Injects growth factors into the scalp</li>
                    <li>Low-Level Laser Therapy (LLLT) - Uses red light to stimulate hair follicles</li>
                  </ul>
                </div>

                {/* D. Lifestyle & Dietary Changes for Hair Growth */}
                <div>
                  <h3 className="text-lg font-semibold mb-2 md:text-xl">D. Lifestyle & Dietary Changes for Hair Growth</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Protein-Rich Diet - Eggs, fish, nuts, and lentils</li>
                    <li>Iron & Biotin Supplements - Support healthy hair regrowth</li>
                    <li>Scalp Massages - Improves blood circulation to follicles</li>
                    <li>Avoid Harsh Chemicals - Reduce use of sulfates, parabens, and heat styling</li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        )}

        {activeTab === 'Symptoms' && (
          <div>
            {/* Content for Symptoms tab */}
            <div className="text-gray-600 text-sm md:text-base">
              {/* Content for Symptoms tab */}
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3 md:mb-4">
                Symptoms of Hair Problems
              </h2>
              <div className="mb-3 md:mb-4">
                <p className='text-justify'>Hair loss can manifest in various ways, depending on the underlying cause. Recognizing the early signs can help in seeking timely treatment. Below are the common symptoms associated with hair loss and thinning:</p>

                <section>
                  <h2 className="text-xl font-bold mb-4 md:text-2xl">1. Common Symptoms of Hair & Scalp Problems</h2>

                  {/* A. Hair Loss & Thinning */}
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2 md:text-xl">A. Hair Loss & Thinning</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Excessive hair fall (more than 100 strands per day)</li>
                      <li>Bald patches (Alopecia Areata)</li>
                      <li>Widening hair part or receding hairline (Male/Female Pattern Baldness)</li>
                      <li>Shedding hair in clumps (Telogen Effluvium due to stress)</li>
                    </ul>
                  </div>

                  {/* B. Hair Texture Changes */}
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2 md:text-xl">B. Hair Texture Changes</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Dry, brittle hair that breaks easily</li>
                      <li>Frizzy and unmanageable hair despite conditioning</li>
                      <li>Thin, weak strands with no volume</li>
                    </ul>
                  </div>

                  {/* C. Scalp Issues */}
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2 md:text-xl">C. Scalp Issues</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Itchy, flaky scalp (Dandruff or Seborrheic Dermatitis)</li>
                      <li>Redness & inflammation (Scalp infections like fungal or bacterial)</li>
                      <li>Painful bumps or pimples on the scalp</li>
                      <li>Excessive oiliness leading to greasy hair</li>
                    </ul>
                  </div>

                  {/* D. Unusual Hair Growth Patterns */}
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2 md:text-xl">D. Unusual Hair Growth Patterns</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Slow or stunted hair growth despite care</li>
                      <li>Premature graying before age 30</li>
                      <li>Uneven hair growth with some areas growing slower</li>
                    </ul>
                  </div>

                  {/* E. Split Ends & Breakage */}
                  <div>
                    <h3 className="text-lg font-semibold mb-2 md:text-xl">E. Split Ends & Breakage</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Frayed or split hair tips</li>
                      <li>Hair that won't grow past a certain length</li>
                      <li>Hair snaps off easily when brushing</li>
                    </ul>
                  </div>
                </section>

              </div>
            </div>
          </div>
        )}

        {activeTab === 'Homeopathic Tratment' && (
          <div>
            {/* Content for Homeopathic Treatment tab */}
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
        )}

        {activeTab === 'Faqs' && (
          <div>
            {/* Content for FAQs tab */}
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3 md:mb-4">Frequently Asked Questions</h2>

              <div className="space-y-3 md:space-y-4">
                {/* FAQ 1 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <button
                    className="flex items-center justify-between w-full p-3 md:p-4 bg-[#D8B4C8] text-white font-semibold"
                    onClick={() => toggleFaq(0)}
                  >
                    1. What causes hair loss, and can it be reversed?
                    <span className="text-2xl">{faqOpen[0] ? '-' : '+'}</span>
                  </button>
                  {faqOpen[0] && (
                    <div className="p-3 md:p-4 text-sm md:text-base">
                      <p className="text-gray-700">Hair loss can be caused by a combination of genetic, hormonal, and environmental factors. The reversibility of hair loss depends on the underlying cause. In many cases, hair loss can be slowed or reversed with appropriate treatments and lifestyle changes.</p>
                    </div>
                  )}
                </div>

                {/* FAQ 2 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <button
                    className="flex items-center justify-between w-full p-3 md:p-4 bg-[#D8B4C8] text-white font-semibold"
                    onClick={() => toggleFaq(1)}
                  >
                    2. How long does it take to see results from hair growth treatments?
                    <span className="text-2xl">{faqOpen[1] ? '-' : '+'}</span>
                  </button>
                  {faqOpen[1] && (
                    <div className="p-3 md:p-4 text-sm md:text-base">
                      <p className="text-gray-700">Hair growth treatments take time to show visible results. Depending on the cause and treatment method, noticeable improvement can take anywhere from 3 to 6 months. Consistency in following the treatment plan is crucial for effective results.</p>
                    </div>
                  )}
                </div>

                {/* FAQ 3 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <button
                    className="flex items-center justify-between w-full p-3 md:p-4 bg-[#D8B4C8] text-white font-semibold"
                    onClick={() => toggleFaq(2)}
                  >
                    3. Are homeopathic treatments effective for hair regrowth?
                    <span className="text-2xl">{faqOpen[2] ? '-' : '+'}</span>
                  </button>
                  {faqOpen[2] && (
                    <div className="p-3 md:p-4 text-sm md:text-base">
                      <p className="text-gray-700">Homeopathic treatments aim to stimulate hair follicles and improve overall scalp health by addressing the underlying causes of hair loss. Many individuals have found homeopathic treatments to be beneficial for promoting natural hair regrowth with personalized remedies.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Right Section: Contact Form */}
      <div className="w-full max-w-md mx-auto p-6">
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
                />
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

export default HairGrowths;
