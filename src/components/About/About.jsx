import React from "react";
import { motion } from "framer-motion";
// import img from "../../assets/aboutimage1.jpeg";
import harley from "../../assets/harley.jpg"

export default function About() {
  return (
    <div className="h-fit pb-16 shadow-lg bg-white">
      {/* Header Section */}
      <div className="h-32 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-black">
          Who We Are
        </h1>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-6 md:px-12 lg:px-16 flex flex-col md:flex-row items-center mt-12">
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <motion.img
           src={harley}
           alt="Services"
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1 }}
           className="rounded-lg shadow-lg w-full md:w-5/6 lg:w-4/5 h-auto object-cover"
          />
</div>
        {/* Text Section */}
        <div className="md:w-1/2 mt-8 md:mt-0 md:ml-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold text-gray-900 mb-6"
          >
            Empowering Your Journey
          </motion.h1>

          <div className="space-y-6">
            {[
              "Welcome to RentEasy Services, your one-stop solution for simplifying your lifestyle needs. Whether you’re searching for a comfortable and affordable PG accommodation, looking to buy or sell study notes, or renting a bike or scooty for your daily commute, we have got you covered.",

              "Our mission is to make your life easier by providing reliable and accessible services. With our PG Rent offerings, you can find safe and affordable accommodations in prime locations. Our Notes Selling platform connects learners, making high-quality educational resources accessible to all. For those on the move, our Bike and Scooty rental services offer hassle-free transportation solutions.",
            ].map((text, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.3 }}
                className="text-xl text-gray-600 leading-relaxed"
              >
                {text}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
