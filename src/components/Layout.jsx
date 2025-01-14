import React, { useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Home, Building2, Bike, UserCircle, Menu, X } from "lucide-react";
import Footer from "./Footer";
import Dialog from "@mui/material/Dialog";
import logoImg from '../assets/logo.png'
import Login from "./auth/Login";
import Register from "./auth/Register";
import { FiLogOut } from "react-icons/fi";
import { toast } from "react-toastify";
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import PostRequirement from "./PostRequirement/PostRequirement";

const Layout = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoginDialogOpen, setLoginDialogOpen] = useState(false);
  const [isRegisterMode, setRegisterMode] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [userName, setUserName] = useState('');
  const [isPostRequirementOpen, setPostRequirementOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    const name = localStorage.getItem('name');
    if (name) {
      setUserName(name);
      setLoggedIn(true);
    }
  }, [location.pathname]);

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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem('name');
    toast.success("Logout successful");
    navigate("/")
  };

  const openPostRequirementModal = () => {
    setPostRequirementOpen(true);
  };

  const closePostRequirementModal = () => {
    setPostRequirementOpen(false);
  };

  return (
    <div className="bg-gray-50 mx-auto sticky top-0">
      <nav className="bg-white shadow-md fixed w-full z-[9999] ">
        <div className="max-w-7xl  mx-auto px-4 pb-3 md:pb-0">
          <div className="flex justify-between h-16 items-center">
            <div className="flex gap-12">
              {/* Logo */}
              <div className="flex items-center">
                <Link
                  to="/"
                  onClick={() => handleNavClick("/")}
                  className={`flex items-center ${activeLink === "/"}`}
                >
                  <img src={logoImg} alt="" className="w-16" />
                </Link>
              </div>

              {/* Desktop Links */}
              <div className="hidden sm:flex sm:space-x-8">
                <Link
                  to="/"
                  onClick={() => handleNavClick("/")}
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium transition-all ${activeLink === "/"
                    ? "text-indigo-600 border-b-2 border-indigo-600"
                    : "text-gray-500 hover:text-indigo-600 hover:border-b-2 hover:border-indigo-600" // Hover state
                    }`}
                >
                  <Home className="h-5 w-5" />
                  <span className="ml-2">Home</span>
                </Link>
                <Link
                  to="/about"
                  onClick={() => handleNavClick("/about")}
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium transition-all ${activeLink === "/about"
                    ? "text-indigo-600 border-b-2 border-indigo-600"
                    : "text-gray-500 hover:text-indigo-600 hover:border-b-2 hover:border-indigo-600"
                    }`}
                >
                  <Building2 className="h-5 w-5" />
                  <span className="ml-2">About</span>
                </Link>
                <Link
                  to="/services"
                  onClick={() => handleNavClick("/services")}
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium transition-all ${activeLink === "/services"
                    ? "text-indigo-600 border-b-2 border-indigo-600"
                    : "text-gray-500 hover:text-indigo-600 hover:border-b-2 hover:border-indigo-600"
                    }`}
                >
                  <Bike className="h-5 w-5" />
                  <span className="ml-2">Services</span>
                </Link>
                <Link
                  to="/blogs"
                  onClick={() => handleNavClick("/blogs")}
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium transition-all ${activeLink === "/blogs"
                    ? "text-indigo-600 border-b-2 border-indigo-600"
                    : "text-gray-500 hover:text-indigo-600 hover:border-b-2 hover:border-indigo-600"
                    }`}
                >
                  <Building2 className="h-5 w-5" />
                  <span className="ml-2">Blogs</span>
                </Link>
              </div>
            </div>

            <div className="flex justify-end gap-4">
              {/* Mobile Menu Icon */}
              <div className="sm:hidden flex items-center ">
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
              <div className="hidden md:flex">
                <button
                  onClick={openPostRequirementModal}
                  className="ml-4 border-2 border-indigo-500 px-4 py-2 text-black text-sm font-semibold rounded-lg shadow-md hover:border-indigo-700 focus:outline-none active:scale-95 transition-all duration-300 ease-in-out"
                >
                  Post Requirement
                </button>
              </div>
              <div className="hidden sm:flex justify-end items-center relative" ref={dropdownRef}>
                {isLoggedIn ? (
                  <div>
                    <button
                      className="rounded-full dropHeader hover:bg-gray-100 transition-colors"
                      onClick={() => setDropdownOpen(!isDropdownOpen)}
                    >
                      <UserCircle className="h-6 w-6 text-gray-600" />
                    </button>
                    {isDropdownOpen && (
                      <div className="absolute -right-2 mt-4  w-40 bg-white shadow-lg rounded-lg border border-gray-200">
                        <Link
                          onClick={() => setDropdownOpen(false)}
                          to="/profile"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Profile
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="w-full text-left block px-4 py-2 text-sm text-red-700 hover:bg-gray-100"
                        >
                          <div className="flex items-center gap-2">
                            <FiLogOut className="text-red-400" />
                            Logout
                          </div>
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={openLoginDialog}
                    className="border-2 border-indigo-500 px-4 py-2 text-black  text-sm font-semibold rounded-lg shadow-md hover:border-indigo-700 focus:outline-none active:scale-95 transition-all duration-300 ease-in-out"
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
                to="/"
                onClick={() => handleNavClick("/")}
                className={`block px-4 py-2 text-sm font-medium transition-all ${activeLink === "/"
                  ? "text-indigo-600 bg-gray-100"
                  : "text-gray-500 hover:text-indigo-600 hover:bg-gray-100"
                  }`}
              >
                <Home className="h-5 w-5 inline-block mr-2" />
                Home
              </Link>

              <Link
                to="/about"
                onClick={() => handleNavClick("/about")}
                className={`block px-4 py-2 text-sm font-medium transition-all ${activeLink === "/about"
                  ? "text-indigo-600 bg-gray-100"
                  : "text-gray-500 hover:text-indigo-600 hover:bg-gray-100"
                  }`}
              >
                <Building2 className="h-5 w-5 inline-block mr-2" />
                About
              </Link>

              <Link
                to="/services"
                onClick={() => handleNavClick("/services")}
                className={`block px-4 py-2 text-sm font-medium transition-all ${activeLink === "/services"
                  ? "text-indigo-600 bg-gray-100"
                  : "text-gray-500 hover:text-indigo-600 hover:bg-gray-100"
                  }`}
              >
                <Bike className="h-5 w-5 inline-block mr-2" />
                Services
              </Link>

              <Link
                to="/blogs"
                onClick={() => handleNavClick("/blogs")}
                className={`block px-4 py-2 text-sm font-medium transition-all ${activeLink === "/blogs"
                  ? "text-indigo-600 bg-gray-100"
                  : "text-gray-500 hover:text-indigo-600 hover:bg-gray-100"
                  }`}
              >
                <Building2 className="h-5 w-5 inline-block mr-2" />
                Blogs
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
        <div className="md:hidden fixed top-15 z-50 border-t-2 left-0 right-0 bg-white shadow-lg sm:hidden">
          <div className="flex justify-center items-center p-4">
            <button
              onClick={openPostRequirementModal}
              className="border-2 border-indigo-500 px-6 py-3 text-black font-semibold rounded-lg shadow-md hover:border-indigo-700 focus:outline-none active:scale-95 transition-all duration-300 ease-in-out"
            >
              Post Requirement
            </button>
          </div>
        </div>
      </nav>

      <main className="p-4 sm:p-28">
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
      <Dialog open={isPostRequirementOpen} onClose={closePostRequirementModal}>
        <PostRequirement closeDialog={closePostRequirementModal} />
      </Dialog>
      <TawkMessengerReact
        propertyId="property_id"
        widgetId="default" />

    </div>
  );
};

export default Layout;
