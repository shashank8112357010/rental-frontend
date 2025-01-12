import React, { useEffect, useState } from 'react';
import { Bike } from 'lucide-react';
import VehicleCard from './VehicleCard';
import VehicleFilters from './VehicleFilters';
import { GetVehicleService } from '../../services/api.service';
import Faq from '../faqs/Faq';
import { motion } from 'framer-motion';

const VehiclesPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [vehicles, setVehicles] = useState([]);
  const [filteredVehicles, setFilteredVehicles] = useState([]);
  const [filterOptions, setFilterOptions] = useState({ types: [], locations: [] });


  // Filter states
  const [filters, setFilters] = useState({
    type: '',
    priceRange: '',
    location: '',
  });

  const fetchVehicleData = async () => {
    await GetVehicleService().then((res) => {
      console.log(res)
      const modified = res.data.map((vehicle) => ({
        id: vehicle._id,
        type: vehicle.type,
        model: vehicle.model,
        description: vehicle.description,
        pricePerDay: vehicle.pricePerDay,
        owner: vehicle.owner,
        image: vehicle.images[0],
        available: vehicle.available,
        createdAt: new Date().toISOString(),
      }));

      setVehicles(modified);
      setFilteredVehicles(modified);
      const types = [...new Set(modified.map((v) => v.type))];
      const locations = [...new Set(modified.map((v) => v.location))];
      setFilterOptions({ types, locations });
      setIsLoading(false);
    }).catch((err) => {
      setIsLoading(false);
      console.log("err", err);
    });
  };

  useEffect(() => {
    fetchVehicleData();
  }, []);



  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    applyFilters(newFilters);
  };

  const applyFilters = (filters) => {
    let filteredData = [...vehicles];

    if (filters.type) {
      filteredData = filteredData.filter((vehicle) => vehicle.type === filters.type);
    }

    if (filters.priceRange) {
      const [minPrice, maxPrice] = filters.priceRange.split('-').map(Number);
      filteredData = filteredData.filter((vehicle) => {
        if (maxPrice) {
          return vehicle.pricePerDay >= minPrice && vehicle.pricePerDay <= maxPrice;
        }
        return vehicle.pricePerDay >= minPrice;
      });
    }

    if (filters.location) {
      filteredData = filteredData.filter((vehicle) =>
        vehicle.location?.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    setFilteredVehicles(filteredData);
  };

  useEffect(() => {
    console.log('Filters in VehicleFilters:', filters);
  }, [filters]);

  return (
    <div>
      <header className="mb-8">
        <motion.h1
          className="text-2xl md:text-3xl font-bold text-gray-900 mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Available Vehicles
        </motion.h1>
        <motion.p
          className="text-sm md:text-base text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Rent bikes and scooters for your daily commute
        </motion.p>
      </header>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <VehicleFilters
          filters={filters}
          onFilterChange={handleFilterChange}
          filterOptions={filterOptions}
        />

      </motion.div>

      {isLoading ? (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {[1, 2, 3].map((n) => (
            <div key={n} className="animate-pulse bg-gray-200 min-h-80 rounded-lg" />
          ))}
        </motion.div>
      ) : (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredVehicles?.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </motion.div>
      )}

      <div>
        <Faq />
      </div>
    </div>
  );
};

export default VehiclesPage;