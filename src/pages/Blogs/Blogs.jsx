import React from 'react';
import { Link } from 'react-router-dom';

const Blogs = () => {
    const blogData = [
        {
            id: 1,
            title: "Finding Your Perfect Stay, Made Effortless!",
            description: 'Say goodbye to the chaos of house-hunting! Discover how our platform makes finding your perfect stay quick and easy.',
            image: 'https://via.placeholder.com/400x300',
            link: '/blog/blogs1',
        },
        {
            id: 2,
            title: 'Ride Easy, Roam Freely: Your Perfect Two-Wheel Partner Awaits!',
            description: 'Tired of walking long distances or waiting endlessly for public transport? We get it—student life demands speed, convenience, and freedom!',
            image: 'https://via.placeholder.com/400x300',
            link: '/blog/blogs2',
        },
        {
            id: 3,
            title: "Crack the Code of Academic Success with Us!",
            description: 'Struggling to keep up with notes, deadlines, and research? We’ve got your back! Our platform is built to make your academic journey smoother, smarter, and stress-free.',
            image: 'https://via.placeholder.com/400x300',
            link: '/blog/blogs3',
        },
    ];

    return (
        <div>
            <div className="text-center mb-12">
                <h1 className="text-2xl md:text-4xl font-bold text-gray-900">Our Blogs</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogData.map((blog) => (
                    <div key={blog.id} className="bg-white pb-8 h-full rounded-lg shadow-lg overflow-hidden relative flex flex-col">
                        <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
                        <div className="p-6 flex flex-col flex-grow">
                            <h2 className="text-xl md:text-2xl line-clamp-2 font-semibold text-gray-800">{blog.title}</h2>
                            <p className="text-gray-600 line-clamp-3 mt-2">{blog.description}</p>
                        </div>
                        {/* Fixed Position for Read More Button */}
                        <Link to={blog.link}>
                            <div className='flex justify-center items-center'>

                                <button className="bg-indigo-600  text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition duration-300">
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
