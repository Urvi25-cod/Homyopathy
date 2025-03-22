import React, { useState } from 'react';
import { ChevronDown } from "lucide-react";


const Dandruff1 = () => {
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
    }


    return (
        <div className="container mx-auto py-8 px-4 grid grid-cols-1 lg:grid-cols-2  gap-6 md:gap-8 items-start">
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
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                            Overview of Dandruff Overview
                        </h2>
                        <div>
                            {/* <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                                Homeopathy for Hair Fall & Scalp Health
                            </h2> */}
                            <div className="text-gray-600">
                                <div className="mb-8">
                                    <h3 className="text-xl font-semibold mb-4">Conditions We Tre:at</h3>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li className="flex items-center">
                                            ✅ <span className="ml-2">Male & Female Pattern Baldness</span> – Slows progression and strengthens hair roots
                                        </li>
                                        <li className="flex items-center">
                                            ✅ <span className="ml-2">Alopecia (Hair Patches)</span> – Supports natural regrowth by stimulating the scalp
                                        </li>
                                        <li className="flex items-center">
                                            ✅ <span className="ml-2">Dandruff & Scalp Irritation</span> – Balances scalp health to reduce flaking and itchiness
                                        </li>
                                    </ul>
                                </div>

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

                    </div>
                )}

                {activeTab === 'Causes' && (
                    <div className="text-gray-600">
                        {/* Content for Causes tab */}
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                            Causes of Dandruff treatment
                        </h2>
                        <div className="mb-8">
                            <h2 className="font-semibold mb-4">1. Dry Skin</h2>
                            <div>
                                {/* <h3 className="font-semibold mb-2">Causes:</h3> */}
                                <ul className="list-disc pl-5 text-gray-700 text-justify">
                                    <li>One of the most common causes of dandruff.</li>
                                    <li>Flakes from dry skin are usually smaller and less oily than those from other causes.</li>
                                    <li>Often worsens in winter due to dry indoor heating and cold outdoor air.</li>
                                </ul>
                            </div>
                            <div className="mt-4">
                                <h3 className="font-semibold mb-2">2. Oily (Seborrheic) Scalp</h3>
                                <ul className="list-disc pl-5 text-gray-700 text-justify">
                                    <li>Overproduction of oil (sebum) can create a breeding ground for dandruff-causing microbes.</li>
                                    <li>Leads to a condition called seborrheic dermatitis, which causes greasy, yellowish flakes along with redness and irritation.</li>
                                    <li>Common in areas with many oil glands, such as the scalp, eyebrows, and sides of the nose.</li>
                                </ul>
                            </div>
                            <div className="mt-4">
                                <h3 className="font-semibold mb-2">3. Fungal Infection (Malassezia)</h3>
                                <ul className="list-disc pl-5 text-gray-700 text-justify">
                                    <li>A yeast-like fungus called Malassezia lives on most scalps but can grow excessively in some people, leading to dandruff.</li>
                                    <li>It feeds on scalp oils and produces irritation, leading to flaking and itching.</li>
                                    <li>Some people are more sensitive to Malassezia, triggering an inflammatory response.</li>
                                </ul>
                            </div>
                            <div className="mt-4">
                                <h3 className="font-semibold mb-2">4. Poor Hair Hygiene</h3>
                                <ul className="list-disc pl-5 text-gray-700 text-justify">
                                    <li>Infrequent washing or not cleaning the scalp properly can lead to oil and dead skin buildup, causing dandruff.</li>
                                    <li>Regular shampooing helps remove excess oil, dirt, and dead skin cells.</li>
                                </ul>
                            </div>
                            <div className="mt-4">
                                <h3 className="font-semibold mb-2">5. Sensitivity to Hair Products (Contact Dermatitis)</h3>
                                <ul className="list-disc pl-5 text-gray-700 text-justify">
                                    <li>Certain hair products (shampoos, conditioners, hair dyes) can cause allergic reactions or irritation.</li>
                                    <li>Sulfates, parabens, and alcohol-based products may strip natural oils or cause inflammation, leading to dandruff.</li>
                                    <li>Frequent use of hairstyling products like gels and sprays can also contribute.</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                )}

                {activeTab === 'Symptoms' && (
                    <div>
                        {/* Content for Symptoms tab */}
                        <div className="text-gray-600">
                            {/* Content for Symptoms tab */}
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                Symptoms of Dandruff Problems
                            </h2>
                            <div className="mb-4">
                                <section className="mb-6">
                                    <h2 className="font-semibold mb-2">1. Flaky Skin (White or Yellowish)</h2>

                                    <ul className="list-disc pl-5 text-gray-700">
                                        <li>These flakes may be visible on hair, shoulders, and clothing.</li>
                                        <li className="text-gray-700 mb-2">
                                            The most noticeable symptom of dandruff is white or yellow flakes of dead skin that shed from the scalp.
                                        </li>
                                    </ul>
                                </section>

                                <section className="mb-6">
                                    <h2 className="font-semibold mb-2">2. Itchy Scalp</h2>

                                    <ul className="list-disc pl-5 text-gray-700">
                                        <li>Scratching can worsen dandruff and lead to further irritation.</li>
                                        <li>Persistent itchiness is a common symptom due to irritation from flakes and dry skin.</li>
                                    </ul>
                                </section>

                                <section className="mb-6">
                                    <h2 className="font-semibold mb-2">3. Dry or Oily Scalp</h2>

                                    <ul className="list-disc pl-5 text-gray-700">
                                        <li>In dry dandruff, flakes are small and white.</li>
                                        <li>In oily dandruff, flakes appear greasy and yellowish due to excess sebum.</li>
                                        <li>Dandruff can occur on both dry and oily scalps.</li>
                                    </ul>
                                </section>

                                <section className="mb-6">
                                    <h2 className="font-semibold mb-2">4. Redness and Irritation</h2>

                                    <ul className="list-disc pl-5 text-gray-700">
                                        <li>Severe cases can lead to discomfort or even burning sensations.</li>
                                        <li>The scalp may become red and inflamed, especially if dandruff is caused by fungal growth or sensitivity to hair products.</li>
                                    </ul>
                                </section>

                                <section className="mb-6">
                                    <h2 className="font-semibold mb-2">5. Hair Thinning or Weakness</h2>

                                    <ul className="list-disc pl-5 text-gray-700">
                                        <li>Severe cases may contribute to hair fall due to constant scratching and scalp irritation.</li>
                                        <li>Persistent dandruff can weaken hair roots and cause temporary hair shedding.</li>
                                    </ul>
                                </section>
                            </div>

                        </div>
                    </div>
                )}

                {activeTab === 'Homeopathic Tratment' && (
                    <div>
                        {/* Content for Homeopathic Treatment tab */}
                        <div className="text-gray-600">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Homeopathic Dandruff Treatment</h2>

                            <p className="text-gray-700 text-justify">Homeopathic dandruff treatment focuses on addressing the root cause of dandruff rather than just its symptoms.
                                It works by balancing the body's internal systems, improving scalp health, and reducing flaking, itching, and dryness. </p>
                            <br></br>
                            <p className='text-gray-700 text-justify'></p>
                            Homeopathic remedies are natural, gentle, and free from harmful chemicals, making them suitable for all hair types and sensitive scalps.
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
                                        1.What is the most effective way to get rid of dandruff?
                                        <span className="text-2xl">{faqOpen[0] ? '-' : '+'}</span>
                                    </button>
                                    {faqOpen[0] && (
                                        <div className="p-4">
                                            <p className="text-gray-700">The best way to treat dandruff is by using an anti-dandruff shampoo containing ingredients like zinc pyrithione, ketoconazole, or salicylic acid.
                                                Regular washing, a balanced diet, and proper scalp care also help reduce flakes.</p>
                                        </div>
                                    )}
                                </div>

                                {/* FAQ 2 */}
                                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                    <button
                                        className="flex items-center justify-between w-full p-4 bg-[#D8B4C8] text-white font-semibold"
                                        onClick={() => toggleFaq(1)}
                                    >
                                        2.Can dandruff be caused by dry scalp?
                                        <span className="text-2xl">{faqOpen[1] ? '-' : '+'}</span>
                                    </button>
                                    {faqOpen[1] && (
                                        <div className="p-4">
                                            <p className="text-gray-700">Yes, but dandruff is more commonly caused by an overgrowth of a yeast-like fungus called Malassezia, which leads to excessive skin shedding.
                                                Dry scalp, on the other hand, results from a lack of moisture and can cause similar flaking.</p>
                                        </div>
                                    )}
                                </div>

                                {/* FAQ 3 */}
                                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                    <button
                                        className="flex items-center justify-between w-full p-4 bg-[#D8B4C8] text-white font-semibold"
                                        onClick={() => toggleFaq(2)}
                                    >
                                        3. How often should I wash my hair if I have dandruff?
                                        <span className="text-2xl">{faqOpen[2] ? '-' : '+'}</span>
                                    </button>
                                    {faqOpen[2] && (
                                        <div className="p-4">
                                            <p className="text-gray-700">It depends on your hair type and the severity of dandruff. Generally, washing your hair 2-3 times a week with an anti-dandruff shampoo can help control flakes.
                                                If dandruff is severe, daily washing with a medicated shampoo may be necessary.</p>
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

export default Dandruff1;
