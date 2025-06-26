import React from 'react';
import serviceHero from '../../assets/Images/serviceHero.jpg';

const ServicesHero = () => {
  return (
    <section className="relative w-full overflow-hidden flex items-center justify-center h-[500px]">
      {/* background with overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={serviceHero}
          alt="special-education-support"
          className="w-full h-full object-cover"
          loading='lazy'
        />
        {/* White overlay */}
        <div className="absolute inset-0 bg-white/60"></div> 
      </div>

      <div className="relative z-10 text-center px-4 w-full max-w-5xl mx-auto flex flex-col items-center justify-center h-full">
        {/* Service path navigation */}
        <nav className="flex items-center justify-center text-[#1877F3]/80 text-sm mb-4 gap-2">
          <a href="/" className="hover:text-[#1877F3] transition-colors underline underline-offset-4">Home</a>
          <span className="mx-2">/</span>
          <a href="/service" className="hover:text-[#1877F3] transition-colors underline underline-offset-4">Services</a>
        </nav>

        {/* headline */}
        <div className="flex flex-col items-center">
          <h1 className="text-[22px] md:text-[32px] lg:text-5xl font-bold text-[#1877F3] mb-4 drop-shadow-lg tracking-tight">
            <span className="text-[#1877F3]">Special Education</span> Support Services
          </h1>
          <p className="text-[#1877F3]/90 text-[15px] md:text-[23px] max-w-2xl mb-8 leading-relaxed shadow-sm">
            We provide personalized support for students with disabilities through inclusive education, tailored learning plans, and professional therapy services. Our goal is to help every child thrive academically, socially, and emotionally.
          </p>
          {/* CTA buttons */}
          <div className="flex gap-4 flex-wrap justify-center">
            <button className="bg-[#1877F3] hover:bg-[#145db2] text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg flex items-center text-base">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Schedule Consultation
            </button>
            <button className="bg-transparent hover:bg-[#1877F3]/10 text-[#1877F3] px-6 py-3 rounded-full font-semibold transition-all duration-300 border-2 border-[#1877F3] flex items-center text-base">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Get in Touch With Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;