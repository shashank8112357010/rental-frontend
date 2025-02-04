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
            link: '/blog/blogsDetails1',
        },
        {
            id: 2,
            title: 'Ride Easy, Roam Freely: Your Perfect Two-Wheel Partner Awaits!',
            description: 'Tired of walking long distances or waiting endlessly for public transport? We get it—student life demands speed, convenience, and freedom!',
            image: RideEasy,
            link: '/blog/blogsDetails2',
        },
        {
            id: 3,
            title: "Crack the Code of Academic Success with Us!",
            description: 'Struggling to keep up with notes, deadlines, and research? We’ve got your back! Our platform is built to make your academic journey smoother, smarter, and stress-free.',
            image: Crack,
            link: '/blog/blogsDetails3',
        },
    ];

    return (
        // <div className="h-fit pb-16 md:mt-8 mt-44">
        <section className="w-full px-4 md:px-8 lg:px-16 py-12  md:mt-8 mt-44">
            <div className="text-center mb-12">
                <h1 className="text-2xl md:text-4xl font-bold text-gray-100">Our Blogs</h1>
                <p className="text-gray-100 mt-2 text-sm md:text-base">
                    Explore our latest insights and tips designed to make your journey effortless.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogData.map((blog) => (
                    <div key={blog.id} className="border-2 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
                        <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-48 md:h-56 object-cover"
                        />
                        <div className="p-6">
                            <h2 className="text-lg md:text-xl font-semibold text-gray-100 line-clamp-2">{blog.title}</h2>
                            <p className="text-gray-100 text-sm md:text-base mt-2 line-clamp-3">{blog.description}</p>
                            <Link to={blog.link}>
                                <button className="mt-4 border text-white px-4 py-2 text-sm md:text-base rounded-md  transition duration-300">
                                    Read more
                                </button>
                            </Link>

                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Blogs;
