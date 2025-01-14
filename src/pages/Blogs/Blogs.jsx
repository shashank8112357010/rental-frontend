import React from 'react';
import { Link } from 'react-router-dom';
import Finding from '../../assets/rentalimg/Finding.png';
import RideEasy from '../../assets/rentalimg/RideEasy.png';
import Crack from '../../assets/rentalimg/Crack.png';

const Blogs = () => {
    const blogData = [
        {
            id: 1,
            title: "Finding Your Perfect Stay, Made Effortless!",
            description: 'Say goodbye to the chaos of house-hunting! Discover how our platform makes finding your perfect stay quick and easy.',
            image: Finding,
            link: '/blog/blogs1',
        },
        {
            id: 2,
            title: 'Ride Easy, Roam Freely: Your Perfect Two-Wheel Partner Awaits!',
            description: 'Tired of walking long distances or waiting endlessly for public transport? We get it—student life demands speed, convenience, and freedom!',
            image: RideEasy,
            link: '/blog/blogs2',
        },
        {
            id: 3,
            title: "Crack the Code of Academic Success with Us!",
            description: 'Struggling to keep up with notes, deadlines, and research? We’ve got your back! Our platform is built to make your academic journey smoother, smarter, and stress-free.',
            image: Crack,
            link: '/blog/blogs3',
        },
    ];

    return (
        <div className='w-full h-auto px-4 md:px-8 lg:px-16 py-8 mt-44 md:mt-0'>
            <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-white">Our Blogs</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogData.map((blog) => (
                    <div key={blog.id} className="bg-white pb-8 rounded-lg shadow-lg overflow-hidden relative flex flex-col">
                        <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-56 sm:h-72 lg:h-80 object-cover transition-all duration-300"
                        />
                        <div className="p-6 flex flex-col flex-grow">
                            <h2 className="text-xl sm:text-xl line-clamp-2 font-semibold text-gray-800">{blog.title}</h2>
                            <p className="text-gray-900 font-serif text-md sm:text-base line-clamp-3 mt-2">{blog.description}</p>
                        </div>
                        <Link to={blog.link}>
                            <div className='flex justify-center items-center'>
                                <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition duration-300">
                                    Read more
                                </button>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blogs;
