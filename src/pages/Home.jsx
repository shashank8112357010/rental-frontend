import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Bike, BookOpenIcon, SearchIcon, FileTextIcon, Building2Icon } from 'lucide-react';
import { motion } from 'framer-motion';
import AcademicImg from '../assets/rentalimg/Academic.png'
import ResearchImg from '../assets/Research.jpg'
import PropertiesImg from '../assets/Properties.avif'
import VehiclesImg from '../assets/Vehicles.avif'
import plagiarismImg from '../assets/plagiarism.webp'
import internshipImg from '../assets/internship.webp'
import { FaGraduationCap } from 'react-icons/fa';
import { LuBookOpenCheck } from 'react-icons/lu';

const Home = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  // const steps = [
  //   {
  //     category: 'Property',
  //     steps: [
  //       'Search for properties that suit your needs.',
  //       'View detailed property descriptions and amenities.',
  //       'Contact the owner or agent to schedule a visit.',
  //       'Visit the property and review the location.',
  //       'Confirm the booking and finalize the details.',
  //     ],
  //   },
  //   {
  //     category: 'Vehicle',
  //     steps: [
  //       'Browse through available vehicles.',
  //       'Check vehicle details and pricing.',
  //       'Select your preferred vehicle.',
  //       'Schedule a test ride or delivery.',
  //       'Confirm your booking and enjoy the ride.',
  //     ],
  //   },
  //   {
  //     category: 'Academic',
  //     steps: [
  //       'Explore available academic courses.',
  //       'Read course descriptions and reviews.',
  //       'Choose a course that fits your goals.',
  //       'Register and complete the payment process.',
  //       'Start learning and achieve your goals.',
  //     ],
  //   },
  // ];

  return (
    <>
      <motion.div
        className="space-y-8 px-4 md:mt-8 md:px-8 lg:px-16 mt-44"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.header
          className="text-center"
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Find Your Perfect Space or Ride
          </h1>
          <p className="text-md sm:text-xl text-white max-w-2xl mx-auto">
            Browse through our selection of quality accommodations and vehicles for rent
          </p>
        </motion.header>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 md:p-0 pb-8 mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          <CategoryCard
            title="Properties"
            description="Find the perfect flat or PG accommodation"
            icon={<Building2 className="h-8 w-8" />}
            link="/properties"
            image={PropertiesImg}
          />
          <CategoryCard
            title="Vehicles"
            description="Rent bikes and scooters for your daily commute"
            icon={<Bike className="h-8 w-8" />}
            link="/vehicles"
            image={VehiclesImg}

          />
          <CategoryCard
            title="Notes"
            description="Explore a variety of academic courses designed to enhance your knowledge "
            icon={<BookOpenIcon className="h-8 w-8" />}
            link="/notes"
            image={AcademicImg}
          />
          <CategoryCard
            title="Research Assistance"
            description="Get expert guidance for your academic research and projects"
            icon={<SearchIcon className="h-8 w-8" />}
            link="/research"
            image={ResearchImg}
          />
          <CategoryCard
            title="Plagiarism Check"
            description="Ensure originality with professional plagiarism detection tools"
            icon={<LuBookOpenCheck className="h-8 w-8" />}
            link="/plagiarism"
            image={plagiarismImg}
          />

          <CategoryCard
            title="Internship"
            description="Find exciting internship opportunities to kickstart your career"
            icon={<FaGraduationCap className="h-8 w-8" />}
            link="/internship"
            image={internshipImg}
          />
        </motion.div>

      </motion.div >
    </>
  );
};

const CategoryCard = ({ title, description, icon, link, image }) => {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl  shadow-lg hover:shadow-xl transition-shadow"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5 }}
    >
      <Link to={link}>
        <div className="absolute inset-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
        </div>
        <div className="relative p-6 sm:p-8 text-white">
          <div className="flex items-center mb-4">
            <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">{icon}</div>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold mb-2">{title}</h3>
          <p className="text-white/90">{description}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default Home;
