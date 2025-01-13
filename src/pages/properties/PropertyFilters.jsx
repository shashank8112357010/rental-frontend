import React, { useState } from 'react';
import { Select, Option } from '@material-tailwind/react';

const PropertyFilters = ({ filters, onFilterChange }) => {
  const [furnishOptions, setFurnishOptions] = useState([]);

  const predefinedLocations = ['Koregaon Park', 'Baner', 'Kalyani Nagar'];

  const handleFilterChange = (name, value) => {
    // When type filter changes, update the furnish options or pgCategory filters
    onFilterChange({ ...filters, [name]: value });

    if (name === 'type') {
      if (['1 BHK', '2 BHK', '3 BHK'].includes(value)) {
        setFurnishOptions(['Semi-Furnished', 'Fully-Furnished', 'Unfurnished']);
      } else if (['PG Boys', 'PG Girls'].includes(value)) {
        setFurnishOptions(['Single Occupancy', 'Double Occupancy', 'Triple Occupancy']);
      } else {
        setFurnishOptions([]); // Clear options for other types
      }
    }
  };

  const handleRangeChange = (e) => {
    const newPriceRange = [...filters.priceRange];
    newPriceRange[0] = parseInt(e.target.value, 10);
    onFilterChange({ ...filters, priceRange: newPriceRange });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
      <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-${furnishOptions.length > 0 ? '5' : '4'} gap-6`}>
        {/* Type Filter */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Type</label>
          <Select
            value={filters.type}
            onChange={(value) => handleFilterChange('type', value)}
            className="w-full border-gray-300"
          >
            <Option value="">All Types</Option>
            <Option value="1 BHK">1 BHK</Option>
            <Option value="2 BHK">2 BHK</Option>
            <Option value="3 BHK">3 BHK</Option>
            <Option value="PG Boys">PG Boys</Option>
            <Option value="PG Girls">PG Girls</Option>
          </Select>
        </div>

        {/* Furnish Type Filter */}
        {furnishOptions.length > 0 && (
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Furnish Type</label>
            <Select
              value={filters.furnishType}
              onChange={(value) => handleFilterChange('furnishType', value)}
              className="w-full border-gray-300"
            >
              <Option value="">All Types</Option>
              {furnishOptions.map((option, index) => (
                <Option key={index} value={option}>
                  {option}
                </Option>
              ))}
            </Select>
          </div>
        )}

        {/* Sort By Price */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Sort By Price</label>
          <Select
            value={filters.sortOrder}
            onChange={(value) => handleFilterChange('sortOrder', value)}
            className="w-full border-gray-300"
          >
            <Option value="">Select</Option>
            <Option value="lowToHigh">Low to High</Option>
            <Option value="highToLow">High to Low</Option>
          </Select>
        </div>

        {/* Price Range */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Price Range</label>
          <div className="flex justify-between items-center text-sm font-medium text-gray-600">
            <span>₹{filters.priceRange[0]}</span>
            <span>₹100000</span>
          </div>
          <input
            type="range"
            min="500"
            max="100000"
            step="100"
            value={filters.priceRange[0]}
            onChange={handleRangeChange}
            className="w-full h-2 bg-gray-200 rounded-lg"
          />
        </div>

        {/* Location Filter */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Location</label>
          <Select
            value={filters.location}
            onChange={(value) => handleFilterChange('location', value)}
            className="w-full border-gray-300"
          >
            <Option value="">All Locations</Option>
            {predefinedLocations.map((location, index) => (
              <Option key={index} value={location}>
                {location}
              </Option>
            ))}
          </Select>
        </div>
      </div>
    </div>
  );
};

export default PropertyFilters;
