import React from 'react';

const Blogs = () => {
    const blogData = [
        {
            id: 1,
            title: 'Understanding the Basics of React',
            description: 'A beginner’s guide to learning React, one of the most popular JavaScript libraries.',
            // image: 'https://via.placeholder.com/400x300',
            link: '#',
        },
        {
            id: 2,
            title: 'CSS Flexbox Layout: A Deep Dive',
            description: 'Explore the power of CSS Flexbox to create responsive layouts with ease.',
            // image: 'https://via.placeholder.com/400x300',
            link: '#',
        },
        {
            id: 3,
            title: 'JavaScript ES6 Features You Should Know',
            description: 'An overview of the key features introduced in ES6 that improve JavaScript development.',
            // image: 'https://via.placeholder.com/400x300',
            link: '#',
        },
    ];

    return (
        <div>
            <div className="text-center mb-12">
                <h1 className="text-2xl md:text-4xl font-bold text-gray-900">Our Blogs</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogData.map((blog) => (
                    <div key={blog.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                        {/* <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" /> */}
                        <div className="p-6">
                            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">{blog.title}</h2>
                            <p className="text-gray-600 mt-2">{blog.description}</p>
                            {/* <a href={blog.link} className="text-indigo-600 mt-4 inline-block hover:underline">
                                Read more
                            </a> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blogs;
