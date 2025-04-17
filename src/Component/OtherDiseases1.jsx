import React, { useState } from 'react';
import { ChevronDown } from "lucide-react"


const OtherDiseases1 = () => {
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

                {/* {activeTab === 'Overview' && ( */}
                <div>
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3 md:mb-4">
                        Overview of Other Diseases
                    </h2>
                    <div className="text-gray-600 text-sm md:text-base">
                      
                        <div className="mb-6">
                           
                                {/* Simple Hair Loss Treatments */}
                                {/* <div>
                                    <h2 className="text-xl font-semibold mb-4">Simple Hair Loss Treatments</h2>
                                    <ul className="list-disc pl-5 space-y-2">
                                        <li>
                                            <span className="font-medium">Eat a Healthy Diet</span> - Protein, iron, biotin-rich foods.
                                        </li>
                                        <li>
                                            <span className="font-medium">Use Mild Shampoo & Oil</span> - Coconut, onion, or castor oil.
                                        </li>
                                        <li>
                                            <span className="font-medium">Reduce Stress</span> - Yoga, meditation, and good sleep.
                                        </li>
                                        <li>
                                            <span className="font-medium">Take Supplements</span> - Vitamin D, iron, and biotin.
                                        </li>
                                        <li>
                                            <span className="font-medium">Try Medical Treatments</span> - Minoxidil, PRP therapy, or hair transplant (for severe cases).
                                        </li>
                                        <li>
                                            <span className="font-medium">Avoid Harsh Chemicals</span> - Limit hair coloring and heat styling.
                                        </li>
                                    </ul>
                                </div> */}

                                {/* Diseases treatable with homoeopathy */}
                                <div>
                                    <h2 className="text-xl font-semibold mb-4">Diseases Treatable with Homoeopathy</h2>

                                    {/* Respiratory Diseases */}
                                    <h3 className="text-lg font-semibold mb-2">Respiratory Diseases</h3>
                                    <ul className="list-decimal pl-5 mb-4">
                                        <li>
                                            <span className="font-semibold">Asthma:</span> A chronic respiratory disease characterized by inflammation, airway obstruction, and spasm of the bronchial tubes.
                                        </li>
                                        <li>
                                            <span className="font-semibold">Bronchitis:</span> An inflammation of the lining of the bronchial tubes, which can be acute or chronic.
                                        </li>
                                        <li>
                                            <span className="font-semibold">Chronic Obstructive Pulmonary Disease (COPD):</span> A progressive lung disease that makes it difficult to breathe.
                                        </li>
                                    </ul>

                                    {/* Gastrointestinal Diseases */}
                                    <h3 className="text-lg font-semibold mb-2">Gastrointestinal Diseases</h3>
                                    <ul className="list-decimal pl-5 mb-4">
                                        <li>
                                            <span className="font-semibold">Irritable Bowel Syndrome (IBS):</span> A functional gastrointestinal disorder characterized by abdominal pain, bloating, and changes in bowel movements.
                                        </li>
                                        <li>
                                            <span className="font-semibold">Gastroenteritis:</span> An inflammation of the stomach and intestines, often caused by viral or bacterial infections.
                                        </li>
                                        <li>
                                            <span className="font-semibold">Inflammatory Bowel Disease (IBD):</span> A chronic condition that includes Crohn's disease and ulcerative colitis.
                                        </li>
                                    </ul>

                                    {/* Musculoskeletal Diseases */}
                                    <h3 className="text-lg font-semibold mb-2">Musculoskeletal Diseases</h3>
                                    <ul className="list-decimal pl-5 mb-4">
                                        <li>
                                            <span className="font-semibold">Arthritis:</span> A chronic condition that causes inflammation and pain in the joints.
                                        </li>
                                        <li>
                                            <span className="font-semibold">Fibromyalgia:</span> A condition characterized by widespread muscle pain, fatigue, and tender points.
                                        </li>
                                        <li>
                                            <span className="font-semibold">Back pain:</span> A common condition caused by various factors, including muscle strain, herniated discs, and spinal degeneration.
                                        </li>
                                    </ul>

                                    {/* Neurological Diseases */}
                                    <h3 className="text-lg font-semibold mb-2">Neurological Diseases</h3>
                                    <ul className="list-decimal pl-5 mb-4">
                                        <li>
                                            <span className="font-semibold">Anxiety disorders:</span> Conditions including generalized anxiety, panic disorder, and social anxiety disorder.
                                        </li>
                                        <li>
                                            <span className="font-semibold">Depression:</span> A mood disorder with persistent feelings of sadness, hopelessness, and loss of interest.
                                        </li>
                                        <li>
                                            <span className="font-semibold">Insomnia:</span> A sleep disorder caused by stress, anxiety, and irregular sleep schedules.
                                        </li>
                                    </ul>

                                    {/* Women's Health */}
                                    <h3 className="text-lg font-semibold mb-2">Women's Health</h3>
                                    <ul className="list-decimal pl-5 mb-4">
                                        <li>
                                            <span className="font-semibold">Menstrual disorders:</span> Irregular periods, heavy bleeding, and painful periods.
                                        </li>
                                        <li>
                                            <span className="font-semibold">Menopause symptoms:</span> Hot flashes, mood swings, and vaginal dryness.
                                        </li>
                                        <li>
                                            <span className="font-semibold">Premenstrual Syndrome (PMS):</span> Physical and emotional symptoms before menstruation.
                                        </li>
                                    </ul>

                                    {/* Other Diseases */}
                                    <h3 className="text-lg font-semibold mb-2">Other Diseases</h3>
                                    <ul className="list-decimal pl-5 mb-4">
                                        <li>
                                            <span className="font-semibold">Skin conditions:</span> Acne, eczema, psoriasis, and other skin conditions.
                                        </li>
                                        <li>
                                            <span className="font-semibold">Allergies:</span> Seasonal, food, and other allergies.
                                        </li>
                                        <li>
                                            <span className="font-semibold">Chronic fatigue syndrome:</span> Persistent fatigue not relieved by rest.
                                        </li>
                                    </ul>
                                </div>

                        </div>


                        {/* Dermatology & Cosmetic Procedures */}

                    </div>
                </div>

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

export default OtherDiseases1;





