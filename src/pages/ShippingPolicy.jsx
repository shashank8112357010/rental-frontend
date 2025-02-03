import React from 'react';
import { motion } from 'framer-motion';

const ShippingPolicy = () => {
    const sections = [
        {
            title: "International Shipping",
            content: "For international buyers, orders are shipped and delivered through registered international courier companies and/or international speed post only."
        },
        {
            title: "Domestic Shipping",
            content: "For domestic buyers, orders are shipped through registered domestic courier companies and/or speed post only."
        },
        {
            title: "Shipping Timeline",
            content: "Orders are shipped within 1-2 days or as per the delivery date agreed at the time of order confirmation. Delivery is subject to the courier company/post office norms."
        },
        {
            title: "Liability for Delivery Delay",
            content: "Suprit Shiva Mandolikar is not liable for any delay in delivery by the courier company/postal authorities and only guarantees to hand over the consignment to the courier company or postal authorities within 1-2 days from the date of the order and payment or as per the delivery date agreed at the time of order confirmation."
        },
        {
            title: "Delivery Address and Confirmation",
            content: "Delivery of all orders will be to the address provided by the buyer. Delivery of our services will be confirmed on your mail ID as specified during registration."
        },
        {
            title: "Customer Support",
            content: "For any issues in utilizing our services, you may contact our helpdesk on 9370753347 or shrutiag2525@gmail.com."
        }
    ];

    return (
        <div className="h-fit pt-52 md:pt-16">
            {/* Page Heading */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-3xl md:text-3xl font-bold text-center text-white mb-6"
            >
                Shipping Policy
            </motion.h1>

            <div className="p-6 space-y-8">
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
                            className="text-xl md:text-2xl font-semibold font-serif mb-2 text-white"
                        >
                            {section.title}
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="text-white"
                        >
                            {section.content}
                        </motion.p>
                    </motion.section>
                ))}
            </div>
        </div>
    );
};

export default ShippingPolicy;
