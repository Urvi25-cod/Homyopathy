import React, { useState } from 'react';
import { ChevronDown } from "lucide-react";

const Man1 = () => {
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
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                Homeopathy for Hair Fall & Scalp Health
                            </h2>
                            <div className="text-gray-600">
                                <div className="mb-8">
                                    <h3 className="text-xl font-semibold mb-4">Conditions We Treat:</h3>
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
                            Causes of  Male Pattern Baldness
                        </h2>
                        <div className="mb-8">

                        </div>
                        <section>
                            <h2 className="text-2xl font-bold mb-4">Common Factors Contributing to Hair Loss</h2>

                            {/* 1. Genetic Factors (Heredity) */}
                            <div className="mb-6">
                                <h3 className="text-xl font-semibold mb-2">1. Genetic Factors (Heredity)</h3>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>MPB is hereditary, meaning it runs in families.</li>
                                    <li>If your father or grandfather had baldness, you are more likely to develop it.</li>
                                    <li>Genes inherited from both parents can influence the rate and severity of hair loss.</li>
                                </ul>
                            </div>

                            {/* 2. Hormonal Changes (DHT - Dihydrotestosterone) */}
                            <div className="mb-6">
                                <h3 className="text-xl font-semibold mb-2">2. Hormonal Changes (DHT - Dihydrotestosterone)</h3>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>DHT (Dihydrotestosterone) is a derivative of testosterone.</li>
                                    <li>It binds to hair follicles, causing them to shrink (follicle miniaturization) over time.</li>
                                    <li>This leads to shorter, thinner, and weaker hair strands until the follicles stop producing hair altogether.</li>
                                </ul>
                            </div>

                            {/* 3. Aging */}
                            <div className="mb-6">
                                <h3 className="text-xl font-semibold mb-2">3. Aging</h3>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>As men age, hair growth slows down.</li>
                                    <li>The follicles become less active, and hair loss becomes more noticeable, especially after the age of 40.</li>
                                </ul>
                            </div>

                            {/* 4. Lifestyle & Environmental Factors */}
                            <div className="mb-6">
                                <h3 className="text-xl font-semibold mb-2">4. Lifestyle & Environmental Factors</h3>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Poor Diet: Lack of essential nutrients like iron, protein, biotin, and vitamins (especially B vitamins).</li>
                                    <li>Stress: High stress levels can trigger temporary hair loss (telogen effluvium) and worsen MPB.</li>
                                    <li>Smoking & Alcohol: These can reduce blood flow to hair follicles, accelerating hair loss.</li>
                                    <li>Lack of Sleep: Disrupts hormone levels and affects hair growth cycles.</li>
                                </ul>
                            </div>

                            {/* 5. Medical Conditions & Medications */}
                            <div>
                                <h3 className="text-xl font-semibold mb-2">5. Medical Conditions & Medications</h3>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Health Issues: Thyroid disorders, autoimmune diseases, or scalp infections can contribute to hair loss.</li>
                                    <li>Certain Medications: Drugs for blood pressure, depression, and chemotherapy may accelerate baldness.</li>
                                </ul>
                            </div>
                        </section>


                    </div>
                )}

                {activeTab === 'Symptoms' && (
                    <div>
                        {/* Content for Symptoms tab */}
                        <div className="text-gray-600">
                            {/* Content for Symptoms tab */}
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                Symptoms of  Male Pattern Baldness
                            </h2>
                            <div className="mb-4">
                                <section>
                                    <h2 className="text-2xl font-bold mb-4">Male Pattern Baldness (Androgenetic Alopecia)</h2>
                                    <p className="mb-4">Male pattern baldness, also known as androgenetic alopecia, is the most common cause of hair loss in men. It is primarily influenced by genetics and hormones. Here are the details of its symptoms:</p>

                                    {/* Early Symptoms */}
                                    <div className="mb-6">
                                        <h3 className="text-xl font-semibold mb-2">Early Symptoms:</h3>
                                        <ol className="list-decimal pl-5 space-y-1">
                                            <li>Gradual Hair Thinning - Hair begins to thin, especially near the temples and crown of the head.</li>
                                            <li>Receding Hairline - The hairline starts to move backward, forming an "M" shape.</li>
                                            <li>Increased Hair Shedding - More hair falls out than usual, especially during combing or washing.</li>
                                        </ol>
                                    </div>

                                    {/* Progressive Symptoms */}
                                    <div className="mb-6">
                                        <h3 className="text-xl font-semibold mb-2">Progressive Symptoms:</h3>
                                        <ol className="list-decimal pl-5 space-y-1">
                                            <li>Bald Spot on the Crown - A circular bald patch develops on the top (crown) of the head.</li>
                                            <li>Horseshoe Pattern Baldness - Over time, the receding hairline and crown thinning meet, leaving hair only on the sides and back of the head.</li>
                                            <li>Miniaturization of Hair - The remaining hair becomes thinner, shorter, and lighter in color due to the shrinking of hair follicles.</li>
                                        </ol>
                                    </div>

                                    {/* Advanced Stage */}
                                    <div className="mb-6">
                                        <h3 className="text-xl font-semibold mb-2">Advanced Stage:</h3>
                                        <ol className="list-decimal pl-5 space-y-1">
                                            <li>Extensive Baldness - Only a horseshoe-shaped fringe of hair remains around the sides and back of the scalp.</li>
                                            <li>Smooth Scalp - In the final stage, the scalp appears smooth as hair follicles stop producing new hair.</li>
                                        </ol>
                                    </div>

                                    {/* Other Associated Signs */}
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Other Associated Signs:</h3>
                                        <ul className="list-disc pl-5 space-y-1">
                                            <li>Itchy or irritated scalp (rare)</li>
                                            <li>Slower hair regrowth over time</li>
                                            <li>Family history of baldness (genetic predisposition)</li>
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
                        <div className="text-gray-600">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Homeopathic  Male Pattern Baldness Treatment</h2>
                            {/* <section>
                                <p className="mb-4">Homeopathy offers remedies that aim to slow down hair loss and promote hair regrowth by addressing underlying causes like hormonal imbalances, stress, and poor scalp health. While homeopathic treatment for male pattern baldness (androgenetic alopecia) is not scientifically proven to completely restore lost hair, it may help in slowing down hair fall, improving scalp health, and strengthening existing hair.</p>

                                <h2 className="text-xl font-bold mb-4">Common Homeopathic Remedies for Male Pattern Baldness</h2>

                                <ol className="list-decimal pl-5 space-y-2">
                                    <li>
                                        <span className="font-semibold">Fluoricum Acidum</span> - Used for hair loss with brittle hair and a tendency for bald patches. It is recommended when hair falls out in clumps and the scalp becomes sensitive.
                                    </li>
                                    <li>
                                        <span className="font-semibold">Lycopodium Clavatum</span> - Effective when hair loss begins from the crown or temples, especially in cases linked to digestive issues or stress.
                                    </li>
                                    <li>
                                        <span className="font-semibold">Silicea</span> - Recommended for weak, thin hair prone to breakage, along with scalp dryness or dandruff. It helps strengthen hair roots.
                                    </li>
                                    <li>
                                        <span className="font-semibold">Phosphorus</span> - Best for rapid hair loss, particularly when hair falls out in handfuls. Also useful for oily scalp conditions.
                                    </li>
                                    <li>
                                        <span className="font-semibold">Thuja Occidentalis</span> - Used for hair thinning caused by hormonal imbalances or dandruff. It is beneficial when hair feels sticky and lacks shine.
                                    </li>
                                    <li>
                                        <span className="font-semibold">Baryta Carbonica</span> - Recommended for premature baldness, especially in young men who experience early hair thinning.
                                    </li>
                                    <li>
                                        <span className="font-semibold">Kali Carbonicum</span> - Suitable for hair loss due to deep-seated nutritional deficiencies or stress-related hair fall.
                                    </li>
                                </ol>
                            </section> */}

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
                                        className="flex items-center text-justify w-full p-4 bg-[#D8B4C8] text-white font-semibold"
                                        onClick={() => toggleFaq(0)}
                                    >
                                        1. Can homeopathy completely reverse male pattern baldness, or does it only slow down hair loss?
                                        <span className="text-2xl">{faqOpen[0] ? '-' : '+'}</span>
                                    </button>
                                    {faqOpen[0] && (
                                        <div className="p-4">
                                            <p className="text-gray-700">:Homeopathy cannot completely reverse male pattern baldness once the hair follicles have stopped functioning permanently. However, it can help slow down hair loss, improve scalp health,
                                                and strengthen existing hair follicles, potentially delaying baldness.</p>
                                        </div>
                                    )}
                                </div>

                                {/* FAQ 2 */}
                                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                    <button
                                        className="flex items-center justify-between w-full p-4 bg-[#D8B4C8] text-white font-semibold"
                                        onClick={() => toggleFaq(1)}
                                    >
                                        2.How long does homeopathic treatment take to show visible results in hair regrowth?
                                        <span className="text-2xl">{faqOpen[1] ? '-' : '+'}</span>
                                    </button>
                                    {faqOpen[1] && (
                                        <div className="p-4">
                                            <p className="text-gray-700">Homeopathic treatment is a slow and natural process. Results may take 3 to 6 months to become noticeable, depending on the individual’s age, severity of hair loss, lifestyle, and adherence to the treatment.
                                                Consistency is key to seeing improvement.</p>
                                        </div>
                                    )}
                                </div>

                                {/* FAQ 3 */}
                                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                    <button
                                        className="flex items-center justify-between w-full p-4 bg-[#D8B4C8] text-white font-semibold"
                                        onClick={() => toggleFaq(2)}
                                    >
                                        3.Which homeopathic remedies are commonly used for male pattern baldness?
                                        <span className="text-2xl">{faqOpen[2] ? '-' : '+'}</span>
                                    </button>
                                    {faqOpen[2] && (
                                        <div className="p-4">
                                            <p className="text-gray-700">Fluoricum Acidum – For brittle hair and patchy hair loss
                                                Lycopodium Clavatum – For hair thinning at the temples and crown
                                                Silicea – For weak, slow-growing hair
                                                Phosphorus – For excessive hair fall in clumps
                                                Thuja Occidentalis – For hair loss due to hormonal imbalance</p>
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

export default Man1;
