import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, MapPin, IndianRupee } from 'lucide-react';
import { formatCurrency } from '../../utils/format';
import { motion } from 'framer-motion';

const PropertyCard = ({ property }) => {
  const isInternalLink = property.locationLink.startsWith('/');

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link to={`/properties/${property.id}`}>
        <div className="relative h-48">
          <img
            src={property.images[0]}
            alt={property.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded text-sm font-medium">
            {property.type}
          </div>
        </div>
      </Link>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{property.title}</h3>

        <div className="flex items-center text-gray-600 mb-2">
          {isInternalLink ? (
            <Link
              to={property.locationLink}
              className="text-sm text-gray-600 hover:text-blue-600 flex items-center"
            >
              <MapPin className="h-4 w-4 mr-1" />
              <span>{property.location}</span>
            </Link>
          ) : (
            <Link
              to={property.locationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 hover:text-blue-600 flex items-center"
            >
              <MapPin className="h-4 w-4 mr-1" />
              <span>{property.location}</span>
            </Link>
          )}
        </div>

        <div className="flex items-center text-gray-900 font-medium">
          <IndianRupee className="h-4 w-4 mr-1" />
          <span>{formatCurrency(property.price)}/month</span>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {property.amenities.slice(0, 3).map((amenity, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
            >
              {amenity}
            </span>
          ))}
        </div>
      </div>

    </motion.div>
  );
};

export default PropertyCard;
