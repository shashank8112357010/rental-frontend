import React, { useEffect } from 'react';
import { Building2, MapPin, IndianRupee } from 'lucide-react';
import PropertyCard from './PropertyCard';
import PropertyFilters from './PropertyFilters';
import { GetPropertyService } from '../../services/api.service';


const PropertiesPage = () => {
  //   const { data: properties, isLoading } = useProperties();
  const [isLoading, setisLoading] = React.useState(true);
  const [properties, setProperties] = React.useState([

    {
      id: '1',
      type: 'FLAT',
      title: '2BHK Furnished Apartment',
      description: 'Modern furnished apartment with all amenities',
      price: 15000,
      location: 'Koramangala, Bangalore',
      images: ['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=1000'],
      amenities: ['Furnished', 'Power Backup', 'Security'],
      available: true,
      createdAt: new Date().toISOString()
    },
    // Add more mock properties...

  ]);


  const fetchPropertiesData = async () => {
    await GetPropertyService().then((res) => {
      console.log(res)
    }).catch((err) => {
      setisLoading(false)
      console.log("err", err);
    })
  }



  useEffect(() => {
    fetchPropertiesData()
    setTimeout(() => {
      setisLoading(false)
    }, 2000)
  }, [])

  return (
    <div className=''>
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Available Properties</h1>
        <p className="text-gray-600">Find your perfect accommodation</p>
      </header>

      <PropertyFilters />

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((n) => (
            <div key={n} className="animate-pulse bg-gray-200 min-h-80  rounded-lg" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties?.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      )}
    </div>
  );
}

export default PropertiesPage;