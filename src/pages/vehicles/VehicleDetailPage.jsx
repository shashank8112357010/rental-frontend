import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { User } from 'lucide-react';
import BookingForm from '../../components/BookingForm';
import { formatCurrency } from '../../utils/format';
import { GetVehicleByIdService } from '../../services/api.service';
import { Dialog } from '@mui/material';
import EnquiryFormPage from '../../components/EnquiryFormPage';
import { motion } from 'framer-motion';

const VehicleDetailPage = () => {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState({
    id,
    type: 'BIKE',
    model: 'Royal Enfield Classic 350',
    description: 'Well-maintained bike for daily commute',
    pricePerDay: 800,
    location: 'Indiranagar, Bangalore',
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=1000',
    available: true,
    createdAt: new Date().toISOString()
  });
  const [isLoading, setIsLoading] = useState();
  const [isEnquiryDialogOpen, setIsEnquiryDialogOpen] = useState(false);


  if (isLoading) return <div className="animate-pulse">Loading...</div>;
  if (!vehicle) return <div>Vehicle not found</div>;


  useEffect(() => {
    GetVehicleByIdService(id).then(({ data }) => {
      setVehicle({
        id: data._id,
        type: data.type,
        model: data.model,
        description: data.description,
        pricePerDay: data.pricePerDay,
        owner: data.owner,
        image: data.images[0],
        available: data.available,
        createdAt: new Date().toISOString()
      })
    }).catch((err) => {

    })
  }, [id])

  const openEnquiryDialog = () => {
    setIsEnquiryDialogOpen(true);
  };

  const closeDialog = () => {
    setIsEnquiryDialogOpen(false);
  };

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
            src={vehicle.image}
            alt={vehicle.model}
            className="w-full h-96 object-cover rounded-lg"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          />

          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-3xl font-bold text-gray-900">{vehicle.model}</h1>
            <div className="flex items-center mt-2 text-gray-600">
              <User className="h-5 w-5 mr-2" />
              <span>{vehicle.owner}</span>
            </div>

            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-4">Description</h2>
              <p className="text-gray-600">{vehicle.description}</p>
            </div>

            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-4">Features</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2" />
                  {vehicle.type}
                </div>
                {/* Add more features */}
              </div>
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
                {formatCurrency(vehicle.pricePerDay)}
                <span className="text-sm font-normal text-gray-600">/day</span>
              </span>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${vehicle.available
                ? 'bg-green-100 text-green-800'
                : 'bg-red-100 text-red-800'
                }`}>
                {vehicle.available ? 'Available' : 'Not Available'}
              </span>
            </div>

            <BookingForm
              itemId={vehicle.id}
              itemType="VEHICLE"
              disabled={!vehicle.available}
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
      <Dialog open={isEnquiryDialogOpen} onClose={closeDialog}>
        <EnquiryFormPage />
      </Dialog>
    </motion.div >
  );
};

export default VehicleDetailPage;
