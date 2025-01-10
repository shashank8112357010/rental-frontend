import React from 'react';

const TermsConditions = () => {
    return (
        <div className="h-fit pb-16  ">
            <header className="bg-indigo-600 text-white py-4 px-6">
                <h1 className="text-3xl font-bold">Terms and Conditions</h1>
            </header>
            <div className="p-6 space-y-8">
                <section>
                    <h2 className="text-2xl font-semibold mb-2 text-indigo-600">Scooty & Bike Rental</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Users must possess a valid driving license to rent any vehicle from our platform.</li>
                        <li>A security deposit may be required, which will be refunded after the rental period, subject to the condition of the vehicle.</li>
                        <li>You are responsible for ensuring the vehicle’s safety and returning it in the condition you received it, except for normal wear and tear.</li>
                        <li>The users are not allowed to take the vehicles outside the city.</li>
                        <li>The rented vehicle should be used solely for personal purposes and not for commercial or illegal activities.</li>
                        <li>Users must comply with local traffic rules and safety regulations at all times.</li>
                        <li>Any damage caused to the vehicle during the rental period will be borne by the user, and repair charges may apply.</li>
                        <li>We are not responsible for any accidents, traffic violations, or other incidents occurring during the rental period.</li>
                        <li>We reserve the right to deny service to anyone who fails to meet the eligibility requirements or violates these terms.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-2 text-indigo-600">Flats & PG's Rental</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>We are a platform that connects tenants and landlords/PG owners. We do not guarantee the accuracy of property listings.</li>
                        <li>It is the responsibility of the user to verify the authenticity of the properties listed.</li>
                        <li>Tenants must ensure timely payments as agreed with the landlord. Any disputes regarding payment, maintenance, or services should be resolved between the tenant and the property owner.</li>
                        <li>We are not liable for any disputes, damages, or issues arising between tenants and landlords.</li>
                        <li>Users must act in good faith and provide accurate information while applying for rental properties.</li>
                        <li>Any fraudulent activity will result in permanent ban from the platform.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-2 text-indigo-600">Notes, Research Assistance, and Internships</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>The study material and notes provided on our platform are for educational purposes only.</li>
                        <li>Users are not allowed to redistribute or resell any content provided through our website without prior consent.</li>
                        <li>Our research assistance services are meant to guide students in their work and not to provide a finished product. Users are expected to use the assistance ethically and responsibly.</li>
                        <li>We do not guarantee any specific outcomes such as grades or research publication through the use of our services.</li>
                        <li>We provide a platform for students to discover internships. We do not guarantee internship placements.</li>
                        <li>Any disputes between students and internship providers must be resolved between the concerned parties.</li>
                    </ul>
                </section>
            </div>

        </div>
    );
};

export default TermsConditions;
