import React, { useState } from 'react';

const PropertyFilters = ({ propertyType, location, filters, onFilterChange, onClearFilters }) => {
  const [furnishOptions, setFurnishOptions] = useState({
    type: "",
    data: []
  });

  const handleFilterChange = (name, value) => {
    const updatedFilters = { ...filters, [name]: value };
    onFilterChange(updatedFilters);

    if (name === 'type') {
      if (['FLAT'].includes(value)) {
        setFurnishOptions({
          type: "FLAT",
          data: ['Semi-Furnished', 'Fully-Furnished', 'Unfurnished']
        });
      } else if (['PG'].includes(value)) {
        setFurnishOptions({
          type: "PG",
          data: ['Single', 'Double', 'Triple', 'Four']
        });
      } else {
        setFurnishOptions({
          type: "",
          data: []
        });
      }
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Filter Properties</h2>
        <button
          onClick={onClearFilters}
          className="text-xs bg-gray-100 border border-gray-300 px-2 py-1 rounded hover:bg-gray-200"
        >
          Clear All
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Property Type Filter */}
        <div>
          <label className="text-xs font-medium text-gray-600">Property Type</label>
          <select
            value={filters.type || ""}
            onChange={(e) => handleFilterChange('type', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">All Types</option>
            {propertyType.map((type, index) => (
              <option key={index} value={type}>{type}</option>
            ))}
          </select>
        </div>

        {/* Furnish Type Filter */}
        {furnishOptions.data.length > 0 && (
          <div>
            <label className="text-xs font-medium text-gray-600">{furnishOptions.type === 'PG' ? 'Occupency' : 'Furnish Type'}</label>
            <select
              value={filters.furnishType || ""}
              onChange={(e) => handleFilterChange('furnishType', e.target.value)}
             className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">All Types</option>
              {furnishOptions.data.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
          </div>
        )}

        {/* Price Range */}
        <div>
          <label className="text-xs font-medium text-gray-600">Price Range (₹)</label>
          <div className="mt-1 flex items-center justify-between text-sm text-gray-500">
            <span>₹{filters.priceRange[0]}</span>
            <span>₹{filters.priceRange[1]}</span>
          </div>
          <input
            type="range"
            min="500"
            max="100000"
            step="500"
            value={filters.priceRange[0]}
            onChange={(e) => handleFilterChange('priceRange', [parseInt(e.target.value), filters.priceRange[1]])}
            className="w-full"
          />
        </div>

        {/* Location Filter */}
        <div>
          <label className="text-xs font-medium text-gray-600">Location</label>
          <select
            value={filters.location || ""}
            onChange={(e) => handleFilterChange('location', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">All Locations</option>
            {location.map((loc, index) => (
              <option key={index} value={loc}>{loc}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default PropertyFilters;
