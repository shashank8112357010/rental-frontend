import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { User, MapPin } from 'lucide-react';
import BookingForm from '../../components/BookingForm';
import { formatCurrency } from '../../utils/format';
import { GetVehicleByIdService } from '../../services/api.service';
import { Dialog } from '@mui/material';
import EnquiryFormPage from '../../components/EnquiryFormPage';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const VehicleDetailPage = () => {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isEnquiryDialogOpen, setIsEnquiryDialogOpen] = useState(false);

  useEffect(() => {
    GetVehicleByIdService(id).then(({ data }) => {
      console.log(data)
      setVehicle({
        id: data._id,
        type: data.type,
        model: data.model,
        description: data.description,
        pricePerDay: data.pricePerDay,
        pricePerMonth: data.pricePerMonth,
        location: data.location,
        owner: data.owner,
        stock: data.stock,
        features: data.features,
        images: data.images,
        available: data.available,
        availabilityTime: data.availabilityTime,
        createdAt: new Date().toISOString(),
      });
      setIsLoading(false);
    }).catch((err) => {
      setIsLoading(false);
      console.error(err);
    });
  }, [id]);

  const openEnquiryDialog = () => {
    setIsEnquiryDialogOpen(true);
  };

  const closeDialog = () => {
    setIsEnquiryDialogOpen(false);
  };

  if (isLoading) return <div className="animate-pulse">Loading...</div>;
  if (!vehicle.id) return <div>Vehicle not found</div>;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
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
          {/* Image Slider */}
          <Slider {...settings}>
            {vehicle.images && vehicle.images.map((image, index) => (
              <motion.img
                key={index}
                src={image}
                alt={vehicle.model}
                className="w-full h-96 object-cover rounded-lg"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </Slider>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-3xl font-bold text-gray-900">{vehicle.model}</h1>
            <div className="flex items-center justify-between mt-2 text-gray-600">
              <div className='flex '>
                <User className="h-5 w-5 mr-2" />
                <span>{vehicle.owner}</span>
              </div>

              <div className='flex justify-end'>
                <p className="px-4 py-2 rounded-full bg-gray-200 text-gray-800 text-sm">{vehicle.type}</p>
              </div>
            </div>

            {/* <div className="flex justify-between mt-6 text-gray-600 mb-2"> */}
            {/* <div className='flex gap-3'>
                <Link to={vehicle.locationLink} target="_blank" className="flex items-center gap-2 text-sm hover:text-indigo-600">
                  <MapPin className="h-4 w-4" />
                  <span>{vehicle.location}</span>
                </Link>
              </div> */}

            {/* </div> */}

            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-4">Description</h2>
              <p className="text-gray-600">{vehicle.description}</p>
            </div>

            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-4">Features</h2>
              <div className="grid grid-cols-2 gap-4">
                {vehicle.features && vehicle.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Availability Time */}
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-4">Availability Time</h2>
              <div className="flex flex-wrap gap-3">
                {vehicle.availabilityTime && vehicle.availabilityTime.map((timeOption, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full bg-gray-200 text-gray-800 text-sm"
                  >
                    {timeOption}
                  </span>
                ))}
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
              {/* Mapping Price */}
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gray-900">
                  {vehicle.pricePerDay && formatCurrency(vehicle.pricePerDay)}
                  <span className="text-sm font-normal text-gray-600">/day</span>
                </span>
                {vehicle.pricePerMonth && (
                  <span className="text-sm text-gray-600">
                    {formatCurrency(vehicle.pricePerMonth)} /month
                  </span>
                )}
              </div>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${vehicle.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
              >
                {vehicle.available ? 'Available' : 'Not Available'}
              </span>
            </div>

            <BookingForm
              itemId={vehicle.id}
              itemType="Vehicle"  // Set itemType to "Vehicle"
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

      {/* Enquiry Dialog */}
      <Dialog open={isEnquiryDialogOpen} onClose={closeDialog}>
        <EnquiryFormPage vehicleId={vehicle.id} vehicleType="Vehicle" />
      </Dialog>
    </motion.div>
  );
};

export default VehicleDetailPage;
