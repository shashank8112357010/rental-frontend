import React from "react";
import { motion } from "framer-motion";
import UnderstandStudents from "../../assets/rentalimg/UnderstandStudents.png";

export default function About() {
  return (
    <div className="h-fit pb-16 md:mt-8 mt-44">
      {/* Header Section */}
      <div className="flex items-center justify-center">
        <h1 className="text-2xl md:text-3xl text-center font-serif font-bold text-white">
          Welcome to GradCommune,
        </h1>
      </div>

      <div className="px-6 flex flex-col md:flex-row mt-20">
        <div className="space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-[18px] text-white font-serif leading-relaxed"
          >
            GradCommune is a dynamic platform designed to revolutionize the student experience. Our mission is to simplify the journey from campus to career by connecting students with essential resources. From academic support to housing and transportation, we offer a one-stop solution tailored to student needs.
          </motion.p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="px-6 grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
        {/* Text Section */}
        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-xl md:text-2xl font-serif font-bold text-white mb-6"
          >
            Our platform offers six key services:
          </motion.h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              "Research Assistance: Get expert guidance on research topics, literature reviews, and case analyses, ensuring academic excellence.",
              "Notes: Access high-quality, well-structured study materials designed to support effective exam preparation.",
              "Internship Opportunities: Discover practical work experiences that enhance your career prospects and skill development.",
              "Plagiarism & AI Check: Utilize Turnitin plagiarism checks and AI detection tools to ensure originality and maintain academic integrity.",
              "PG/Flat Rentals: Find budget-friendly accommodations that meet your needs for comfort and convenience.",
              "Scooty/Bike Rentals: Flexible rental options for daily, weekly, or monthly commuting solutions."
            ].map((text, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                className="text-md text-white font-serif leading-relaxed bg-gray-800 p-4 rounded-lg shadow-md"
              >
                {text}
              </motion.p>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
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


      <div className="px-6 flex flex-col md:flex-row gap-8 mt-20">
        {/* Vision Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 bg-gray-800 p-6 rounded-xl shadow-lg"
        >
          <h2 className="text-xl md:text-2xl font-serif font-bold text-white mb-4">
            Vision
          </h2>
          <p className="text-md text-white font-serif leading-relaxed">
            To revolutionize student life by offering a one-stop platform that
            empowers students to excel academically, live comfortably, and move
            freely — all with ease and convenience.
          </p>
        </motion.div>

        {/* Mission Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="md:w-1/2 bg-gray-800 p-6 rounded-xl shadow-lg"
        >
          <h2 className="text-xl md:text-2xl font-serif font-bold text-white mb-4">
            Mission
          </h2>
          <p className="text-md text-white font-serif leading-relaxed">
            To be the ultimate student companion, simplifying every part of
            college life with smart, affordable solutions for studying, living,
            and commuting.
          </p>
        </motion.div>
      </div>

      {/* Call to Action */}
      <div className="px-6 mt-12 text-center">
        <h2 className="text-xl md:text-2xl font-serif font-bold text-white mb-4">
          Join GradCommune today and make student life effortless.
        </h2>
        <p className="text-md text-white font-serif leading-relaxed">
          Focus on what truly matters while we take care of the rest.
        </p>
      </div>
    </div>
  );
}
