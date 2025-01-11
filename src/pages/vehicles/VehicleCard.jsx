import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, IndianRupee, User2 } from 'lucide-react';
import { formatCurrency } from '../../utils/format';
import { motion } from 'framer-motion';

const VehicleCard = ({ vehicle }) => {


  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link
        to={`/vehicles/${vehicle.id}`}
      >
        <div className="relative h-48">
          <img
            src={vehicle.image}
            alt={vehicle.model}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded text-sm font-medium">
            {vehicle.type}
          </div>
        </div>

        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{vehicle.model}</h3>

          <div className="flex items-center text-gray-600 mb-2">
            <User2 className="h-4 w-4 mr-1" />
            <span className="text-sm">{vehicle.owner}</span>
          </div>

          <div className="flex items-center text-gray-900 font-medium">
            <IndianRupee className="h-4 w-4 mr-1" />
            <span>{formatCurrency(vehicle.pricePerDay)}/day</span>
          </div>

          <div className="mt-3">
            <span className={`inline-flex items-center px-2 py-1 rounded text-sm ${vehicle.available
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
              }`}>
              {vehicle.available ? 'Available' : 'Not Available'}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default VehicleCard;
