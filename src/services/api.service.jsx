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



export const UserEnquiryService = (data) => {
  return clientAxios.post('/enquire', data)
}

// bookings api 
export const UserBookingService = (data) => {
  return clientAxios.post('/bookings', data)
}
export const GetUserBookingService = (data) => {
  return clientAxios.get('/bookings', data)
}
// requirement api 
export const UserRequirementService = (data) => {
  return clientAxios.post('/requirement', data)
}

export const UserResearchService = (data) => {
  return clientAxios.post('/academic-research', data)
}

export const UserPlagiarismService = (data) => {
  return clientAxios.post('/plagiarism-test', data, {
    headers: {
      'Content-Type': 'multipart/form-data' // This is optional as Axios will set it automatically
    }
  })
}
export const UserAllEbookService = (data) => {
  return clientAxios.get('/ebook/subject', data)
}

export const UserAllEbookByIdService = (SubjectId) => {
  return clientAxios.get(`/ebook/modules/${SubjectId}`)
}

export const UserIntershipService = (data) => {
  return clientAxios.get('/internship/active', data)
}
