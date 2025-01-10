// import React from 'react';
// import { Link, Outlet} from 'react-router-dom';
// import { Home, Building2, Bike, UserCircle } from 'lucide-react';
// import Footer from './Footer';

// const Layout = () => {

//   return (
//     <div className=" bg-gray-50">
//       <nav className="bg-white shadow-md w-full">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex justify-between h-16">
//             <div className="flex">
//               <Link to="/" className="flex items-center">
//                 <Home className="h-6 w-6 text-indigo-600" />
//                 <span className="ml-2 font-semibold text-xl">RentEase</span>
//               </Link>

//               <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
//                 <NavLink to="/properties" icon={<Building2 className="h-5 w-5" />} text="Properties" />
//                 <NavLink to="/vehicles" icon={<Bike className="h-5 w-5" />} text="Vehicles" />
//               </div>
//             </div>

//             <div className="flex items-center">
//               <Link
//                 to="/profile"
//                 className="p-2 rounded-full hover:bg-gray-100 transition-colors"
//               >
//                 <UserCircle className="h-6 w-6 text-gray-600" />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </nav>

//         <Outlet />
//         <Footer/>

//     </div>
//   );
// };

// const NavLink = ({ to, icon, text }) => {
//   const isActive = location.pathname.startsWith(to);

//   return (
//     <Link
//       to={to}
//       className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
//         isActive
//           ? 'text-indigo-600 border-b-2 border-indigo-600'
//           : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
//       }`}
//     >
//       {icon}
//       <span className="ml-2">{text}</span>
//     </Link>
//   );
// };

// export default Layout;

import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Home, Building2, Bike, UserCircle, Menu, X } from "lucide-react";
import Footer from "./Footer";
import logoImg from '../assets/logo.png'
const Layout = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);



  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [location.pathname])

  const handleNavClick = (path) => {
    setActiveLink(path);
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-gray-50 mx-auto">
      <nav className="bg-white shadow-md w-full">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex  justify-between h-16 items-center">
            <div className="flex gap-12">
              {/* Logo */}
              <div className="flex items-center">
                <Link
                  to="/"
                  onClick={() => handleNavClick("/")}
                  className={`flex items-center ${activeLink === "/"}`}>
                  <img src={logoImg} alt="" className="w-16" />

                </Link>
              </div>

              {/* Desktop Links */}
              <div className="hidden sm:flex sm:space-x-8">
                <Link
                  to="/properties"
                  onClick={() => handleNavClick("/properties")}
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium transition-all ${activeLink === "/properties"
                    ? "text-indigo-600 border-b-2 border-indigo-600" // Active state
                    : "text-gray-500 hover:text-indigo-600 hover:border-b-2 hover:border-indigo-600" // Hover state
                    }`}
                >
                  <Building2 className="h-5 w-5" />
                  <span className="ml-2">Properties</span>
                </Link>

                <Link
                  to="/vehicles"
                  onClick={() => handleNavClick("/vehicles")}
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium transition-all ${activeLink === "/vehicles"
                    ? "text-indigo-600 border-b-2 border-indigo-600" // Active state
                    : "text-gray-500 hover:text-indigo-600 hover:border-b-2 hover:border-indigo-600" // Hover state
                    }`}
                >
                  <Bike className="h-5 w-5" />
                  <span className="ml-2">Vehicles</span>
                </Link>
              </div>
            </div>

            <div className="flex justify-end">
              {/* Mobile Menu Icon */}
              <div className="sm:hidden flex items-center">
                <button
                  onClick={toggleMobileMenu}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  {isMobileMenuOpen ? (
                    <X className="h-6 w-6 text-gray-600" />
                  ) : (
                    <Menu className="h-6 w-6 text-gray-600" />
                  )}
                </button>
              </div>

              {/* Profile Icon */}
              <div className="hidden sm:flex justify-end items-center">
                <Link
                  to="/profile"
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <UserCircle className="h-6 w-6 text-gray-600" />
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="sm:hidden bg-white border-t">
              <Link
                to="/properties"
                onClick={() => handleNavClick("/properties")}
                className={`block px-4 py-2 text-sm font-medium transition-all ${activeLink === "/properties"
                  ? "text-indigo-600 bg-gray-100"
                  : "text-gray-500 hover:text-indigo-600 hover:bg-gray-100"
                  }`}
              >
                <Building2 className="h-5 w-5 inline-block mr-2" />
                Properties
              </Link>

              <Link
                to="/vehicles"
                onClick={() => handleNavClick("/vehicles")}
                className={`block px-4 py-2 text-sm font-medium transition-all ${activeLink === "/vehicles"
                  ? "text-indigo-600 bg-gray-100" // Active state
                  : "text-gray-500 hover:text-indigo-600 hover:bg-gray-100" // Hover state
                  }`}
              >
                <Bike className="h-5 w-5 inline-block mr-2" />
                Vehicles
              </Link>

              <Link
                to="/profile"
                onClick={() => handleNavClick("/profile")}
                className="block px-4 py-2 text-sm text-gray-500 hover:text-indigo-600 hover:bg-gray-100 transition-colors"
              >
                <UserCircle className="h-5 w-5 inline-block mr-2" />
                Profile
              </Link>
            </div>
          )}
        </div>
      </nav>

      <main className="p-4 sm:p-24">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;

