import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from '@material-tailwind/react'
import { createBrowserRouter, createRoutesFromElements , Route, RouterProvider } from 'react-router-dom'

import Layout from './components/Layout.jsx'

import PropertiesPage from './pages/properties/PropertiesPage.jsx'
import Home from './pages/Home.jsx'
import PropertyDetailPage from './pages/properties/PropertyDetailPage.jsx'
import VehiclesPage from './pages/vehicles/VehiclesPage.jsx'
import VehicleDetailPage from './pages/vehicles/VehicleDetailPage.jsx'

const router =createBrowserRouter(
  createRoutesFromElements(
    <>
     <Route path='/' element={<Layout />}>
     <Route path='' element={<Home/>}/>
     <Route path='/properties' element={<PropertiesPage/>}/>
     <Route path="properties/:id" element={<PropertyDetailPage />} />
     <Route path="vehicles/:id" element={<VehicleDetailPage />} />
     <Route path="vehicles" element={<VehiclesPage />} />
     </Route>
    </>
  )
)




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router}/>    </ThemeProvider>
  </StrictMode>
)
