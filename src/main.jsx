import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from '@material-tailwind/react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import Layout from './components/Layout.jsx'

import PropertiesPage from './pages/properties/PropertiesPage.jsx'
import Home from './pages/Home.jsx'
import PropertyDetailPage from './pages/properties/PropertyDetailPage.jsx'
import VehiclesPage from './pages/vehicles/VehiclesPage.jsx'
import VehicleDetailPage from './pages/vehicles/VehicleDetailPage.jsx'
import ProfilePage from './pages/profile/ProfilePage.jsx'
import About from './components/About/About.jsx'
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy.jsx'
import TermsConditions from './components/termconditions/TermsConditions.jsx'
import TopServices from './components/TopServices/TopServices.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='/properties' element={<PropertiesPage />} />
        <Route path="properties/:id" element={<PropertyDetailPage />} />
        <Route path="vehicles/:id" element={<VehicleDetailPage />} />
        <Route path="vehicles" element={<VehiclesPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="about" element={<About />} />
        <Route path="privacy_policy" element={<PrivacyPolicy />} />
        <Route path="term_conditions" element={<TermsConditions />} />
        <Route path="services" element={<TopServices />} />

      </Route>
    </>
  )
)




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />    </ThemeProvider>
  </StrictMode>
)
