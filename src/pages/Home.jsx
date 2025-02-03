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

  return (
    <>
      <div className='space-y-8 px-4 md:mt-8 md:px-8 lg:px-16 mt-44'>

        <h1 className="text-2xl sm:text-4xl text-center lg:text-5xl font-bold text-white mb-4">
          Discover Your Ideal Stay, Ride, or Study Support
        </h1>
        <p className="text-md sm:text-xl text-white max-w-2xl mx-auto">
          Explore our range of quality accommodations, reliable vehicles, and expert academic assistance to suit your needs.
        </p>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 md:p-0 pb-8 mt-12"
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
        </div>

      </div >
    </>
  );
};

const CategoryCard = ({ title, description, icon, link, image }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl  shadow-lg hover:shadow-xl transition-shadow" >
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
    </div>
  );
};

export default Home;
