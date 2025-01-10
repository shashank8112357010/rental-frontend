import React, { useEffect, useState } from 'react';
import { Bike } from 'lucide-react';
import VehicleCard from './VehicleCard';
import VehicleFilters from './VehicleFilters';
import { GetVehicleService } from '../../services/api.service';


const VehiclesPage = () => {
    const [isLoading , setIsLoading] = useState(true);
    const [vehicles , setVehicles] = useState([
      
      ]);


      const fetchVehicleData = async()=>{
        await GetVehicleService().then((res)=>{
     

          const modified = res.data.map((vehicle)=>{
            return {
              id: vehicle._id,
              type: vehicle.type,
              model: vehicle.model,
              description: vehicle.description,
              pricePerDay: vehicle.pricePerDay,
              owner: vehicle.owner,
              image: vehicle.images[0],
              available: vehicle.available,
              createdAt: new Date().toISOString()
            }
          })
          setVehicles(modified)


          setIsLoading(false)
        }).catch((err)=>{
          setIsLoading(false)
          console.log("err" , err);
        })
      }
      useEffect(()=>{

        fetchVehicleData()
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