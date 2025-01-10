import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="h-fit pb-16  ">
            <header className="bg-indigo-600 text-white py-4 px-6">
                <h1 className="text-3xl font-bold">Privacy Policy</h1>
            </header>
            <div className="p-6 space-y-8">
                <p className="text-gray-700">
                    At GradCommune, we are committed to protecting your privacy and ensuring that your personal
                    information is handled in a safe and responsible manner. This Privacy Policy outlines how we
                    collect, use, disclose, and protect your data when you interact with our website and services.
                    By using our website, you consent to the data practices described in this policy.
                </p>

                <section>
                    <h2 className="text-2xl font-semibold mb-2 text-indigo-700">1. Information We Collect</h2>
                    <h3 className="text-lg font-medium text-gray-800">1.1 Personal Information</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Registration Details: Name, email, phone number, and contact information.</li>
                        <li>
                            Payment Information: Credit/debit card details, billing addresses, and transaction
                            details for payments.
                        </li>
                        <li>
                            Identity Verification: Government ID, driving license, or other documents for rentals or
                            bookings.
                        </li>
                    </ul>
                    <h3 className="text-lg font-medium text-gray-800">1.2 Non-Personal Information</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>
                            Technical Information: Device details, browser type, IP address, and browsing behavior.
                        </li>
                        <li>
                            Usage Data: Pages visited, time spent on the site, and referral sources for analysis.
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-2 text-indigo-700">2. How We Use Your Information</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>To process and manage bookings and transactions.</li>
                        <li>To personalize your experience and improve our website.</li>
                        <li>To securely process payments and verify your identity.</li>
                        <li>To send newsletters, promotional offers, and updates.</li>
                        <li>To comply with legal obligations and protect user rights.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-2 text-indigo-700">3. How We Share Your Information</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>
                            Service Providers: Shared with third-party providers for payments, support, or analytics.
                        </li>
                        <li>
                            Business Partners: Shared with landlords or rental agencies for service facilitation.
                        </li>
                        <li>Legal Obligations: Disclosed if required by law or to protect rights.</li>
                        <li>
                            Corporate Transactions: Transferred as part of business deals, subject to this policy.
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-2 text-indigo-700">4. Data Security</h2>
                    <p className="text-gray-700">
                        We implement SSL encryption, access control, and regular monitoring to safeguard your data.
                        However, no system is entirely secure. In the event of a data breach, we will notify you as
                        required by law.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-2 text-indigo-700">5. Your Rights</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Access and Correction: Request and correct your personal data.</li>
                        <li>
                            Data Portability: Request a copy of your data in a commonly used format.
                        </li>
                        <li>
                            Deletion: Request deletion of data no longer needed, except for legal obligations.
                        </li>
                        <li>
                            Opt-Out: Unsubscribe from promotional communications while receiving transactional
                            updates.
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-2 text-indigo-700">
                        6. Cookies and Tracking Technologies
                    </h2>
                    <p className="text-gray-700">
                        Cookies help us analyze usage and improve the user experience. You can control cookies
                        through browser settings but disabling them may limit website functionality.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-2 text-indigo-700">7. Third-Party Links</h2>
                    <p className="text-gray-700">
                        Our site may link to external websites. We are not responsible for their privacy practices or
                        content. Please review their privacy policies.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-2 text-indigo-700">8. Children's Privacy</h2>
                    <p className="text-gray-700">
                        Our services are not intended for users under 18 without parental consent. If we discover
                        data from a child under 13, it will be deleted immediately.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-2 text-indigo-700">9. Changes to the Privacy Policy</h2>
                    <p className="text-gray-700">
                        Updates to this policy will be posted here. Continued use of our services after changes
                        indicates consent to the updated policy.
                    </p>
                </section>
            </div>

        </div>
    );
};

export default PrivacyPolicy;
