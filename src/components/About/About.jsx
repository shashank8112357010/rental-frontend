import React from "react";
import { motion } from "framer-motion";
// import img from "../../assets/aboutimage1.jpeg";
// import harley from "../../assets/harley.jpg"
import MakingStudent from "../../assets/rentalimg/MakingStudent.png"
import UnderstandStudents from "../../assets/rentalimg/UnderstandStudents.png"
import SeamlessStudent from "../../assets/rentalimg/SeamlessStudent.png"

export default function About() {
  return (
    <div className="h-fit pb-16 mt-8  ">
      {/* Header Section */}
      <div className=" flex items-center justify-center">
        <h1 className="text-2xl md:text-3xl font-serif  font-bold text-black">
          Welcome to your all-in-one platform designed especially for students in Pune!
        </h1>
      </div>

      {/* Main Content Section */}
      <div className="px-6 flex flex-col md:flex-row mt-12">
        {/* Image Section */}
        <div className="md:w-1/2 flex">
          <motion.img
            src={MakingStudent}
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
            className="text-xl md:text-2xl font-serif  font-bold text-black mb-6"
          >
            WHAT: Making Student Life Simple
          </motion.h1>

          <div className="space-y-6">
            {[
              "We’re here to simplify every aspect of your student journey by offering:",

              "Academic Assistance: Stay ahead in your studies with access to research support, comprehensive notes, and internship leads tailored to your academic and career goals. Whether it’s preparing for exams or finding the right professional exposure, we’ve got your back.",

              "Accommodation Solutions: Tired of hunting for PGs and flats? We connect you with verified brokers who understand your needs and help you find a place that suits your lifestyle, location preferences, and budget. Say goodbye to unreliable listings and endless searches!",

              "Rides on Rent: Need a quick and affordable way to get around Pune? We make commuting easy by linking you with trusted providers offering scooty and bike rentals. Convenience and affordability rolled into one!",
            ].map((text, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.3 }}
                className="text-md text-gray-900 font-serif leading-relaxed"
              >
                {text}
              </motion.p>
            ))}
          </div>
        </div>
      </div>

      {/*2nd Main Content Section */}
      <div className="px-6 flex flex-col md:flex-row  mt-20">

        {/* Text Section */}
        <div className="md:w-1/2 mt-8 md:mt-0 md:ml-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-xl md:text-2xl font-serif  font-bold text-gray-900 mb-6"
          >
            WHY: Because We Understand Students
          </motion.h1>

          <div className="space-y-6">
            {[
              "We know the challenges of being a student in Pune and aim to address them with solutions that work:",

              "Overwhelming Academics: Managing coursework, projects, and research is tough, especially when resources are limited. That’s why we offer the right tools to make your academic life more manageable.",

              "Accommodation Woes: The search for a comfortable and affordable place to live can be daunting. We remove the stress by connecting you with reliable options that match your expectations.",

              "Cost-Effective Commuting: Getting around Pune shouldn’t be expensive or inconvenient. Our rental services ensure you can navigate the city without breaking the bank.",

              "We’re here to simplify your life, saving you time, effort, and energy so you can focus on what really matters—your goals and aspirations.",
            ].map((text, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.3 }}
                className="text-md text-gray-900 font-serif leading-relaxed"
              >
                {text}
              </motion.p>
            ))}
          </div>
        </div>
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <motion.img
            src={UnderstandStudents}
            alt="Services"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="rounded-lg shadow-lg w-full md:w-5/6 lg:w-4/5 h-auto object-cover"
          />
        </div>
      </div>
      {/*3nd Main Content Section */}
      <div className="px-6 flex flex-col md:flex-row mt-20">
        {/* Image Section */}
        <div className="md:w-1/2 flex">
          <motion.img
            src={SeamlessStudent}
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
            className="text-xl md:text-2xl font-serif  font-bold text-gray-900 mb-6"
          >
            HOW: A Seamless Student-Centric Approach
          </motion.h1>

          <div className="space-y-6">
            {[
              "Streamlined Services: From connecting you with brokers and renters to offering academic resources, we make sure you get quick and reliable access to everything you need, all in one place.",

              "Personalized Assistance: Our services are tailored to suit the diverse needs of Pune’s student community. Whether it’s finding niche academic help or specific rental requirements, we’re here to provide customized solutions.",

              "Trusted Network: We’ve partnered with reputable providers and brokers to ensure you always receive reliable, trustworthy, and quality services.",

              "Student-Centric Design: Every feature of our platform is designed with students in mind—ensuring ease of use, affordability, and efficiency.",

              "Let us take the hassle out of your student life. Join us today and make your time in Pune as smooth, exciting, and rewarding as it’s meant to be!",
            ].map((text, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.3 }}
                className="text-md text-gray-900 font-serif leading-relaxed"
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
