import React, { useEffect, useState } from 'react';
import { Spinner } from '@material-tailwind/react';
import PropertyCard from './PropertyCard';
import PropertyFilters from './PropertyFilters';
import { GetPropertyService } from '../../services/api.service';
import Faq from '../faqs/Faq';

const PropertiesPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [location, setLocation] = useState([]);
  const [propertyType, setPropertyType] = useState([]);

  const [filters, setFilters] = useState({
    type: '',
    priceRange: [500, 100000],
    location: '',
    sortOrder: '',
  });

  const fetchPropertiesData = async () => {
    try {
      const res = await GetPropertyService();
      console.log(res);
      const modified = res.data.map((property) => ({
        id: property._id,
        type: property.type,
        title: property.title,
        price: property.price,
        location: property.location,
        images: property.images,
      }));
      const location = [...new Set(modified.map((property) => property.location))];
      const propertyTypeRes = [...new Set(modified.map((property) => property.type))];


      setPropertyType(propertyTypeRes);
      setLocation(location);

      setProperties(modified);
      setFilteredProperties(modified);
    } catch (err) {
      console.error("Error fetching properties:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPropertiesData();
  }, []);

  const applyFilters = (filters) => {
    let filteredData = [...properties];

    if (filters.type) {
      filteredData = filteredData.filter((property) => property.type === filters.type);
    }

    if (filters.location) {
      filteredData = filteredData.filter((property) =>
        property.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    const [minPrice, maxPrice] = filters.priceRange;
    filteredData = filteredData.filter(
      (property) => property.price >= minPrice && property.price <= maxPrice
    );

    if (filters.sortOrder === 'lowToHigh') {
      filteredData.sort((a, b) => a.price - b.price);
    } else if (filters.sortOrder === 'highToLow') {
      filteredData.sort((a, b) => b.price - a.price);
    }

    setFilteredProperties(filteredData);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    applyFilters(newFilters);
  };

  const clearFilters = () => {
    setFilters({
      type: '',
      priceRange: [500, 100000],
      location: '',
      sortOrder: '',
    });
    setFilteredProperties(properties);
  };

  return (
    <div className=" mt-44 md:mt-0">
      <header className="mb-6">
        <h1 className="text-xl md:text-2xl font-bold text-white">Available Properties</h1>
        <p className="text-sm text-white">Find your perfect accommodation</p>
      </header>

      <PropertyFilters propertyType={propertyType} location={location} filters={filters} onFilterChange={handleFilterChange} onClearFilters={clearFilters} />

      {isLoading ? (
        <div className="flex justify-center items-center h-40">
          <Spinner color="blue" size="lg" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProperties.length ? (
            filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))
          ) : (

            <div className="flex justify-center items-center w-full min-h-[300px]">
              <div className="text-center">
                <h1 className="text-2xl md:text-3xl font-bold text-white">
                  No properties match your criteria.
                </h1>
                <p className="text-sm md:text-base text-white mt-2">
                  Try adjusting your filters to find the perfect Property.
                </p>
              </div>
            </div>



          )}
        </div>
      )}

      <Faq />
    </div>
  );
};

export default PropertiesPage;