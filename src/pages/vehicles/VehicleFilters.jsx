import React, { useState, useEffect } from 'react';

const VehicleFilters = ({ filters, onFilterChange, filterOptions }) => {
  const handleFilterChange = (name, value) => {
    const updatedFilters = { ...filters, [name]: value };
    onFilterChange(updatedFilters);
  };

  const handleRangeChange = (e) => {
    const newPriceRange = [...filters.priceRange];
    newPriceRange[0] = e.target.value;
    onFilterChange({ ...filters, priceRange: newPriceRange });
  };

  const handleClearFilters = () => {
    onFilterChange({
      type: "",
      priceRange: [0, 100000],
      location: "",
      sortOrder: ""
    });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg mb-8 max-w-screen-xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Filter Vehicles</h2>
        <button
          onClick={handleClearFilters}
          className="text-sm bg-gray-100 border border-gray-300 px-3 py-1 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Clear All
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {/* Type Filter */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Type</label>
          <select
            name="type"
            value={filters.type || ""}
            onChange={(e) => handleFilterChange("type", e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">All Types</option>
            {filterOptions.types.map((type, index) => (
              <option key={index} value={type}>{type}</option>
            ))}
          </select>
        </div>

        {/* Sort Order Dropdown */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Sort By</label>
          <select
            value={filters.sortOrder || ""}
            onChange={(e) => handleFilterChange("sortOrder", e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select</option>
            <option value="lowToHigh">Low to High</option>
            <option value="highToLow">High to Low</option>
          </select>
        </div>

        {/* Price Range Slider */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Price Range</label>
          <div className="flex justify-between items-center text-sm font-medium text-gray-600">
            <span>₹{filters.priceRange ? filters.priceRange[0] : 0}</span>
            <span>₹100000</span>
          </div>
          <input
            type="range"
            name="priceRange"
            min="0"
            max="100000"
            step="100"
            value={filters.priceRange[0]}  // Use the first value of priceRange
            onChange={handleRangeChange}  // handle range change for the first value
            className="w-full h-2 bg-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
          />
        </div>

        {/* Location Filter */}
        {/* <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Location</label>
          <select
            name="location"
            value={filters.location || ""}
            onChange={(e) => handleFilterChange("location", e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">All Locations</option>
            {filterOptions.locations.map((location, index) => (
              <option key={index} value={location}>{location}</option>
            ))}
          </select>
        </div> */}
      </div>
    </div>
  );
};

export default VehicleFilters;
