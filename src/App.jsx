import './App.css'
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from './components/Layout';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  const location =useLocation()
useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}, [location.pathname])
  return (
   <>
   <Layout/>
   </>
  )
}

export default App
