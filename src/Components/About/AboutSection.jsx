import React from 'react';
import aboutHero from '../../assets/Images/aboutHero.jpg';

const AboutSection = () => {
  return (
    <section className="relative w-full h-[500px] overflow-hidden flex items-center justify-center">
      {/* Education-focused Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={aboutHero}
          alt="special-education-teacher-training"
          loading='lazy'
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#F4F9F8]/40"></div> {/* Brand-colored overlay */}
      </div>

      {/* Centered Content */}
      <div className="relative z-10 text-center px-4 w-full max-w-4xl mx-auto"
            data-aos="fade-down">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center justify-center text-white/80 text-sm mb-4">
          <a href="/" className="hover:text-white transition-colors">
            Home
          </a>
          <span className="mx-2">/</span>
          <a
            href="/special-education"
            className="hover:text-white transition-colors font-bold"
          >
            Special Education
          </a>
        </nav>

        {/* Main Title + Mission Statement */}
        <div className="flex flex-col items-center"
              data-aos="fade-down">
          <h1 className="text-2xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Empowering <span className="text-[#2C4E49]">Special Education</span> Through Excellence in Training
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
            Transforming special education through comprehensive teacher training programs, 
            evidence-based strategies, and inclusive learning solutions.
          </p>

          {/* Action Buttons */}
          <div className="flex gap-4 flex-wrap justify-center">
            <button className="bg-[#3A6351] hover:bg-[#4e816b] text-white px-6 py-4 rounded-full text-base font-medium transition-all duration-300 shadow-lg">
              Explore Training Programs
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full text-base font-medium transition-all duration-300 backdrop-blur-sm border border-white/20">
              For Schools & Districts
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;