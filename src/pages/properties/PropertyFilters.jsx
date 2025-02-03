import React, { useState, useEffect } from 'react';

const PropertyFilters = ({ propertyType, location, filters, onFilterChange, onClearFilters }) => {
  const [furnishOptions, setFurnishOptions] = useState({
    type: '',
    data: [],
  });


  const occupancyOptions = [
    { value: 1, label: 'Single' },
    { value: 2, label: 'Double' },
    { value: 3, label: 'Triple' },
    // { value: 4, label: 'Quadruple' },
  ];

  useEffect(() => {
    if (filters.type === 'FLAT') {
      setFurnishOptions({
        type: 'FLAT',
        data: ['Semi-Furnished', 'Fully-Furnished', 'Unfurnished'],
      });
    } else if (filters.type === 'PG') {
      setFurnishOptions({
        type: 'PG',
        data: occupancyOptions,
      });
    } else {
      setFurnishOptions({
        type: '',
        data: [],
      });
    }
  }, [filters.type]);

  const handleFilterChange = (name, value) => {
    const updatedFilters = { ...filters, [name]: value };
    if (name === 'occupancy') {
      updatedFilters.occupancy = parseInt(value, 10) || '';
    }
    onFilterChange(updatedFilters);

    if (name === 'type') {
      setFurnishOptions({
        type: value,
        data: value === 'FLAT'
          ? ['Semi-Furnished', 'Fully-Furnished', 'Unfurnished']
          : value === 'PG'
            ? occupancyOptions
            : [],
      });
      if (value !== 'PG') updatedFilters.occupancy = '';
      if (value !== 'FLAT') updatedFilters.furnishType = '';
      updatedFilters.pgCategory = '';
      onFilterChange(updatedFilters);
    }
  };


  return (
    <div className="bg-black p-4 rounded-lg border-2 border-white  shadow-md mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-white">Filter Properties</h2>
        <button
          onClick={onClearFilters}
          className="text-xs text-white  border-2 border-gray-300 px-2 py-1 rounded "
        >
          Clear All
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Property Type Filter */}
        <div>
          <label className="text-xs font-medium text-white">Property Type</label>
          <select
            value={filters.type || ''}
            onChange={(e) => handleFilterChange('type', e.target.value)}
            className="w-full p-3 border border-gray-300 bg-transparent text-white rounded-lg shadow-sm "
          >
            <option className="text-gray-900 bg-transparent p-2 " value="">All Types</option>
            {propertyType.map((type, index) => (
              <option className="text-gray-900 p-2" key={index} value={type}>{type}</option>
            ))}
          </select>
        </div>
        {/* PG Category Filter */}
        {filters.type === 'PG' && (
          <div>
            <label className="text-xs font-medium text-white">PG Category</label>
            <select
              value={filters.pgCategory || ''}
              onChange={(e) => handleFilterChange('pgCategory', e.target.value)}
              className="w-full p-3 border border-gray-300 bg-transparent text-white rounded-lg shadow-sm "
            >
              <option className="text-gray-900 p-2" value="">All Categories</option>
              <option className="text-gray-900 p-2" value="GIRLS">Girls</option>
              <option className="text-gray-900 p-2" value="BOYS">Boys</option>
            </select>
          </div>
        )}

        {/* Occupancy Filter for PG Category */}
        {filters.type === 'PG' && filters.pgCategory && (
          <div>
            <label className="text-xs font-medium text-white">Occupancy</label>
            <select
              value={filters.occupancy || ''}
              onChange={(e) => handleFilterChange('occupancy', e.target.value)}
              className="w-full p-3 border border-gray-300 bg-transparent text-white rounded-lg shadow-sm "
            >
              <option value="">Select Occupancy</option>
              {occupancyOptions.map((occupancy) => (
                <option className="text-gray-900 p-2" key={occupancy.value} value={occupancy.value}>
                  {occupancy.label}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Flat Type Filter */}
        {filters.type === 'FLAT' && (
          <div>
            <label className="text-xs font-medium text-white">Flat Type</label>
            <select
              value={filters.flatType || ''}
              onChange={(e) => handleFilterChange('flatType', e.target.value)}
              className="w-full p-3 border border-gray-300 bg-transparent text-white rounded-lg shadow-sm "
            >
              <option className="text-gray-900 p-2" value="">All Types</option>
              <option className="text-gray-900 p-2" value="1BHK">1 BHK</option>
              <option className="text-gray-900 p-2" value="2BHK">2 BHK</option>
              <option className="text-gray-900 p-2" value="3BHK">3 BHK</option>
            </select>
          </div>
        )}

        {/* Furnish Type Filter */}
        {filters.type === 'FLAT' && (
          <div>
            <label className="text-xs font-medium text-white">Furnish Type</label>
            <select
              value={filters.furnishType || ''}
              onChange={(e) => handleFilterChange('furnishType', e.target.value)}
              className="w-full p-3 border border-gray-300 bg-transparent text-white rounded-lg shadow-sm "
            >
              <option value="">All Furnish Types</option>
              {furnishOptions.data.map((furnishType, index) => (
                <option key={index} value={furnishType.replace('-', '').toLowerCase()} className="text-gray-900 p-2">
                  {furnishType}
                </option>
              ))}
            </select>
          </div>
        )}
        {/* Sort Order Filter */}
        <div>
          <label className="text-xs font-medium text-white">Sort By</label>
          <select
            value={filters.sortOrder || ""}
            onChange={(e) => handleFilterChange('sortOrder', e.target.value)}
            className="w-full p-3 border border-gray-300 bg-transparent text-white rounded-lg shadow-sm "
          >
            <option className="text-gray-900 p-2" value="">Select</option>
            <option className="text-gray-900 p-2" value="lowToHigh">Price: Low to High</option>
            <option className="text-gray-900 p-2" value="highToLow">Price: High to Low</option>
          </select>
        </div>

        {/* Price Range */}
        {/* <div>
          <label className="text-xs font-medium text-white">Price Range (₹)</label>
          <div className="mt-1 flex items-center justify-between text-sm text-white">
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
        </div> */}

        {/* Location Filter */}
        <div>
          <label className="text-xs font-medium text-white">Location</label>
          <select
            value={filters.location || ""}
            onChange={(e) => handleFilterChange('location', e.target.value)}
            className="w-full p-3 border border-gray-300 bg-transparent text-white rounded-lg shadow-sm "
          >
            <option value="">All Locations</option>
            {location.map((loc, index) => (
              <option
                key={index}
                value={loc}
                className="text-gray-900 p-2"
              >
                {loc}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default PropertyFilters;
