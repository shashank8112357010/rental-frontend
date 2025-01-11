import React, { useState } from 'react';

export default function Faq() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: 'How Long does it take?',
            answer: 'We work on your schedule! Typically you’ll receive 2 initial design concepts within a week and then once you choose your favorite designer they will provide revisions based on your feedback and help you source the items (this usually takes one to three weeks). Our process can be expedited or extended based on your needs.',
        },
        {
            question: 'Do you Offer in-home services ?',
            answer: 'Yes! In most major U.S. cities we offer in-person assistance from home visits to shopping trips. You can start with a one hour initial consultation. Sign-up here to book your in-home consultation today!',
        },
        {
            question: 'What happens once I select the winning design ?',
            answer: 'Once you choose your designer you’ll be in constant communication with them, and you may even tell them if you really liked something from another proposal. Your chosen designer will refine the design based on your feedback when completing the realistic 3D model & shopping list that’s included in your package.',
        },
        {
            question: 'How do I receive your exclusive furniture discounts?',
            answer: 'Once you’ve purchased your design package, you’re in! You get immediate access to Decorilla discounts for your space. Just click on the brands tab for instructions. Our exclusive discounts help us make the most of every budget and allow our designers to create spaces that look better for less.',
        },
        {
            question: 'What is your 100% satisfaction guarantee?',
            answer: 'We have a 100% satisfaction guarantee, so if you don’t like the concepts you receive just let us know within 60 days and we’ll assign another designer to your project or provide more options to make sure you love your design.',
        },
    ];

    const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className=" mt-12 ">
            <h1 className="text-4xl font-bold mb-12 text-center text-black">Frequently Asked Questions</h1>
            <div className=" p-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="mb-4">
                        <button
                            className="flex justify-between items-center w-full p-4 text-left text-lg font-semibold text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onClick={() => toggleAnswer(index)}
                        >
                            {faq.question}
                            <span className="ml-2">{openIndex === index ? '-' : '+'}</span>
                        </button>
                        {openIndex === index && (
                            <p className="p-4 mt-4 text-gray-600 bg-gray-50 rounded-lg">{faq.answer}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
