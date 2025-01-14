import React from 'react';
import { motion } from 'framer-motion';

const TermsConditions = () => {
    return (
        <div className="h-fit pb-16 mt-44 md:mt-0">
            {/* Page Heading */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-3xl md:text-3xl font-bold font-serif text-center text-indigo-900 mb-6"
            >
                Terms and Conditions
            </motion.h1>

            {/* Page Content */}
            <div className="p-6 space-y-12">
                {/* Scooty & Bike Rental Section */}
                <section>
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-xl md:text-2xl font-semibold mb-4 text-indigo-600"
                    >
                        Scooty & Bike Rental
                    </motion.h2>
                    <motion.ul
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="list-disc list-inside space-y-2 font-serif text-gray-900"
                    >
                        {[
                            "Users must possess a valid driving license to rent any vehicle from our platform.",
                            "A security deposit may be required, which will be refunded after the rental period, subject to the condition of the vehicle.",
                            "You are responsible for ensuring the vehicle’s safety and returning it in the condition you received it, except for normal wear and tear.",
                            "The users are not allowed to take the vehicles outside the city.",
                            "The rented vehicle should be used solely for personal purposes and not for commercial or illegal activities.",
                            "Users must comply with local traffic rules and safety regulations at all times.",
                            "Any damage caused to the vehicle during the rental period will be borne by the user, and repair charges may apply.",
                            "We are not responsible for any accidents, traffic violations, or other incidents occurring during the rental period.",
                            "We reserve the right to deny service to anyone who fails to meet the eligibility requirements or violates these terms.",
                        ].map((item, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                {item}
                            </motion.li>
                        ))}
                    </motion.ul>
                </section>

                {/* Flats & PG's Rental Section */}
                <section>
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-xl md:text-2xl font-semibold mb-4 font-serif text-indigo-600"
                    >
                        Flats & PG's Rental
                    </motion.h2>
                    <motion.ul
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="list-disc list-inside space-y-2 font-serif text-gray-900"
                    >
                        {[
                            "We are a platform that connects tenants and landlords/PG owners. We do not guarantee the accuracy of property listings.",
                            "It is the responsibility of the user to verify the authenticity of the properties listed.",
                            "Tenants must ensure timely payments as agreed with the landlord. Any disputes regarding payment, maintenance, or services should be resolved between the tenant and the property owner.",
                            "We are not liable for any disputes, damages, or issues arising between tenants and landlords.",
                            "Users must act in good faith and provide accurate information while applying for rental properties.",
                            "Any fraudulent activity will result in permanent ban from the platform.",
                        ].map((item, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                {item}
                            </motion.li>
                        ))}
                    </motion.ul>
                </section>

                {/* Notes, Research Assistance, and Internships Section */}
                <section>
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-xl md:text-2xl font-semibold mb-4 font-serif text-indigo-600"
                    >
                        Notes, Research Assistance, and Internships
                    </motion.h2>
                    <motion.ul
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="list-disc list-inside space-y-2 font-serif text-gray-900"
                    >
                        {[
                            "The study material and notes provided on our platform are for educational purposes only.",
                            "Users are not allowed to redistribute or resell any content provided through our website without prior consent.",
                            "Our research assistance services are meant to guide students in their work and not to provide a finished product. Users are expected to use the assistance ethically and responsibly.",
                            "We do not guarantee any specific outcomes such as grades or research publication through the use of our services.",
                            "We provide a platform for students to discover internships. We do not guarantee internship placements.",
                            "Any disputes between students and internship providers must be resolved between the concerned parties.",
                        ].map((item, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                {item}
                            </motion.li>
                        ))}
                    </motion.ul>
                </section>
            </div>
        </div>
    );
};

export default TermsConditions;
