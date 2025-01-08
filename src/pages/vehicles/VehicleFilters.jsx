import React from 'react';
import { Search } from 'lucide-react';

const VehicleFilters = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
          <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
            <option value="">All Types</option>
            <option value="BIKE">Bike</option>
            <option value="SCOOTY">Scooty</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
          <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
            <option value="">Any Price</option>
            <option value="0-500">Under ₹500/day</option>
            <option value="500-1000">₹500 - ₹1,000/day</option>
            <option value="1000+">Above ₹1,000/day</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
          <input
            type="text"
            placeholder="Search by location"
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div className="flex items-end">
          <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors flex items-center justify-center">
            <Search className="h-4 w-4 mr-2" />
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default VehicleFilters;
