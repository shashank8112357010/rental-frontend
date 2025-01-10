import React, { useEffect, useState } from 'react';
import { Bike } from 'lucide-react';
import VehicleCard from './VehicleCard';
import VehicleFilters from './VehicleFilters';


const VehiclesPage = () => {
    const [isLoading , setIsLoading] = useState(true);
    const [vehicles , setVehicles] = useState([
        {
          id: 1,
          type: 'BIKE',
          model: 'Royal Enfield Classic 350',
          description: 'Well-maintained bike for daily commute',
          pricePerDay: 800,
          location: 'Indiranagar, Bangalore',
          image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=1000',
          available: true,
          createdAt: new Date().toISOString()
        },
        {
          id: 2,
          type: 'BIKE',
          model: 'Yamaha FZ-S V3',
          description: 'Reliable bike for long rides',
          pricePerDay: 600,
          location: 'MG Road, Bangalore',
          image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=1000',
          available: true,
          createdAt: new Date().toISOString()
        },
        {
          id: 3,
          type: 'SCOOTER',
          model: 'Honda Activa 6G',
          description: 'Perfect for city commuting',
          pricePerDay: 400,
          location: 'Koramangala, Bangalore',
          image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=1000',
          available: true,
          createdAt: new Date().toISOString()
        }
      ]);
      useEffect(()=>{
            setTimeout(()=>{
                setIsLoading(false)
            },2000)
      },[])
  return (
    <div >
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Available Vehicles</h1>
        <p className="text-gray-600">Rent bikes and scooters for your daily commute</p>
      </header>

      <VehicleFilters />

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3 ].map((n) => (
            <div key={n} className="animate-pulse bg-gray-200 min-h-80 rounded-lg" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehicles?.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      )}
    </div>
  );
}

export default VehiclesPage;