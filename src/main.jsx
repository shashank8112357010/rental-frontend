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
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Academic from './pages/academic/Academic.jsx'
import Blogs from './pages/Blogs/Blogs.jsx'
import BlogsPage1 from './pages/Blogs/BlogsPage1.jsx'
import BlogsPage2 from './pages/Blogs/BlogsPage2.jsx'
import BlogsPage3 from './pages/Blogs/BlogsPage3.jsx'
import BookingPage from './pages/bookingPage/BookingPage.jsx'
import E_Book from './pages/E_Book.jsx'
import Contact from './pages/contact/Contact.jsx'
import Plagiarism from './pages/Plagiarism/Plagiarism.jsx'
import ResearchAssistance from './pages/ResearchAssistance/ResearchAssistance.jsx'
import Notes from './pages/notes/Notes.jsx'
import Subjects from './pages/notes/Subjects.jsx'
import ModuleDetail from './pages/notes/ModuleDetail.jsx'
import Internship from './pages/internship/Internship.jsx'
import Refund from './pages/Refund.jsx'
import ShippingPolicy from './pages/ShippingPolicy.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='/properties' element={<PropertiesPage />} />
        <Route path="/properties/:id" element={<PropertyDetailPage />} />
        <Route path="/vehicles/:id" element={<VehicleDetailPage />} />
        <Route path="/vehicles" element={<VehiclesPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/academic" element={<Academic />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms&conditions" element={<TermsConditions />} />
        <Route path="/services" element={<TopServices />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/blogsDetails1" element={<BlogsPage1 />} />
        <Route path="/blog/blogsDetails2" element={<BlogsPage2 />} />
        <Route path="/blog/blogsDetails3" element={<BlogsPage3 />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/e-Book" element={<E_Book />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/plagiarism" element={<Plagiarism />} />
        <Route path="/research" element={<ResearchAssistance />} />
        {/* notes */}
        <Route path="/notes" element={<Notes />} />
        <Route path="/subjects/:subjectId" element={<Subjects />} />
        {/* <Route path="/modules/:subjectName/:id" element={<ModuleDetail />} /> */}
        <Route path="/modules/:moduleId" element={<ModuleDetail />} />
        {/* internship */}
        <Route path="/internship" element={<Internship />} />
        <Route path="/refund&concellations" element={<Refund />} />
        <Route path="/shipping-policy" element={<ShippingPolicy />} />
      </Route>
    </>
  )
)




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </ThemeProvider>
  </StrictMode>
)
