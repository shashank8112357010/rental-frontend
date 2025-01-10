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

import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Home, Building2, Bike, UserCircle } from 'lucide-react';
import Footer from './Footer';

const Layout = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleNavClick = (path) => {
    setActiveLink(path); // Set the active link when clicked
  };

  return (
    <div className="bg-gray-50 mx-auto">
      <nav className="bg-white shadow-md w-full">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link to="/" className="flex items-center">
                <Home className="h-6 w-6 text-indigo-600" />
                <span className="ml-2 font-semibold text-xl">RentEase</span>
              </Link>

              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link
                  to="/properties"
                  onClick={() => handleNavClick('/properties')}
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium transition-all ${
                    activeLink === '/properties'
                      ? 'text-indigo-600 border-b-2 border-indigo-600' // Active state
                      : 'text-gray-500 hover:text-indigo-600 hover:border-b-2 hover:border-indigo-600' // Hover state
                  }`}
                >
                  <Building2 className="h-5 w-5" />
                  <span className="ml-2">Properties</span>
                </Link>

                <Link
                  to="/vehicles"
                  onClick={() => handleNavClick('/vehicles')}
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium transition-all ${
                    activeLink === '/vehicles'
                      ? 'text-indigo-600 border-b-2 border-indigo-600' // Active state
                      : 'text-gray-500 hover:text-indigo-600 hover:border-b-2 hover:border-indigo-600' // Hover state
                  }`}
                >
                  <Bike className="h-5 w-5" />
                  <span className="ml-2">Vehicles</span>
                </Link>
              </div>
            </div>

            <div className="flex items-center">
              <Link
                to="/profile"
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <UserCircle className="h-6 w-6 text-gray-600" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main className='p-24'>
           <Outlet />
           
      </main>
      <Footer />
      
    </div>
  );
};

export default Layout;
