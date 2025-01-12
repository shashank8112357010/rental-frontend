import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import VehicleCard from "./VehicleCard";
import VehicleFilters from "./VehicleFilters";
import { GetVehicleService } from "../../services/api.service";
import Faq from "../faqs/Faq";

const VehiclesPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [vehicles, setVehicles] = useState([]);
  const [filteredVehicles, setFilteredVehicles] = useState([]);
  const [filterOptions, setFilterOptions] = useState({
    types: [],
    locations: [],
  });

  // Filter states
  const [filters, setFilters] = useState({
    type: [],
    priceRange: [0, 1000],  // Min and Max price range
    location: [],
    sortOrder: ""  // Sort order: 'highToLow', 'lowToHigh', ''
  });

  const fetchVehicleData = async () => {
    await GetVehicleService()
      .then((res) => {
        const modified = res.data.map((vehicle) => ({
          id: vehicle._id,
          type: vehicle.type,
          model: vehicle.model,
          description: vehicle.description,
          pricePerDay: vehicle.pricePerDay,
          owner: vehicle.owner,
          image: vehicle.images[0],
          available: vehicle.available,
          location: vehicle.location,
          createdAt: new Date().toISOString(),
        }));

        setVehicles(modified);
        setFilteredVehicles(modified);
        const types = [...new Set(modified.map((v) => v.type))];
        const locations = [...new Set(modified.map((v) => v.location))];
        setFilterOptions({ types, locations });
        setIsLoading(false);
      })
      .catch((err) => {
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

    // Apply type filter
    if (filters.type.length) {
      filteredData = filteredData.filter((vehicle) =>
        filters.type.includes(vehicle.type)
      );
    }

    // Apply location filter
    if (filters.location.length) {
      filteredData = filteredData.filter((vehicle) =>
        filters.location.some((loc) => vehicle.location?.toLowerCase().includes(loc.toLowerCase()))
      );
    }

    // Apply price range filter
    const [minPrice, maxPrice] = filters.priceRange || [0, 1000]; // Default range
    filteredData = filteredData.filter((vehicle) =>
      vehicle.pricePerDay >= minPrice && vehicle.pricePerDay <= maxPrice
    );


    // Apply sorting (high to low)
    if (filters.sortOrder === "highToLow") {
      filteredData = filteredData.sort((a, b) => b.pricePerDay - a.pricePerDay);
    } else if (filters.sortOrder === "lowToHigh") {
      filteredData = filteredData.sort((a, b) => a.pricePerDay - b.pricePerDay);
    }

    setFilteredVehicles(filteredData);
  };

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
