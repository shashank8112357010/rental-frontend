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
    <div className="bg-black p-4 rounded-lg border-2 border-white  shadow-md mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-white">Filter Vehicles</h2>
        <button
          onClick={handleClearFilters}
          className="text-xs text-white  border-2 border-gray-300 px-2 py-1 rounded "
        >
          Clear All
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Type Filter */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-white">Type</label>
          <select
            name="type"
            value={filters.type || ""}
            onChange={(e) => handleFilterChange("type", e.target.value)}
            className="w-full p-3 border border-gray-300 bg-transparent text-white rounded-lg shadow-sm "
          >
            <option className='text-gray-900 bg-transparent p-2 ' value="">All Types</option>
            {filterOptions.types.map((type, index) => (
              <option className='text-gray-900 bg-transparent p-2 ' key={index} value={type}>{type}</option>
            ))}
          </select>
        </div>

        {/* Sort Order Dropdown */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-white">Sort By</label>
          <select
            value={filters.sortOrder || ""}
            onChange={(e) => handleFilterChange("sortOrder", e.target.value)}
            className="w-full p-3 border border-gray-300 bg-transparent text-white rounded-lg shadow-sm "
          >
            <option className='text-gray-900 bg-transparent p-2 ' value="">Select</option>
            <option className='text-gray-900 bg-transparent p-2 ' value="lowToHigh">Low to High</option>
            <option className='text-gray-900 bg-transparent p-2 ' value="highToLow">High to Low</option>
          </select>
        </div>

        {/* Price Range Slider */}
        {/* <div className="space-y-2">
          <label className="text-sm font-semibold text-white">Price Range</label>
          <div className="flex justify-between items-center text-sm font-medium text-white">
            <span>₹{filters.priceRange ? filters.priceRange[0] : 0}</span>
            <span>₹100000</span>
          </div>
          <input
            type="range"
            name="priceRange"
            min="0"
            max="100000"
            step="100"
            value={filters.priceRange[0]}
            onChange={handleRangeChange}
            className="w-full h-2 bg-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
          />
        </div> */}

        {/* Location Filter */}
        {/* Location Filter (Updated) */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-white">Location</label>
          <select
            name="location"
            value={filters.location || ""}
            onChange={(e) => handleFilterChange("location", e.target.value)}
            className="w-full p-3 border border-gray-300 bg-transparent text-white rounded-lg shadow-sm "
          >
            <option className='text-gray-900 bg-transparent p-2 ' value="">All Locations</option>
            {filterOptions.locations.map((location, index) => (
              <option className='text-gray-900 bg-transparent p-2 ' key={index} value={location}>{location}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default VehicleFilters;
