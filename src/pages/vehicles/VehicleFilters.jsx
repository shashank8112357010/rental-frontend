import React from 'react';
import { Search } from 'lucide-react';
import { Select, Option } from '@material-tailwind/react';

const VehicleFilters = ({ filters, onFilterChange }) => {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    onFilterChange({ ...filters, [name]: value });
  };

  const handleRangeChange = (e) => {
    const { value } = e.target;
    onFilterChange({ ...filters, priceRange: value });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg mb-8 max-w-screen-xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {/* Type Filter */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Type</label>
          <Select
            name="type"
            value={filters.type}
            onChange={handleFilterChange}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-200"
          >
            <Option value="">All Types</Option>
            <Option value="BIKE">Bike</Option>
            <Option value="SCOOTY">Scooty</Option>
          </Select>
        </div>

        {/* Price Range Dropdown */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Price Range</label>
          <Select
            name="priceRange"
            value={filters.priceRange}
            onChange={handleFilterChange}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-200"
          >
            <Option value="">Any Price</Option>
            <Option value="0-500">High To Low</Option>
            <Option value="500-1000">Low To High</Option>
          </Select>
        </div>

        {/* Price Range Slider */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Price Range</label>
          <div className="flex justify-between items-center">
            <span className="font-medium text-gray-600">₹{filters.priceRange || 500} - ₹100000</span>
          </div>
          <input
            type="range"
            name="priceRange"
            min="500"
            max="100000"
            step="100"
            value={filters.priceRange || 500}
            onChange={handleRangeChange}
            className="w-full h-2 bg-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
          />
        </div>

        {/* Location Filter */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Location</label>
          <Select
            name="location"
            value={filters.location || ""}
            onChange={handleFilterChange}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-200"
          >
            <Option value="">Select Location</Option>
            <Option value="Koramangala, Pune">Koramangala, Pune</Option>
            <Option value="Indiranagar, Pune">Indiranagar, Pune</Option>
            <Option value="Whitefield, Pune">Whitefield, Pune</Option>
          </Select>
        </div>

        {/* Search Button */}
        <div className="flex items-end">
          <button
            className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500 transition duration-200 flex items-center justify-center"
            onClick={() => onFilterChange(filters)}
          >
            <Search className="h-5 w-5 mr-2" />
            <span className="font-medium">Search</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VehicleFilters;
