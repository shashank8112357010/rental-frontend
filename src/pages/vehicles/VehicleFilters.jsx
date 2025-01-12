import React from "react";
import { Select, Option } from "@material-tailwind/react";

const VehicleFilters = ({ filters, onFilterChange, filterOptions }) => {
  const handleFilterChange = (name, value) => {
    onFilterChange({ ...filters, [name]: value });
  };

  const toggleFilter = (value, name) => {
    onFilterChange({
      ...filters,
      [name]: filters[name].includes(value)
        ? filters[name].filter((item) => item !== value)
        : [...filters[name], value],
    });
  };

  const handleRangeChange = (e) => {
    const newPriceRange = [...filters.priceRange];
    newPriceRange[0] = e.target.value;
    onFilterChange({ ...filters, priceRange: newPriceRange });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg mb-8 max-w-screen-xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {/* Type Filter */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Type</label>
          <Select
            name="type"
            value={filters.type}
            onChange={(value) => handleFilterChange("type", value)}
            className="w-full p-3 text-black border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-200"
          >
            <Option value="">All Types</Option>
            {filterOptions.types.map((type, index) => (
              <Option key={index} value={type}>
                {type}
              </Option>
            ))}
          </Select>
        </div>

        {/* Sort Order Dropdown */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Sort By</label>
          <Select
            value={filters.sortOrder}
            onChange={(value) => handleFilterChange("sortOrder", value)}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-200"
          >
            <Option value="">Select</Option>
            <Option value="lowToHigh">Low to High</Option>
            <Option value="highToLow">High to Low</Option>
          </Select>
        </div>

        {/* Price Range Slider */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Price Range</label>
          <div className="flex justify-between items-center text-sm font-medium text-gray-600">
            <span>₹{filters.priceRange ? filters.priceRange[0] : 500}</span>
            <span>₹100000</span>
          </div>
          <input
            type="range"
            name="priceRange"
            min="500"
            max="100000"
            step="100"
            value={filters.priceRange[0]}  // Use the first value of priceRange
            onChange={handleRangeChange}  // handle range change for the first value
            className="w-full h-2 bg-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
          />
        </div>

        {/* Location Filter */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Location</label>
          <Select
            name="location"
            value={filters.location}
            onChange={(value) => handleFilterChange("location", value)}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-200"
          >
            <Option value="">All Locations</Option>
            {filterOptions.locations.map((location, index) => (
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

export default VehicleFilters;
