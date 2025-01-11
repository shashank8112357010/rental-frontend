import React, { useEffect, useState } from 'react';
import { Building2, MapPin, IndianRupee } from 'lucide-react';
import PropertyCard from './PropertyCard';
import PropertyFilters from './PropertyFilters';
import { GetPropertyService } from '../../services/api.service';
import Faq from '../faqs/Faq';


const PropertiesPage = () => {
  //   const { data: properties, isLoading } = useProperties();
  const [isLoading, setisLoading] = useState(true);
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);

  // Filter states
  const [filters, setFilters] = useState({
    type: '',
    priceRange: '',
    location: '',
  });

  const fetchPropertiesData = async () => {
    await GetPropertyService().then((res) => {

      const modified = res.data.map((property) => {
        return {
          id: property._id,
          type: property.flatType,
          title: property.title,
          description: property.description,
          price: property.price,
          location: property.location,
          images: property.images,
          amenities: property.amenities,
          available: property.available,
          createdAt: property.createdAt
        }
      })
      setProperties(modified)
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

  // Apply filters to the properties
  const applyFilters = (filters) => {
    let filteredData = [...properties];

    if (filters.type) {
      filteredData = filteredData.filter((property) => property.type === filters.type);
    }

    if (filters.priceRange) {
      const [minPrice, maxPrice] = filters.priceRange.split('-').map(Number);
      filteredData = filteredData.filter((property) => {
        if (maxPrice) {
          return property.price >= minPrice && property.price <= maxPrice;
        }
        return property.price >= minPrice;
      });
    }

    if (filters.location) {
      filteredData = filteredData.filter((property) =>
        property.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    setFilteredProperties(filteredData);
  };

  // Handle filter change
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    applyFilters(newFilters);
  };



  return (
    <div className=''>
      <header className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Available Properties</h1>
        <p className="text-sm md:text-base text-gray-600">Find your perfect accommodation</p>
      </header>

      <PropertyFilters filters={filters} onFilterChange={handleFilterChange} />

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
      <div>
        <Faq />
      </div>
    </div>


  );
}

export default PropertiesPage;