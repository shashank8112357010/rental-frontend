
import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Home, Building2, Bike, UserCircle, Menu, X } from "lucide-react";
import Footer from "./Footer";
import Dialog from "@mui/material/Dialog";
import logoImg from '../assets/logo.png'
import Login from "./auth/Login";
import Register from "./auth/Register";
import { FiLogOut } from "react-icons/fi";

const Layout = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoginDialogOpen, setLoginDialogOpen] = useState(false);
  const [isRegisterMode, setRegisterMode] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
    const name = localStorage.getItem('name');
    if (name) {
      setUserName(name);
      setLoggedIn(true);
    }
  }, [location.pathname])




  const handleNavClick = (path) => {
    setActiveLink(path);
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };


  const openLoginDialog = () => {
    setLoginDialogOpen(true);
    setRegisterMode(false);
  };


  const closeDialog = () => {
    setLoginDialogOpen(false);
    setRegisterMode(false);
  };
  const handleLoginSuccess = () => {
    setLoggedIn(true);
    closeDialog();
  };

  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem('name');
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

              <div className="hidden sm:flex justify-end items-center relative">
                {isLoggedIn ? (
                  <div
                    className="relative "
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button className=" rounded-full dropHeader hover:bg-gray-100 transition-colors">
                      <UserCircle className="h-6 w-6 text-gray-600" />
                    </button>
                    {isDropdownOpen && (
                      <div className="absolute right-0 w-40 bg-white shadow-lg rounded-lg border border-gray-200">
                        <Link
                          to="/profile"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Profile
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="w-full text-left block px-4 py-2 text-sm text-red-700 hover:bg-gray-100"
                        >
                          Logout
                          <FiLogOut className="text-red-400 ml-5" />
                        </button>

                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={openLoginDialog}
                    className="bg-gradient-to-r from-indigo-500 to-indigo-700 px-6 py-3 text-white font-semibold rounded-lg shadow-md hover:from-indigo-600 hover:to-indigo-800 focus:outline-none active:scale-95 transition-all duration-300 ease-in-out"
                  >
                    Login
                  </button>
                )}
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
                  ? "text-indigo-600 bg-gray-100"
                  : "text-gray-500 hover:text-indigo-600 hover:bg-gray-100"
                  }`}
              >
                <Bike className="h-5 w-5 inline-block mr-2" />
                Vehicles
              </Link>

              {isLoggedIn ? (
                <Link
                  to="/profile"
                  onClick={() => handleNavClick("/profile")}
                  className="block px-4 py-2 text-sm text-gray-500 hover:text-indigo-600 hover:bg-gray-100 transition-colors"
                >
                  <UserCircle className="h-5 w-5 inline-block mr-2" />
                  Profile
                </Link>
              ) : (
                <button
                  onClick={openLoginDialog}
                  className="block w-full px-4 py-2 text-sm font-medium text-gray-500 hover:text-indigo-600 hover:bg-gray-100 transition-colors text-left"
                >
                  Login
                </button>
              )}
            </div>
          )}
        </div>
      </nav>

      <main className="p-4 sm:p-24">
        <Outlet />
      </main>

      <Footer />
      <Dialog open={isLoginDialogOpen} onClose={closeDialog}>
        {isRegisterMode ? (
          <Register switchToLogin={() => setRegisterMode(false)} />
        ) : (
          <Login
            switchToRegister={() => setRegisterMode(true)}
            closeDialog={handleLoginSuccess}
          />
        )}
      </Dialog>

    </div>
  );
};

export default Layout;

