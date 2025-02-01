import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Faq() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: 'How Long does it take?',
            answer: 'We work on your schedule! Typically you’ll receive 2 initial design concepts within a week and then once you choose your favorite designer they will provide revisions based on your feedback and help you source the items (this usually takes one to three weeks). Our process can be expedited or extended based on your needs.',
        },
        {
            question: 'Do you Offer in-home services?',
            answer: 'Yes! In most major U.S. cities we offer in-person assistance from home visits to shopping trips. You can start with a one hour initial consultation. Sign-up here to book your in-home consultation today!',
        },
        {
            question: 'What happens once I select the winning design?',
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
        <div className="mt-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-center text-white">
                Frequently Asked Questions
            </h1>

            <div className="p-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="mb-4">
                        <button
                            className="flex justify-between bg-black p-4 rounded-lg border-2 border-white  items-center w-full  text-left text-lg font-semibold text-white focus:outline-none focus:ring-2 focus:ring-black"
                            onClick={() => toggleAnswer(index)}
                        >
                            {faq.question}
                            <span className="ml-2">{openIndex === index ? '-' : '+'}</span>
                        </button>
                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.div
                                    key="content"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <p className="p-4 mt-4 text-white bg-black border-2 border-white rounded-lg">{faq.answer}</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    );
}
