import React from 'react';
import { motion } from 'framer-motion';

const Refund = () => {
    const sections = [
        {
            title: "1. Cancellation Policy",
            content: "Cancellations will be considered only if the request is made within 1-2 days of placing the order. However, the cancellation request may not be entertained if the orders have been communicated to the vendors/merchants and they have initiated the process of shipping them."
        },
        {
            title: "2. Non-Cancellable Products",
            content: "Suprit Shiva Mandolikar does not accept cancellation requests for perishable items like flowers, eatables, etc. However, refund/replacement can be made if the customer establishes that the quality of product delivered is not good."
        },
        {
            title: "3. Damaged or Defective Items",
            content: "In case of receipt of damaged or defective items, please report the same to our Customer Service team. The request will be entertained once the merchant has checked and determined the issue at their own end. This should be reported within 1-2 days of receipt of the products."
        },
        {
            title: "4. Product Mismatch",
            content: "In case you feel that the product received is not as shown on the site or as per your expectations, you must bring it to the notice of our customer service within 1-2 days of receiving the product. The Customer Service Team after looking into your complaint will take an appropriate decision."
        },
        {
            title: "5. Refund Process",
            content: "In case of any Refunds approved by Suprit Shiva Mandolikar, it’ll take 3-5 days for the refund to be processed to the end customer."
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
                Refund & Cancellation Policy
            </motion.h1>

            <div className="p-6 space-y-8">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="text-white font-serif"
                >
                    At Suprit Shiva Mandolikar, we believe in helping our customers as much as possible, which is why we have a liberal cancellation and refund policy. Below are the details regarding order cancellations, refunds, and returns.
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

export default Refund;
