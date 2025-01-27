import React from "react";
import { useNavigate } from "react-router-dom";

// Import images from the assets folder
import EventManagementImage from "../../assets/pg.jpeg";
import BrandingImage from "../../assets/rentalimg/notes.jpeg";
import harley from "../../assets/rentalimg/harley.jpg";
export default function TopServices() {
  const navigate = useNavigate();

  // Static category data
  const categories = [
    {
      id: 1,
      categoryName: "properties",
      subcategoryImage: EventManagementImage,
    },
    {
      id: 2,
      categoryName: "notes",
      subcategoryImage: BrandingImage,
    },
    {
      id: 3,
      categoryName: "vehicles",
      subcategoryImage: harley,
    },
  ];

  const handleExploreClick = (categoryName) => {
    navigate(`/${categoryName}`);
  };

  return (
    <div className="mt-44 md:mt-0">

      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-2xl md:text-4xl font-bold text-white">
          Explore Our Services
        </h1>
        <p className="text-lg md:text-xl text-white max-w-2xl mx-auto mt-4">
          Discover a range of services designed to meet your lifestyle needs.
        </p>
      </div>
      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.length > 0 ? (
          categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 overflow-hidden"
            >
              {/* Image Section */}
              <div
                className="h-48 sm:h-56 lg:h-64 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${category.subcategoryImage})`,
                }}
              ></div>

              {/* Text Section */}
              <div className="p-6 text-center">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
                  {category.categoryName}
                </h2>
                <button
                  className="mt-4 text-white bg-black py-2 px-4 md:px-6 rounded-lg transition-colors"
                  onClick={() => handleExploreClick(category.categoryName)}
                >
                  Explore
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-lg text-gray-500">
            No services are currently available.
          </p>
        )}
      </div>
    </div>
  );
}
