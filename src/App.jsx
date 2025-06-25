import './index.css';
import React, { useEffect } from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Quote from './Components/Quote';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutUsPage from './Pages/AboutUsPage';
import Footer from './Components/Footer';
import OurServicePage from './Pages/OurServicePage';
import PageWrapper from './Components/PageWrapper';


const App = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="font-sans"> 
      <BrowserRouter>
        <Quote />
        <Navbar />
        <Routes>
          <Route 
            path="/" 
            element={
              <PageWrapper>
                <HomePage />
              </PageWrapper>
            } 
          />
          <Route 
            path="/about" 
            element={
              <PageWrapper>
                <AboutUsPage />
              </PageWrapper>
            } 
          />
          <Route 
            path="/service" 
            element={
              <PageWrapper>
                <OurServicePage />
              </PageWrapper>
            } 
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;