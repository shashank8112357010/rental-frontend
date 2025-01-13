import React, { useEffect, useState } from 'react';
import { Building2, MapPin, IndianRupee } from 'lucide-react';
import PropertyCard from './PropertyCard';
import PropertyFilters from './PropertyFilters';
import { GetPropertyService } from '../../services/api.service';
import Faq from '../faqs/Faq';
import Properties from '../../assets/Properties.png'

const PropertiesPage = () => {
  //   const { data: properties, isLoading } = useProperties();
  const [isLoading, setisLoading] = useState(true);
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [filterOptions, setFilterOptions] = useState({ types: [], locations: [] });


  const [filters, setFilters] = useState({
    type: '',
    priceRange: [500, 100000],
    location: '',
    sortOrder: '',
  });

  const fetchPropertiesData = async () => {
    await GetPropertyService().then((res) => {
      console.log(res);
      const modified = res.data.map((property) => {
        return {
          id: property._id,
          type: property.type,
          title: property.title,
          description: property.description,
          price: property.price,
          location: property.location,
          locationLink: property.locationLink,
          images: property.images,
          flatType: property.flatType,
          amenities: property.amenities,
          available: property.available,
          occupancy: property.occupancy,
          owner: property.owner,
          pgCategory: property.pgCategory,
          createdAt: property.createdAt,
          updatedAt: property.updatedAt,
        };
      });
      setProperties(modified);
      setFilteredProperties(modified);
      setisLoading(false);
    }).catch((err) => {
      setisLoading(false);
      console.log("err", err);
    });
  };


  useEffect(() => {
    fetchPropertiesData()
    setTimeout(() => {
      setisLoading(false)
    }, 2000)
  }, [])


  const applyFilters = (filters) => {
    let filteredData = [...properties];

    // Filter by type (1 BHK, 2 BHK, 3 BHK, PG Boys, PG Girls)
    if (filters.type) {
      if (['1 BHK', '2 BHK', '3 BHK'].includes(filters.type)) {
        // For flat types (1 BHK, 2 BHK, 3 BHK)
        filteredData = filteredData.filter((property) =>
          property.flatType === filters.type
        );
      } else if (['PG Boys', 'PG Girls'].includes(filters.type)) {
        // For PG categories (PG Boys, PG Girls)
        filteredData = filteredData.filter((property) =>
          property.pgCategory === filters.type
        );
      }
    }

    // Filter by location
    if (filters.location) {
      filteredData = filteredData.filter((property) =>
        property.location?.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    // Filter by price range
    const [minPrice, maxPrice] = filters.priceRange;
    filteredData = filteredData.filter(
      (property) => property.price >= minPrice && property.price <= maxPrice
    );

    // Sort by price
    if (filters.sortOrder === 'highToLow') {
      filteredData.sort((a, b) => b.price - a.price);
    } else if (filters.sortOrder === 'lowToHigh') {
      filteredData.sort((a, b) => a.price - b.price);
    }

    setFilteredProperties(filteredData);
  };


  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    applyFilters(newFilters);
  };

  return (
    <div>
      <header className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Available Properties</h1>
        <p className="text-sm md:text-base text-gray-600">Find your perfect accommodation</p>
      </header>

      <PropertyFilters filters={filters} onFilterChange={handleFilterChange} />

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((n) => (
            <div key={n} className="animate-pulse bg-gray-200 h-80 rounded-lg" />
          ))}
        </div>
      ) : (
        <div className={`grid ${filteredProperties.length > 0 ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} gap-6`}>
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))
          ) : (
            <div className="flex justify-center items-center w-full min-h-[300px]">
              <div className="text-center">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                  No Property Found
                </h1>
                <p className="text-sm md:text-base text-gray-500 mt-2">
                  Try adjusting your filters to find the perfect property.
                </p>
              </div>
            </div>
          )}
        </div>
      )}

      <div className="mt-8">
        <Faq />
      </div>
    </div>
  );
};

export default PropertiesPage;