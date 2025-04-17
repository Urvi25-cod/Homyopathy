import React, { useState } from 'react';
import { ChevronDown } from "lucide-react"

const Femal1 = () => {
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
                            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
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
                            Causes of female Pattern Baldness
                        </h2>
                        <div className="mb-8">
                            <section>


                                <h2 className="text-xl font-bold mt-8 mb-4">Major Causes of Female Pattern Baldness</h2>

                                {/* 1. Genetics (Hereditary Factors) */}
                                <div className="mb-4">
                                    <h3 className="font-semibold mb-2">1. Genetics (Hereditary Factors)</h3>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>A family history of baldness in either parent can increase the likelihood of developing FPB.</li>
                                        <li>Inherited genes affect how hair follicles respond to hormones like androgens (DHT - dihydrotestosterone).</li>
                                    </ul>
                                </div>

                                {/* 2. Hormonal Imbalances */}
                                <div className="mb-4">
                                    <h3 className="font-semibold mb-2">2. Hormonal Imbalances</h3>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>DHT (Dihydrotestosterone): A byproduct of testosterone that can shrink hair follicles, shortening the hair growth cycle and leading to hair thinning.</li>
                                        <li>Menopause: Reduced estrogen levels post-menopause can cause increased hair loss.</li>
                                        <li>Polycystic Ovary Syndrome (PCOS): High androgen levels in PCOS can contribute to hair thinning.</li>
                                        <li>Thyroid Disorders: Hypothyroidism or hyperthyroidism can disrupt hair growth.</li>
                                    </ul>
                                </div>

                                {/* 3. Aging */}
                                <div className="mb-4">
                                    <h3 className="font-semibold mb-2">3. Aging</h3>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>Hair naturally thins with age, especially after 40 or menopause, due to slower hair regrowth and reduced follicle activity.</li>
                                    </ul>
                                </div>
                                <div className="mb-4">
                                    <h3 className="font-semibold mb-2">4. Stress & Emotional Factors</h3>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>Chronic stress increases cortisol, which disrupts the hair growth cycle and accelerates hair loss.</li>
                                        <li>Emotional trauma or anxiety can lead to telogen effluvium, a condition where excessive hair enters the shedding phase.</li>
                                    </ul>
                                </div>
                                <div className="mb-4">
                                    <h3 className="font-semibold mb-2">5. Nutritional Deficiencies</h3>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>Iron Deficiency: Low iron levels (anemia) reduce oxygen supply to hair follicles, weakening hair.</li>
                                        <li>Protein Deficiency: Hair is made of keratin (a protein), and insufficient intake can cause hair thinning.</li>
                                        <li>Biotin & Vitamin Deficiency: Low levels of biotin, zinc, vitamin D, and B-complex vitamins can affect hair growth.</li>
                                    </ul>
                                </div>
                            </section>
                        </div>




                    </div>
                )}

                {activeTab === 'Symptoms' && (
                    <div>
                        {/* Content for Symptoms tab */}
                        <div className="text-gray-600">
                            {/* Content for Symptoms tab */}
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                Symptoms of female Pattern Baldness
                            </h2>
                            <div className="mb-4">
                                <section>

                                    <p className="mb-4">Female pattern baldness (FPB) is a gradual hair thinning condition that mostly affects the top and crown of the head. It does not cause complete baldness like in men but can lead to noticeable hair loss over time.</p>

                                    <h2 className="text-xl font-bold mt-8 mb-4">Common Symptoms:</h2>

                                    <ol className="list-decimal pl-5 space-y-4">
                                        <li>
                                            <div className="font-semibold">Hair Thinning on the Crown & Top of the Head</div>
                                            <ul className="list-disc pl-5 mt-1 space-y-1">
                                                <li>The hair on the top of the head becomes thinner and less dense over time.</li>
                                                <li>The front hairline usually remains unchanged.</li>
                                            </ul>
                                        </li>

                                        <li>
                                            <div className="font-semibold">Widening of the Hair Part</div>
                                            <ul className="list-disc pl-5 mt-1 space-y-1">
                                                <li>The middle part of the hair starts getting wider, making the scalp more visible.</li>
                                            </ul>
                                        </li>

                                        <li>
                                            <div className="font-semibold">Increased Hair Shedding</div>
                                            <ul className="list-disc pl-5 mt-1 space-y-1">
                                                <li>More hair falls out while combing, washing, or styling than usual.</li>
                                                <li>Hair may shed in strands rather than clumps.</li>
                                            </ul>
                                        </li>

                                        <li>
                                            <div className="font-semibold">Slow Hair Growth</div>
                                            <ul className="list-disc pl-5 mt-1 space-y-1">
                                                <li>Hair takes longer to grow back, and new hair appears thinner and weaker than before.</li>
                                            </ul>
                                        </li>

                                        <li>
                                            <div className="font-semibold">Scalp Becomes More Visible</div>
                                            <ul className="list-disc pl-5 mt-1 space-y-1">
                                                <li>Over time, the scalp starts showing through the hair, especially under bright light.</li>
                                            </ul>
                                        </li>

                                        <li>
                                            <div className="font-semibold">No Bald Spots but General Thinning</div>
                                            <ul className="list-disc pl-5 mt-1 space-y-1">
                                                <li>Unlike male baldness, there are no bald patches—just an overall reduction in hair volume.</li>
                                            </ul>
                                        </li>
                                    </ol>
                                </section>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'Homeopathic Tratment' && (
                    <div>
                        {/* Content for Homeopathic Treatment tab */}
                        <div className="text-gray-600">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Homeopathic treatment of female Pattern Baldness</h2>
                            {/* <section>
                                <p className="mb-4">Homeopathy helps slow down hair loss, strengthen hair roots, and improve scalp health. It works by addressing the root cause, like hormonal imbalance, stress, or nutritional deficiencies. While it may not completely regrow lost hair, it can reduce further hair thinning and improve hair texture.</p>

                                <h2 className="text-2xl font-bold mb-4">Common Homeopathic Remedies for Female Pattern Baldness</h2>

                                <ol className="list-decimal pl-5 space-y-2">
                                    <li>
                                        Fluoricum Acidum - Helps when hair falls out in clumps, especially after pregnancy or illness.
                                    </li>
                                    <li>
                                        Lycopodium Clavatum - Best for hair thinning on the crown, especially in women with digestive issues.
                                    </li>
                                    <li>
                                        Silicea - Strengthens weak, brittle hair and improves slow hair growth.
                                    </li>
                                    <li>
                                        Phosphorus - Useful when hair falls out in large amounts, especially after washing or combing.
                                    </li>
                                    <li>
                                        Thuja Occidentalis - Helps when hair loss is due to hormonal imbalances, PCOS, or menopause.
                                    </li>
                                    <li>
                                        Sepia - Best for women facing hair loss after childbirth or during menopause.
                                    </li>
                                    <li>
                                        Kali Carbonicum - Treats severe hair thinning with dryness and scalp sensitivity.
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
                                        className="flex items-center justify-between w-full p-4 bg-[#D8B4C8] text-white font-semibold"
                                        onClick={() => toggleFaq(0)}
                                    >
                                        1.What are the early signs of female pattern baldness?
                                        <span className="text-2xl">{faqOpen[0] ? '-' : '+'}</span>
                                    </button>
                                    {faqOpen[0] && (
                                        <div className="p-4">
                                            <p className="text-gray-700"> Hair starts thinning on the top and crown of the head, the
                                                hair part widens, and hair falls out more than usual, especially during combing or washing.</p>
                                        </div>
                                    )}
                                </div>

                                {/* FAQ 2 */}
                                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                    <button
                                        className="flex items-center justify-between w-full p-4 bg-[#D8B4C8] text-white font-semibold"
                                        onClick={() => toggleFaq(1)}
                                    >
                                        2. . Can female pattern baldness be reversed?
                                        <span className="text-2xl">{faqOpen[1] ? '-' : '+'}</span>
                                    </button>
                                    {faqOpen[1] && (
                                        <div className="p-4">
                                            <p className="text-gray-700"> It cannot be completely reversed, but early treatment (homeopathy, proper diet, and scalp care) can slow down hair
                                                loss and improve hair thickness.</p>
                                        </div>
                                    )}
                                </div>

                                {/* FAQ 3 */}
                                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                    <button
                                        className="flex items-center justify-between w-full p-4 bg-[#D8B4C8] text-white font-semibold"
                                        onClick={() => toggleFaq(2)}
                                    >
                                        3.  Which homeopathic remedies help with female pattern baldness
                                        <span className="text-2xl">{faqOpen[2] ? '-' : '+'}</span>
                                    </button>
                                    {faqOpen[2] && (
                                        <div className="p-4">
                                            <p className="text-gray-700">Fluoricum Acidum – For hair falling in clumps
                                                Lycopodium Clavatum – For thinning at the crown
                                                Thuja Occidentalis – For hormonal hair loss (PCOS, menopause)
                                                Silicea – For weak, slow-growing hair</p>
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

export default Femal1;
