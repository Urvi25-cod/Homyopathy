import React, { useState } from 'react';
import { ChevronDown } from "lucide-react";


const Homeopathy1 = () => {
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
                        {['Overview', 'Causes',  'Homeopathic Tratment', 'Faqs'].map((tab, index, arr) => (
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
                    <div className='text-gray-600 text-justify'>
                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3 md:mb-4">
                            Overview of Homeopathy  Treatment
                        </h2>
                        <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base text-justify">
                            Homeopathy is a natural and holistic healing system that uses highly diluted substances to stimulate the body's self-healing ability.
                            Based on the principle of "Like Cures Like," it treats illnesses by giving tiny doses of substances that cause similar symptoms in healthy people.
                            Homeopathy is safe, has no side effects, and is used for various conditions like colds, allergies, skin problems, digestion issues, and stress.
                            It focuses on treating the whole person rather than just the disease, making it a gentle and personalized approach to healing.
                        </p>
                        <section>




                            <ol className="list-decimal pl-5 space-y-4">
                                <li>
                                    <div className="font-semibold">Safe and Natural Healing</div>
                                    <ul className="list-disc pl-5 mt-1 space-y-1">
                                        <li>Homeopathic remedies are derived from natural substances. They are prepared in highly diluted forms, making them non-toxic
                                            and safe for people of all ages, including infants, pregnant women, and the elderly.
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    <div className="font-semibold">Minimal Side Effects</div>
                                    <ul className="list-disc pl-5 mt-1 space-y-1">
                                        <li>
                                            Unlike conventional medications, homeopathic remedies are gentle on the body and rarely produce side effects. This makes it an ideal option for
                                            those with sensitivities or who are seeking an alternative to harsh pharmaceutical drugs. </li>
                                    </ul>
                                </li>

                                <li>
                                    <div className="font-semibold">Treats the Root Cause</div>
                                    <ul className="list-disc pl-5 mt-1 space-y-1">

                                        <li>Homeopathy focuses on addressing the root cause of an illness rather than merely suppressing symptoms. By stimulating the body's natural ability to heal, homeopathy promotes long-term well-being. </li>
                                    </ul>
                                </li>

                                <li>
                                    <div className="font-semibold">Effective for Chronic Conditions</div>
                                    <ul className="list-disc pl-5 mt-1 space-y-1">
                                        <li>Homeopathy has shown remarkable success in managing chronic conditions such as allergies, asthma, arthritis, migraines, and skin disorders.
                                            It is also beneficial for emotional health issues like anxiety, depression, and stress. </li>
                                    </ul>
                                </li>

                                <li>
                                    <div className="font-semibold">Boosts Immunity</div>
                                    <ul className="list-disc pl-5 mt-1 space-y-1">
                                        <li>
                                            By enhancing the body's self-healing mechanism, homeopathy helps strengthen the immune system, making it more resilient against infections and illnesses.</li>
                                    </ul>
                                </li>

                                <li>
                                    <div className="font-semibold">Complementary with Other Treatments</div>
                                    <ul className="list-disc pl-5 mt-1 space-y-1">
                                        <li>Homeopathy can be safely used alongside conventional medicine and other alternative therapies, providing an integrated approach to better health.</li>
                                    </ul>
                                </li>
                                <li>
                                    <div className="font-semibold">Affordable and Accessible</div>
                                    <ul className="list-disc pl-5 mt-1 space-y-1">
                                        <li>Homeopathic remedies are often more affordable than conventional medicines, making holistic healthcare accessible to a wider range of people.
                                            conclusion:-Homeopathy offers a safe, natural, and effective way to achieve better health and well-being. By treating the individual as a whole,
                                            homeopathy empowers the body to heal itself, promoting long-term balance and vitality.</li>
                                    </ul>
                                </li>
                            </ol>
                        </section>
                    </div>
                )}

                {activeTab === 'Causes' && (
                    <div>
                        {/* Content for Causes tab */}
                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3 md:mb-4">
                            Causes of Homeopathy Treatment
                        </h2>

                        <div className="text-gray-600 text-sm md:text-base text-justify">
                            {/* <p className="mb-3 md:mb-4">Hair loss and thinning can result from various internal and external factors. Identifying the root cause is essential for effective treatment. Below are some common causes of hair loss:</p> */}

                            <section>
                                <ol className="list-decimal pl-5">
                                    <li className="mb-2">
                                        <span className="font-medium">Chronic Illnesses </span> – Long-term issues like allergies, asthma, and arthritis.
                                    </li>
                                    <li className="mb-2">
                                        <span className="font-medium">Mild & Safe Treatment</span>  – No harmful side effects, making it safe for all ages..
                                    </li>
                                    <li className="mb-2">
                                        <span className="font-medium">Personalized Healing </span> – Remedies are chosen based on a person’s overall health, emotions, and symptoms.
                                    </li>
                                    <li className="mb-2">
                                        <span className="font-medium">Boosts Immunity </span> – Helps the body fight diseases naturally.

                                    </li>
                                    <li className="mb-2">
                                        <span className="font-medium">Alternative to Conventional Medicine </span> – Some people prefer homeopathy when regular medicines don’t work or cause side effects.
                                    </li>
                                </ol>
                            </section>
                            <p className="text-gray-600 mb-6">
                                Homeopathy treatments are used to help the body heal naturally, but their effects can vary from person to person. Some common <span className="font-semibold">causes</span> or reasons why people choose homeopathy include:
                            </p>
                            {/* List of Reasons */}

                        </div>
                    </div>
                )}

                

                {activeTab === 'Homeopathic Tratment' && (
                    <div>
                        {/* Content for Homeopathic Treatment tab */}
                        <div className="text-gray-600 text-sm md:text-base">
                            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3 md:mb-4">Homeopathic Treatment</h2>

                            <p className="mb-3 md:mb-4 text-justify">Homeopathy is a natural and holistic healing system based on the principle of “Like Cures Like.”
                                This means that a substance that causes symptoms in a healthy person can be used in a highly diluted form to treat
                                similar symptoms in a sick person. Homeopathic remedies are prepared through repeated dilution and shaking (succussion),
                                which is believed to enhance their healing properties while minimizing toxicity. These medicines are derived from natural sources like plants, minerals, and animal substances.</p>
                            <p className="mb-3 md:mb-4 text-justify">One of the key benefits of homeopathy is that it treats the whole person rather than just the disease. Homeopathic doctors (homeopaths)
                                choose remedies based on a patient’s physical, emotional, and mental health. It is commonly used for conditions like allergies, colds, skin problems, digestive disorders, stress,
                                and chronic illnesses such as arthritis and migraines. Since homeopathic medicines are given in extremely small doses, they are considered safe, non-toxic, and without harmful side effects</p>
                            <p className='text-gray-900 mb-2'>Common uses :</p>
                            <ul className="list-disc pl-5">
                                <li className="mb-2">
                                    <span className="font-medium">Allergies</span>
                                </li>
                                <li className="mb-2">
                                    <span className="font-medium">Migraines</span>
                                </li>
                                <li className="mb-2">
                                    <span className="font-medium">Depression</span>
                                </li>
                                <li className="mb-2">
                                    <span className="font-medium">Chronic fatigue syndrome</span>
                                </li>
                                <li className="mb-2">
                                    <span className="font-medium">Rheumatoid arthritis</span>
                                </li>
                                <li>
                                    <span className="font-medium">Irritable bowel syndrome</span>
                                </li>
                                <li>
                                    <span className="font-medium">Premenstrual syndrome</span>
                                </li>
                            </ul>

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
                                        1. How long does homeopathy take to work?
                                        <span className="text-2xl">{faqOpen[0] ? '-' : '+'}</span>
                                    </button>
                                    {faqOpen[0] && (
                                        <div className="p-3 md:p-4 text-sm md:text-base">
                                            <p className="text-gray-700">The time varies depending on the condition. Acute issues like colds may improve in hours or days,
                                                while chronic conditions may take weeks or months.</p>
                                        </div>
                                    )}
                                </div>

                                {/* FAQ 2 */}
                                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                    <button
                                        className="flex items-center justify-between w-full p-3 md:p-4 bg-[#D8B4C8] text-white font-semibold"
                                        onClick={() => toggleFaq(1)}
                                    >
                                        2. Is homeopathy safe for children and pregnant women?
                                        <span className="text-2xl">{faqOpen[1] ? '-' : '+'}</span>
                                    </button>
                                    {faqOpen[1] && (
                                        <div className="p-3 md:p-4 text-sm md:text-base">
                                            <p className="text-gray-700">Yes, homeopathy is natural, non-toxic, and safe for all ages, including babies and pregnant women.</p>
                                        </div>
                                    )}
                                </div>

                                {/* FAQ 3 */}
                                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                    <button
                                        className="flex items-center justify-between w-full p-3 md:p-4 bg-[#D8B4C8] text-white font-semibold"
                                        onClick={() => toggleFaq(2)}
                                    >
                                        3. Can I take homeopathic medicine with regular (allopathic) medicine?
                                        <span className="text-2xl">{faqOpen[2] ? '-' : '+'}</span>
                                    </button>
                                    {faqOpen[2] && (
                                        <div className="p-3 md:p-4 text-sm md:text-base">
                                            <p className="text-gray-700">Yes, homeopathy can be used alongside conventional medicines, but it’s best to consult
                                                a doctor or homeopath for proper guidance.</p>
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

export default Homeopathy1;