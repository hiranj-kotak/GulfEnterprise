import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header.jsx"
import './index.css';
import Home from './components/Home.jsx';
import AboutUS from './components/AboutUS.jsx';
import OurProducts from './components/OurProducts.jsx';
import ContactUs from './components/ContactUS/ContactUs.jsx';
import Footer from './components/Footer/Footer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<AboutUS />} />
        <Route path="/Products" element={<OurProducts />} />
        <Route path="/Contact" element={<ContactUs />} />

      </Routes>
      <Footer />
    </BrowserRouter>

  </StrictMode>,
)
