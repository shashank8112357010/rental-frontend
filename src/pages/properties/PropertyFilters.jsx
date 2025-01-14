import React, { useState } from 'react';
import { Select, Option, Button } from '@material-tailwind/react';


const PropertyFilters = ({  propertyType ,location , filters, onFilterChange, onClearFilters }) => {
  const [furnishOptions, setFurnishOptions] = useState({
    type : "",
    data : []
  });

 console.log(location);
 const [selected , setSelected] = useState("");

  const handleFilterChange = (name, value) => {
    setSelected(value);
    const updatedFilters = { ...filters, [name]: value };
    onFilterChange(updatedFilters);

    if (name === 'type') {
      if (['FLAT'].includes(value)) {
        setFurnishOptions({
          type : "FLAT",
          data : ['Semi-Furnished', 'Fully-Furnished', 'Unfurnished']
        });
      } else if (['PG'].includes(value)) {
        setFurnishOptions({
            type : "PG",
            data : ['Single', 'Double', 'Triple', 'Four']
          });
      } else {
        setFurnishOptions({
          type : "",
          data : []
        });
      }
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Filter Properties</h2>
        <Button
          size="sm"
          color="gray"
          variant="outlined"
          onClick={onClearFilters}
          className="text-xs"
        >
          Clear All
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Property Type Filter */}
        <div>
          <label className="text-xs font-medium text-gray-600">Property Type</label>
          {
            console.log(selected , "selected")
          }
          <Select
            value={selected}
            onChange={(value) => handleFilterChange('type', value)}
            placeholder="Select Type"
            className="mt-1"
          >
            <Option value="All Types">All Types</Option>
            {
              propertyType.map((type, index) => (
                <Option key={index} value={type}>
                  {type}
                </Option>
              ))
            }
            
          </Select>
        </div>

        {/* Furnish Type Filter */}
        {furnishOptions.data.length > 0 && (
          <div>
            <label className="text-xs font-medium text-gray-600">{furnishOptions.type === 'PG' ? 'Occupency' : 'Furnish Type'    }</label>
           
            <Select
              value={filters.furnishType}
              onChange={(value) => handleFilterChange('furnishType', value)}
              placeholder="Select Furnish Type"
              className="mt-1"
            >
              <Option value="">All Types</Option>
              {furnishOptions.data.map((option, index) => (
                <Option key={index} value={option}>
                  {option}
                </Option>
              ))}
            </Select>
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
          <Select
            value={filters.location}
            onChange={(value) => handleFilterChange('location', value)}
            placeholder="Select Location"
            className="mt-1"
          >
            <Option value="">All Locations</Option>
            {location.map((location, index) => (
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