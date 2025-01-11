import React from 'react';
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
    const sections = [
        {
            title: "1. Information We Collect",
            subsections: [
                {
                    subtitle: "1.1 Personal Information",
                    items: [
                        "Registration Details: Name, email, phone number, and contact information.",
                        "Payment Information: Credit/debit card details, billing addresses, and transaction details for payments.",
                        "Identity Verification: Government ID, driving license, or other documents for rentals or bookings."
                    ]
                },
                {
                    subtitle: "1.2 Non-Personal Information",
                    items: [
                        "Technical Information: Device details, browser type, IP address, and browsing behavior.",
                        "Usage Data: Pages visited, time spent on the site, and referral sources for analysis."
                    ]
                }
            ]
        },
        {
            title: "2. How We Use Your Information",
            items: [
                "To process and manage bookings and transactions.",
                "To personalize your experience and improve our website.",
                "To securely process payments and verify your identity.",
                "To send newsletters, promotional offers, and updates.",
                "To comply with legal obligations and protect user rights."
            ]
        },
        {
            title: "3. How We Share Your Information",
            items: [
                "Service Providers: Shared with third-party providers for payments, support, or analytics.",
                "Business Partners: Shared with landlords or rental agencies for service facilitation.",
                "Legal Obligations: Disclosed if required by law or to protect rights.",
                "Corporate Transactions: Transferred as part of business deals, subject to this policy."
            ]
        },
        {
            title: "4. Data Security",
            content: "We implement SSL encryption, access control, and regular monitoring to safeguard your data. However, no system is entirely secure. In the event of a data breach, we will notify you as required by law."
        },
        {
            title: "5. Your Rights",
            items: [
                "Access and Correction: Request and correct your personal data.",
                "Data Portability: Request a copy of your data in a commonly used format.",
                "Deletion: Request deletion of data no longer needed, except for legal obligations.",
                "Opt-Out: Unsubscribe from promotional communications while receiving transactional updates."
            ]
        },
        {
            title: "6. Cookies and Tracking Technologies",
            content: "Cookies help us analyze usage and improve the user experience. You can control cookies through browser settings but disabling them may limit website functionality."
        },
        {
            title: "7. Third-Party Links",
            content: "Our site may link to external websites. We are not responsible for their privacy practices or content. Please review their privacy policies."
        },
        {
            title: "8. Children's Privacy",
            content: "Our services are not intended for users under 18 without parental consent. If we discover data from a child under 13, it will be deleted immediately."
        },
        {
            title: "9. Changes to the Privacy Policy",
            content: "Updates to this policy will be posted here. Continued use of our services after changes indicates consent to the updated policy."
        }
    ];

    return (
        <div className="h-fit">
            {/* Page Heading */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-xl md:text-3xl font-bold text-center text-indigo-900 mb-6"
            >
                Privacy Policy
            </motion.h1>

            <div className="p-6 space-y-8">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="text-gray-700"
                >
                    At GradCommune, we are committed to protecting your privacy and ensuring that your personal
                    information is handled in a safe and responsible manner. This Privacy Policy outlines how we
                    collect, use, disclose, and protect your data when you interact with our website and services.
                    By using our website, you consent to the data practices described in this policy.
                </motion.p>

                {sections.map((section, index) => (
                    <motion.section
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <motion.h2
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="text-2xl font-semibold mb-2 text-indigo-700"
                        >
                            {section.title}
                        </motion.h2>

                        {section.subsections ? section.subsections.map((subsection, subIndex) => (
                            <motion.div key={subIndex}>
                                <motion.h3
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1 }}
                                    className="text-lg font-medium text-gray-800"
                                >
                                    {subsection.subtitle}
                                </motion.h3>
                                <motion.ul
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1, staggerChildren: 0.2 }}
                                    className="list-disc list-inside space-y-2 text-gray-700"
                                >
                                    {subsection.items.map((item, itemIndex) => (
                                        <motion.li
                                            key={itemIndex}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            {item}
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            </motion.div>
                        )) : null}

                        {section.items ? (
                            <motion.ul
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, staggerChildren: 0.2 }}
                                className="list-disc list-inside space-y-2 text-gray-700"
                            >
                                {section.items.map((item, itemIndex) => (
                                    <motion.li
                                        key={itemIndex}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        {item}
                                    </motion.li>
                                ))}
                            </motion.ul>
                        ) : null}

                        {section.content && (
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                                className="text-gray-700"
                            >
                                {section.content}
                            </motion.p>
                        )}
                    </motion.section>
                ))}
            </div>
        </div>
    );
};

export default PrivacyPolicy;
