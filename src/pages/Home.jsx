import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Bike, BookOpenIcon } from 'lucide-react';
import TopServices from '../components/TopServices/TopServices';
import Blogs from './Blogs/Blogs';
// import About from '../components/About/About';



const Home = () => {
  return (
    <>
      <div className="space-y-8 px-4 md:px-8 lg:px-16">
        <header className="text-center">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Find Your Perfect Space or Ride
          </h1>
          <p className="text-md sm:text-xl  text-gray-600 max-w-2xl mx-auto">
            Browse through our selection of quality accommodations and vehicles for rent
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
          <CategoryCard
            title="Properties"
            description="Find the perfect flat or PG accommodation"
            icon={<Building2 className="h-8 w-8" />}
            link="/properties"
            image="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=1000"
          />
          <CategoryCard
            title="Vehicles"
            description="Rent bikes and scooters for your daily commute"
            icon={<Bike className="h-8 w-8" />}
            link="/vehicles"
            image="https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=1000"
          />
          <CategoryCard
            title="Academic"
            description="Explore a variety of academic courses designed to enhance your knowledge "
            icon={<BookOpenIcon className="h-8 w-8" />}
            link="/academic"
            image="https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=1000"
          />
        </div>

        <section className="mt-16">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6 text-center">
            How It Works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Browse Listings',
                description: 'Explore our curated selection of properties and vehicles',
              },
              {
                title: 'Book Appointment',
                description: 'Schedule a viewing or test ride at your convenience',
              },
              {
                title: 'Confirm Booking',
                description: 'Complete the booking process with our verified owners',
              },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center mb-4">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}

          </div>
        </section>

        {/* <TopServices /> */}
        <Blogs />
        {/* <About /> */}
      </div>

    </>

  );
};

const CategoryCard = ({ title, description, icon, link, image }) => {
  return (
    <Link
      to={link}
      className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow"
    >
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
  );
};

export default Home;
