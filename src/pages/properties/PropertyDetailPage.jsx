import React, { useEffect } from 'react';
import { Building2, MapPin, IndianRupee } from 'lucide-react';
import PropertyCard from './PropertyCard';
import PropertyFilters from './PropertyFilters';
import { GetPropertyService } from '../../services/api.service';

const PropertiesPage = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [properties, setProperties] = React.useState([]);
  const [filteredProperties, setFilteredProperties] = React.useState([]);
  const [filters, setFilters] = React.useState({
    type: '',
    price: '',
    location: '',
  });

  const fetchPropertiesData = async () => {
    await GetPropertyService()
      .then((res) => {
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
            createdAt: property.createdAt,
          };
        });

        setProperties(modified);
        setFilteredProperties(modified);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log('err', err);
      });
  };

  const applyFilters = () => {
    let filtered = properties;
    console.log(filters, "filters");
    if (filters.type) {
      filtered = filtered.filter((property) => property.type === filters.type);
    }

    if (filters.price) {
      const priceRange = filters.price.split('-');
      filtered = filtered.filter((property) => {
        if (priceRange[1]) {
          return property.price >= parseInt(priceRange[0]) && property.price <= parseInt(priceRange[1]);
        } else {
          return property.price >= parseInt(priceRange[0]);
        }
      });
    }

    if (filters.location) {
      filtered = filtered.filter((property) =>
        property.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    setFilteredProperties(filtered);
  };

  useEffect(() => {
    fetchPropertiesData();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [filters]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="">
      <header className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Available Properties
        </h1>
        <p className="text-sm md:text-base text-gray-600">
          Find your perfect accommodation
        </p>
      </header>

      <PropertyFilters onFilterChange={handleFilterChange} />

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((n) => (
            <div key={n} className="animate-pulse bg-gray-200 min-h-80 rounded-lg" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties?.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PropertiesPage;
