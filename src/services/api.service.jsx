import clientAxios from './interceptor'

// Login User API
export const UserLoginService = (data) => {
  return clientAxios.post('/user/login', data)
}

export const UserChangePasswordService = (data) => {
  return clientAxios.put('/user/change-password', data);
}


export const UserRegisterService = (data) => {
  return clientAxios.post('/user/register', data)
}

export const GetPropertyService = () => {
  return clientAxios.get('/property/')
}

export const GetPropertyByIdService = (propertyId) => {
  return clientAxios.get(`/property/${propertyId}`)
}

export const GetVehicleService = () => {
  return clientAxios.get('/vehicles/')
}

export const GetVehicleByIdService = (vehicleId) => {
  return clientAxios.get(`/vehicles/${vehicleId}`)
}