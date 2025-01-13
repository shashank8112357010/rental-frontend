import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, User } from 'lucide-react';
import BookingForm from '../../components/BookingForm';
import { formatCurrency } from '../../utils/format';
import { GetPropertyByIdService } from '../../services/api.service';
import { Dialog } from '@mui/material';
import EnquiryFormPage from '../../components/EnquiryFormPage';
import { motion } from 'framer-motion';

const PropertiesPage = () => {
  const { id } = useParams();
  const [properties, setProperties] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isEnquiryDialogOpen, setIsEnquiryDialogOpen] = useState(false);

  useEffect(() => {
    GetPropertyByIdService(id)
      .then(({ data }) => {
        setProperties({
          id: data._id,
          type: data.type,
          title: data.title,
          locationLink: data.locationLink,
          description: data.description,
          price: data.price,
          location: data.location,
          occupancy: data.occupancy,
          pgCategory: data.pgCategory,
          owner: data.owner,
          amenities: data.amenities,
          image: data.images[0],
          available: data.available,
          createdAt: new Date().toISOString(),
        });
        setIsLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching property:', err);
        setIsLoading(false);
      });
  }, [id]);

  const openEnquiryDialog = () => {
    setIsEnquiryDialogOpen(true);
  };

  const closeDialog = () => {
    setIsEnquiryDialogOpen(false);
  };

  if (isLoading) return <div className="animate-pulse">Loading...</div>;
  if (!properties.id) return <div>Property not found</div>;

  return (
    <motion.div
      className="max-w-6xl mx-auto px-4 py-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <motion.img
            src={properties.image}
            alt={properties.title}
            className="w-full h-96 object-cover rounded-lg"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div className="mt-8">
            <h1 className="text-3xl font-bold text-gray-900">{properties.title}</h1>
            <div className="flex items-center mt-2 text-gray-600">
              <User className="h-5 w-5 mr-2" />
              <span>{properties.owner}</span>
            </div>
            <div className="flex justify-between mt-6 text-gray-600 mb-2">
              <div className='flex  gap-3'>
                <MapPin className="h-4 w-4 mr-1" />
                <span className="text-sm">{properties.location}</span>
              </div>
              <div>
                <p>{properties.pgCategory}</p>
              </div>
            </div>
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-4">Description</h2>
              <p className="text-gray-600">{properties.description}</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="lg:col-span-1"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="bg-white rounded-lg shadow-lg p-6 sticky top-6">
            <div className="flex items-center justify-between mb-6">
              <span className="text-2xl font-bold text-gray-900">
                {formatCurrency(properties.price)}
                <span className="text-sm font-normal text-gray-600">/day</span>
              </span>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${properties.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}
              >
                {properties.available ? 'Available' : 'Not Available'}
              </span>
            </div>

            <BookingForm
              itemId={properties.id}
              itemType="Property"  // Set itemType to "Property"
              disabled={!properties.available}
            />

            <div className="flex justify-center items-center mt-12">
              <button
                onClick={openEnquiryDialog}
                className="w-full bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
              >
                Enquiry
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Enquiry Dialog */}
      <Dialog open={isEnquiryDialogOpen} onClose={closeDialog}>
        <EnquiryFormPage vehicleId={properties.id} vehicleType="Property" />
      </Dialog>
    </motion.div>
  );
};

export default PropertiesPage;
