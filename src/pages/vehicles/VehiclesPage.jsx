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
    type: "",
    priceRange: [0, 100000], // Min and Max price range
    location: "",
    sortOrder: "", // Sort order: 'highToLow', 'lowToHigh', ''
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
    if (filters.type) {
      filteredData = filteredData.filter((vehicle) => vehicle.type === filters.type);
    }

    // Apply location filter
    if (filters.location) {
      filteredData = filteredData.filter((vehicle) =>
        vehicle.location?.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    // Apply price range filter
    const [minPrice, maxPrice] = filters.priceRange;
    filteredData = filteredData.filter(
      (vehicle) => vehicle.pricePerDay >= minPrice && vehicle.pricePerDay <= maxPrice
    );

    // Apply sorting
    if (filters.sortOrder === "highToLow") {
      filteredData.sort((a, b) => b.pricePerDay - a.pricePerDay);
    } else if (filters.sortOrder === "lowToHigh") {
      filteredData.sort((a, b) => a.pricePerDay - b.pricePerDay);
    }

    setFilteredVehicles(filteredData);
  };

  return (
    <div className=" mt-44 md:mt-0">
      <header className="mb-8">
        <motion.h1
          className="text-2xl md:text-3xl font-bold text-white mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Available Vehicles
        </motion.h1>
        <motion.p
          className="text-sm md:text-base text-white"
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
          className={`grid ${filteredVehicles?.length > 0 ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
            } gap-6`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredVehicles?.length > 0 ? (
            filteredVehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))
          ) : (
            <div className="flex justify-center items-center w-full min-h-[300px]">
              <div className="text-center">
                <h1 className="text-2xl md:text-3xl font-bold text-white">
                  No Vehicles Found
                </h1>
                <p className="text-sm md:text-base text-white mt-2">
                  Try adjusting your filters to find the perfect vehicle.
                </p>
              </div>
            </div>
          )}
        </motion.div>
      )}

      <div>
        <Faq />
      </div>
    </div>
  );
};

export default VehiclesPage;
