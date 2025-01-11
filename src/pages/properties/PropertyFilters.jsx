import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Select, Option } from '@material-tailwind/react';

const PropertyFilters = ({ onFilterChange }) => {
  const [type, setType] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState(500);

  const handleFilterChange = () => {
    onFilterChange({ type, price, location, priceRange });
  };

  const handleRangeChange = (e) => {
    setPriceRange(e.target.value);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {/* Type Filter */}
        <div>
          <label className="text-sm font-semibold text-gray-700">Type</label>
          <Select
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <Option value="">All Types</Option>
            <Option value="1BHK">1BHK</Option>
            <Option value="2BHK">2BHK</Option>
            <Option value="3BHK">3BHK</Option>
            <Option value="PG">PG</Option>
          </Select>
        </div>

        {/* Price Range Dropdown */}
        <div>
          <label className="text-sm font-semibold text-gray-700">Price Range</label>
          <Select
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          >
            <Option value="">Any Price</Option>
            <Option value="0-500">High To Low</Option>
            <Option value="500-1000">Low To High</Option>
          </Select>
        </div>

        {/* Price Range Slider */}
        <div>
          <label className="text-sm font-semibold text-gray-700">Price Range</label>
          <div className="flex justify-between items-center">
            <span className="font-medium text-gray-600">₹{priceRange} - ₹100000</span>
          </div>
          <input
            type="range"
            name="priceRange"
            min="500"
            max="100000"
            step="100"
            value={priceRange}
            onChange={handleRangeChange}
            className="w-full h-2 bg-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
          />
        </div>

        {/* Location Filter */}
        <div>
          <label className="text-sm font-semibold text-gray-700">Location</label>
          <Select
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
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
            className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors flex items-center justify-center"
            onClick={handleFilterChange}
          >
            <Search className="h-4 w-4 mr-2" />
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyFilters;
