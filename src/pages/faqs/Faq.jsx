import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqData } from '../../data';

export default function Faq({ category }) {
    const [openIndex, setOpenIndex] = useState(null);

    const selectedFaqs = faqData.find(faq =>
        faq.category.toLowerCase() === category.toLowerCase()
    )?.questions || [];

    const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="pt-20">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-center text-white">
                Frequently Asked Questions
                {/* {category || 'FAQs'} */}
            </h3>

            <div className="p-4">
                {selectedFaqs.length > 0 ? (
                    selectedFaqs.map((faq, index) => (
                        <div key={index} className="mb-4">
                            <button
                                className="flex justify-between bg-black p-4 rounded-lg border-2 border-white items-center w-full text-left text-lg font-semibold text-white focus:outline-none focus:ring-2 focus:ring-black"
                                onClick={() => toggleAnswer(index)}
                                aria-expanded={openIndex === index}
                            >
                                {faq.question}
                                <span className="ml-2">{openIndex === index ? '-' : '+'}</span>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="p-4 mt-4 text-white bg-black border-2 border-white rounded-lg">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))
                ) : (
                    <p className="text-white text-center">No FAQs available for this category.</p>
                )}
            </div>
        </div>
    );
}
