import React, { useState } from 'react';
import { ChevronDown } from "lucide-react"


const Skin1 = () => {
    const [activeTab, setActiveTab] = useState('Overview');
    const [faqOpen, setFaqOpen] = useState([false, false, false]);

    const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [date, setDate] = useState("")
  const [message, setMessage] = useState("")
  const [countryCode, setCountryCode] = useState("IND")

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
      };

    return (
        <div className="container mx-auto py-8 px-4 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-start">
            <div>
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

                {activeTab === 'Overview' && (
                    <div>
                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3 md:mb-4">
                            Overview of Skin Treatment
                        </h2>
                        <div className="text-gray-600 text-sm md:text-base">
                            <p className="mb-4 md:mb-6">
                                Skin treatments are procedures designed to improve skin health, address specific skin concerns, and enhance overall appearance. They range from basic skincare routines to advanced dermatological treatments.
                            </p>
                            <ol className="list-decimal pl-4 md:pl-5">
                                <li className="mb-2">
                                    <span className="font-semibold">Cleansing & Exfoliation</span>
                                    <p>Facials: Deep cleansing, steaming, and hydration for skin nourishment.</p>
                                    <p>Microdermabrasion: Gently exfoliates to remove dead skin cells and improve texture.</p>
                                    <p>Chemical Peels: Uses acids (AHA, BHA, or TCA) to remove damaged layers and boost regeneration.</p>
                                </li>
                                <li className="mb-2">
                                    <span className="font-semibold">Acne & Scar Treatments</span>
                                    <p>Laser Therapy: Reduces acne scars and inflammation.</p>
                                    <p>Microneedling: Stimulates collagen production for smoother skin.</p>
                                    <p>LED Light Therapy: Blue light kills acne-causing bacteria, red light aids healing.</p>
                                </li>
                                <li className="mb-2">
                                    <span className="font-semibold">Anti-Aging & Skin Tightening</span>
                                    <p>Botox & Dermal Fillers: Smooth wrinkles and restore facial volume.</p>
                                    <p>RF (Radiofrequency) Therapy: Tightens skin and stimulates collagen.</p>
                                    <p>Ultherapy: Uses ultrasound waves for non-surgical face lifting..</p>
                                </li>
                                <li className="mb-2">
                                    <span className="font-semibold">Pigmentation & Brightening</span>
                                    <p>Laser Resurfacing: Treats hyperpigmentation, sunspots, and uneven skin tone</p>
                                    <p>Glutathione Therapy: An antioxidant treatment for skin lightening.</p>
                                </li>
                                <li className="mb-2">
                                    <span className="font-semibold">Hydration & Skin Rejuvenation</span>
                                    <p>HydraFacial: Combines cleansing, exfoliation, and hydration.</p>
                                    <p>Oxygen Therapy: Infuses oxygen and serums for a fresh, glowing complexion.</p>
                                </li>
                                <li className="mb-2">
                                    <span className="font-semibold"> Medical & Advanced Dermatology Treatments</span>
                                    <p>PRP (Platelet-Rich Plasma): Uses blood plasma for skin rejuvenation.</p>
                                    <p>Cryotherapy: Removes skin tags, warts, and unwanted growths.</p>
                                </li>
                            </ol>
                        </div>
                    </div>
                )}
                {activeTab === 'Causes' && (
                    <div className="text-gray-600 text-sm md:text-base">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-3 md:mb-4">
                            Causes of Skin treatment
                        </h2>
                        <div className="mb-6 md:mb-8">
                            <h2 className="text-xl font-semibold mb-2">1. Acne & Blemishes</h2>
                            <div>
                                <h3 className="font-semibold mb-2">Causes:</h3>
                                <ul className="list-disc pl-4 md:pl-5 text-gray-700">
                                    <li>Excess oil (sebum) production</li>
                                    <li>Bacterial infections (Propionibacterium acnes)</li>
                                    <li>Hormonal imbalances (puberty, pregnancy, menopause)</li>
                                    <li>Clogged pores due to dead skin cells and dirt</li>
                                    <li>Stress, poor diet, and lack of skincare</li>
                                </ul>
                            </div>
                            <div className="mt-3 md:mt-4">
                                <h3 className="font-semibold mb-2">Common Treatments:</h3>
                                <ul className="list-disc pl-4 md:pl-5 text-gray-700">
                                    <li>Chemical peels</li>
                                    <li>Laser therapy</li>
                                    <li>Microneedling</li>
                                    <li>LED light therapy</li>
                                    <li>Prescription medications (retinoids, antibiotics)</li>
                                </ul>
                            </div>
                        </div>
                        <div className="mb-6 md:mb-8">
                            <h2 className="text-xl font-semibold mb-2">2. Aging (Wrinkles, Fine Lines, and Skin Sagging)</h2>
                            <div>
                                <h3 className="font-semibold mb-2">Causes:</h3>
                                <ul className="list-disc pl-4 md:pl-5 text-gray-700">
                                    <li>Breakdown of collagen and elastin with age</li>
                                    <li>Prolonged sun exposure (UV damage)</li>
                                    <li>Smoking, alcohol, and poor lifestyle choices</li>
                                    <li>Dehydration and poor nutrition</li>
                                    <li>Genetics and lack of proper skincare</li>
                                </ul>
                            </div>
                            <div className="mt-3 md:mt-4">
                                <h3 className="font-semibold mb-2">Common Treatments:</h3>
                                <ul className="list-disc pl-4 md:pl-5 text-gray-700">
                                    <li>Botox and dermal fillers</li>
                                    <li>Radiofrequency (RF) therapy</li>
                                    <li>Ultherapy (Ultrasound skin tightening)</li>
                                    <li>PRP (Platelet-rich plasma)</li>
                                    <li>Anti-aging facials and serums</li>
                                </ul>
                            </div>
                        </div>
                        <div className="mb-6 md:mb-8">
                            <h2 className="text-xl font-semibold mb-2">3. Hyperpigmentation (Dark Spots, Melasma, and Uneven Skin Tone)</h2>
                            <div>
                                <h3 className="font-semibold mb-2">Causes:</h3>
                                <ul className="list-disc pl-4 md:pl-5 text-gray-700">
                                    <li>Sun damage and UV exposure</li>
                                    <li>Hormonal changes (pregnancy, birth control pills)</li>
                                    <li>Inflammation or skin injuries</li>
                                    <li>Post-inflammatory hyperpigmentation (PIH)</li>
                                </ul>
                            </div>
                            <div className="mt-3 md:mt-4">
                                <h3 className="font-semibold mb-2">Common Treatments:</h3>
                                <ul className="list-disc pl-4 md:pl-5 text-gray-700">
                                    <li>Laser resurfacing</li>
                                    <li>Chemical peels</li>
                                    <li>Microdermabrasion</li>
                                    <li>Topical lightening creams (hydroquinone, retinoids)</li>
                                </ul>
                            </div>
                        </div>
                        <div className="mb-6 md:mb-8">
                            <h2 className="text-xl font-semibold mb-2">4. Dry & Dehydrated Skin</h2>
                            <div>
                                <h3 className="font-semibold mb-2">Causes:</h3>
                                <ul className="list-disc pl-4 md:pl-5 text-gray-700">
                                    <li>Harsh weather conditions (cold, heat, wind)</li>
                                    <li> Lack of water intake</li>
                                    <li>Overuse of strong skincare products (harsh cleansers, exfoliators)</li>
                                    <li>Aging, which reduces natural oil production</li>
                                </ul>
                            </div>
                            <div className="mt-3 md:mt-4">
                                <h3 className="font-semibold mb-2">Common Treatments:</h3>
                                <ul className="list-disc pl-4 md:pl-5 text-gray-700">
                                    <li>HydraFacial</li>
                                    <li>Oxygen therapy</li>
                                    <li>Moisturizing treatments</li>
                                    <li>Hyaluronic acid-based serums</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mb-6 md:mb-8">
                            <h2 className="text-xl font-semibold mb-2">5. Skin Allergies & Infections</h2>
                            <div>
                                <h3 className="font-semibold mb-2">Causes:</h3>
                                <ul className="list-disc pl-4 md:pl-5 text-gray-700">
                                    <li>Exposure to allergens (cosmetic products, food, dust, pollen)</li>
                                    <li>Bacterial, viral, or fungal infections (eczema, psoriasis, dermatitis)</li>
                                    <li>Weakened immune system</li>
                                    <li>Harsh environmental conditions </li>
                                </ul>
                            </div>
                            <div className="mt-3 md:mt-4">
                                <h3 className="font-semibold mb-2">Common Treatments:</h3>
                                <ul className="list-disc pl-4 md:pl-5 text-gray-700">
                                    <li>Dermatologist-prescribed creams and medications</li>
                                    <li>Antifungal or antibacterial treatments</li>
                                    <li>Cryotherapy for warts and skin lesions</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mb-6 md:mb-8">
                            <h2 className="text-xl font-semibold mb-2">6. Scars & Stretch Marks</h2>
                            <div>
                                <h3 className="font-semibold mb-2">Causes:</h3>
                                <ul className="list-disc pl-4 md:pl-5 text-gray-700">
                                    <li>Acne scars and post-surgical scars</li>
                                    <li>Stretch marks due to pregnancy, rapid weight loss/gain</li>
                                    <li>Genetic predisposition to scarring</li>
                                </ul>
                            </div>
                            <div className="mt-3 md:mt-4">
                                <h3 className="font-semibold mb-2">Common Treatments:</h3>
                                <ul className="list-disc pl-4 md:pl-5 text-gray-700">
                                    <li>Dermatologist-prescribed creams and medications</li>
                                    <li>Antifungal or antibacterial treatments</li>
                                    <li>Cryotherapy for warts and skin lesions</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'Symptoms' && (
                    <div className="text-gray-600 text-sm md:text-base">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-3 md:mb-4">
                            Symptoms of Hair Problems
                        </h2>
                        <div className="mb-3 md:mb-4">
                            <section className="mb-4 md:mb-6">
                                <h2 className="font-semibold mb-2">A. Chemical Peels</h2>
                                <p className="text-gray-700 mb-2">
                                    Chemical peels involve applying an acidic solution to exfoliate the skin. The symptoms may include:
                                </p>
                                <ul className="list-disc pl-4 md:pl-5 text-gray-700">
                                    <li>Redness & Irritation - Similar to a sunburn; common after mild to deep peels.</li>
                                    <li>Peeling & Flaking - Skin sheds dead cells; intensity depends on peel depth.</li>
                                    <li>Swelling - Common in deeper peels, lasting a few days.</li>
                                    <li>Hyperpigmentation or Hypopigmentation - Dark or light patches, especially in darker skin tones.</li>
                                    <li>Crusting & Scabbing - With deeper peels, as the skin regenerates.</li>
                                </ul>
                            </section>

                            <section className="mb-4 md:mb-6">
                                <h2 className="font-semibold mb-2">B. Laser Treatments (Resurfacing, Hair Removal, etc.)</h2>
                                <p className="text-gray-700 mb-2">
                                    Lasers use concentrated light energy to target skin issues.
                                </p>
                                <ul className="list-disc pl-4 md:pl-5 text-gray-700">
                                    <li>Redness & Warmth - Skin may feel like a mild sunburn post-treatment.</li>
                                    <li>Swelling & Sensitivity - Common in ablative laser treatments.</li>
                                    <li>Blistering & Scabbing - Possible in aggressive laser treatments.</li>
                                    <li>Temporary Skin Darkening or Lightening - Risk in darker skin types.</li>
                                    <li>Breakouts & Pimples - Skin may purge after treatment.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="font-semibold mb-2">C. Microneedling</h2>
                                <p className="text-gray-700 mb-2">
                                    Microneedling involves tiny needles puncturing the skin to boost collagen.
                                </p>
                                <ul className="list-disc pl-4 md:pl-5 text-gray-700">
                                    <li>Redness & Swelling - Normal for 24-48 hours.</li>
                                    <li>Bruising - More common with deep treatments.</li>
                                    <li>Minor Bleeding & Scabbing - In aggressive treatments.</li>
                                    <li>Skin Tightness & Dryness - Due to increased collagen production.</li>
                                </ul>
                            </section>
                            <section className="mb-4 md:mb-6">
                                <h2 className="font-semibold mb-2">D. Botox & Fillers</h2>
                                <p className="text-gray-700 mb-2">
                                    Injectables for wrinkles and volume restoration.
                                </p>
                                <ul className="list-disc pl-4 md:pl-5 text-gray-700">
                                    <li>Swelling & Bruising - Especially around injection sites.</li>
                                    <li>Tenderness & Redness - Common for a few days.</li>
                                    <li>Nodules or Lumps - Sometimes fillers form small bumps.</li>
                                    <li>Headache & Flu-Like Symptoms - Possible after Botox.</li>
                                    <li>Drooping Eyelids or Asymmetry - Rare but possible side effects.</li>
                                </ul>
                            </section>

                            <section className="mb-4 md:mb-6">
                                <h2 className="font-semibold mb-2">E. Dermabrasion & Microdermabrasion</h2>
                                <p className="text-gray-700 mb-2">
                                    These exfoliate the skin to improve texture.
                                </p>
                                <ul className="list-disc pl-4 md:pl-5 text-gray-700">
                                    <li>Redness & Sensitivity - Lasts from hours to days.</li>
                                    <li>Swelling - More common in deeper dermabrasion.</li>
                                    <li>Skin Peeling - As dead skin sheds.</li>
                                    <li>Mild Bleeding - Rare, but possible with deeper treatments.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="font-semibold mb-2">F. Topical Treatments (Retinoids, Hydroquinone, etc.)</h2>
                                <p className="text-gray-700 mb-2">
                                    Used for acne, pigmentation, and anti-aging.
                                </p>
                                <ul className="list-disc pl-4 md:pl-5 text-gray-700">
                                    <li>Dryness & Flakiness - Common with retinoids.</li>
                                    <li>Redness & Irritation - Can be intense, especially in the beginning.</li>
                                    <li>Increased Sun Sensitivity - Higher risk of sunburn.</li>
                                    <li>Breakouts & Purging - Temporary but can be mistaken for worsening acne.</li>
                                </ul>
                            </section>
                        </div>
                    </div>
                )}

                {activeTab === 'Homeopathic Tratment' && (
                    <div>
                        <div className="text-gray-600">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Homeopathic Hair Growth Treatment</h2>
                            <section className="mb-8">
                                <h2 className="text-xl font-semibold mb-4">Key Points of Homeopathic Skin Treatment</h2>
                                <ul>
                                    <li className="mb-2">Holistic Approach - Treats the root cause, not just symptoms.</li>
                                    <li className="mb-2">Safe & Natural - No steroids or harsh chemicals, minimal side effects.</li>
                                    <li className="mb-2">Boosts Immunity - Strengthens the body's natural healing.</li>
                                    <li className="mb-2">Long-Term Relief - Prevents recurrence of skin conditions.</li>
                                    <li className="mb-2">Customized Treatment - Remedies vary based on individual symptoms and constitution.</li>
                                </ul>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-xl font-semibold mb-4">Common Skin Conditions & Remedies</h2>
                                <ul>
                                    <li className="mb-2">Acne & Pimples - Sulphur, Hepar Sulph, Silicea</li>
                                    <li className="mb-2">Eczema & Dermatitis - Graphites, Rhus Tox, Petroleum</li>
                                    <li className="mb-2">Psoriasis - Arsenicum Album, Sepia, Graphites</li>
                                    <li className="mb-2">Vitiligo - Arsenicum Sulph Flavum, Sulphur, Calcarea Carb</li>
                                    <li className="mb-2">Urticaria (Hives) - Apis Mellifica, Urtica Urens, Rhus Tox</li>
                                    <li className="mb-2">Fungal Infections - Thuja, Sulphur, Sepia</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold mb-4">Homeopathic Skin Care Tips</h2>
                                <ul>
                                    <li className="mb-2">Hydration & Healthy Diet - Drink water, eat fresh fruits/veggies.</li>
                                    <li className="mb-2">Stress Management - Yoga, meditation for emotional balance.</li>
                                    <li className="mb-2">Proper Hygiene - Keep skin clean, avoid harsh soaps.</li>
                                    <li className="mb-2">Sun Protection - Use natural sunblock.</li>
                                </ul>
                            </section>

                        </div>
                    </div>
                )}

                {activeTab === 'Faqs' && (
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h2>

                        <div className="space-y-4">
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <button
                                    className="flex items-center justify-between w-full p-4 bg-[#D8B4C8] text-white font-semibold"
                                    onClick={() => toggleFaq(0)}
                                >
                                    1. What causes hair loss, and can it be reversed?
                                    <span className="text-2xl">{faqOpen[0] ? '-' : '+'}</span>
                                </button>
                                {faqOpen[0] && (
                                    <div className="p-4">
                                        <p className="text-gray-700">Content for the first FAQ</p>
                                    </div>
                                )}
                            </div>

                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <button
                                    className="flex items-center justify-between w-full p-4 bg-[#D8B4C8] text-white font-semibold"
                                    onClick={() => toggleFaq(1)}
                                >
                                    2. How long does it take to see results from hair growth treatments?
                                    <span className="text-2xl">{faqOpen[1] ? '-' : '+'}</span>
                                </button>
                                {faqOpen[1] && (
                                    <div className="p-4">
                                        <p className="text-gray-700">Hair growth treatments take time to show visible results. Depending on the cause and treatment method, noticeable improvement can take anywhere from 3 to 6 months. Consistency in following the treatment plan is crucial for effective results.</p>
                                    </div>
                                )}
                            </div>

                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <button
                                    className="flex items-center justify-between w-full p-4 bg-[#D8B4C8] text-white font-semibold"
                                    onClick={() => toggleFaq(2)}
                                >
                                    3. Are homeopathic treatments effective for hair regrowth?
                                    <span className="text-2xl">{faqOpen[2] ? '-' : '+'}</span>
                                </button>
                                {faqOpen[2] && (
                                    <div className="p-4">
                                        <p className="text-gray-700">Content for the third FAQ.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>

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
                // className="px-4 py-3 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-pink-400"
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

export default Skin1;





