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
import TrainingPage from './Pages/TrainingPage';
import ContactUs from './Pages/ContactUs';
import { FormProvider } from './Context/FormContext';
import ConsultationForm from './Pages/ConsultationForm';



const App = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="font-sans flex flex-col justify-between"> 
      <BrowserRouter>
        <FormProvider>
          <Quote />
          <Navbar />
          <div className="flex-1">
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

              <Route 
              path='/training'
              element={
                <PageWrapper>
                  <TrainingPage />
                </PageWrapper>
              }
              />

              <Route 
              path='/contact'
              element={
                <PageWrapper>
                  <ContactUs />
                </PageWrapper>
              }
              />

              <Route 
              path='/client-consultation'
              element={
                <PageWrapper>
                 <ConsultationForm />
                </PageWrapper>
              }
              />
            </Routes>
          </div>
          <Footer />
        </FormProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;