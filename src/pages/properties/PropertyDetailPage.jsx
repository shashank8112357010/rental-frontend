import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Building2, MapPin, IndianRupee, Calendar } from 'lucide-react';
import BookingForm from '../../components/BookingForm';
import ImageGallery from '../../components/ImageGallery';
import { formatCurrency } from '../../utils/format';

const PropertyDetailPage = () => {
  const { id } = useParams();
  console.log(id , "id");
  const [property, setProperty] = useState( {
    id,
    type: 'FLAT',
    title: '2BHK Furnished Apartment',
    description: 'Modern furnished apartment with all amenities',
    price: 15000,
    location: 'Koramangala, Bangalore',
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1560449752-3fd74f5f28b5?auto=format&fit=crop&q=80&w=1000',
    ],
    amenities: ['Furnished', 'Power Backup', 'Security' , "AC"],
    available: true,
    createdAt: new Date().toISOString()
  });
  
//   const { data: property, isLoading } = useProperty(id);
const [isLoading , setIsLoading]= useState();

  if (isLoading) return <div className="animate-pulse">Loading...</div>;
  if (!property) return <div>Property not found</div>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <ImageGallery images={property.images} />
          
          <div className="mt-8">
            <h1 className="text-3xl font-bold text-gray-900">{property.title}</h1>
            <div className="flex items-center mt-2 text-gray-600">
              <MapPin className="h-5 w-5 mr-2" />
              <span>{property.location}</span>
            </div>
            
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-4">Description</h2>
              <p className="text-gray-600">{property.description}</p>
            </div>

            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-4">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {property.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2" />
                    {amenity}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-lg p-6 sticky top-6">
            <div className="flex items-center justify-between mb-6">
              <span className="text-2xl font-bold text-gray-900">
                {formatCurrency(property.price)}
                <span className="text-sm font-normal text-gray-600">/month</span>
              </span>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                property.available 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {property.available ? 'Available' : 'Not Available'}
              </span>
            </div>

            <BookingForm 
              itemId={property.id}
              itemType="PROPERTY"
              disabled={!property.available}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailPage;
