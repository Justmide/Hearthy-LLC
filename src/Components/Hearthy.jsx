import React from 'react';
import { FaHandsHelping, FaChalkboardTeacher, FaFileAlt, FaSchool } from 'react-icons/fa';

const Hearthy = () => {
  return (
    <section className="bg-[#1877F3] text-white py-16 px-4 md:px-20">
      <div className="max-w-6xl mx-auto text-center mb-12" data-aos="fade-up">
        <h2 className="text-xl md:text-4xl font-bold text-white mb-4">
          Training Educators to Deliver Special Education Every Day
        </h2>
        <p className="text-white max-w-3xl mx-auto text-base md:text-lg">
          Special education belongs in every classroom every single day at Hearthy Consulting LLC. We make it possible through support and expert training.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {/* SpedEveryday Card */}
        <div
          className="bg-[#145db2] p-6 rounded-2xl shadow-md border border-[#1877F3]/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="text-white text-3xl mb-4">
            <FaHandsHelping />
          </div>
          <h3 className="text-lg font-semibold text-white mb-3">What is SpedEveryday?</h3>
          <p className="text-white text-sm">
            SpedEveryday ensures students with disabilities get supported every day through practical strategies and heart-led teaching.
          </p>
        </div>

        {/* Teacher Training Card */}
        <div
          className="bg-[#145db2] p-6 rounded-2xl shadow-md border border-[#1877F3]/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <div className="text-white text-3xl mb-4">
            <FaChalkboardTeacher />
          </div>
          <h3 className="text-lg font-semibold text-white mb-3">Teacher Training</h3>
          <p className="text-white text-sm">
            Hands-on training equips educators with real-world tools for IEPs and adaptive lesson plans.
          </p>
        </div>

        {/* IEP Support Card */}
        <div
          className="bg-[#145db2] p-6 rounded-2xl shadow-md border border-[#1877F3]/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="text-white text-3xl mb-4">
            <FaFileAlt />
          </div>
          <h3 className="text-lg font-semibold text-white mb-3">
            <span className="block text-xs text-white/80 mb-1">(Individualized Education Program)</span>
            IEP Support
          </h3>
          <p className="text-white text-sm">
            We simplify IEP procedures for educators and families with realistic objectives and accommodations.
          </p>
        </div>

        {/* School Partnerships Card - New 4th Box */}
        <div
          className="bg-[#145db2] p-6 rounded-2xl shadow-md border border-[#1877F3]/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          data-aos="fade-up"
          data-aos-delay="250"
        >
          <div className="text-white text-3xl mb-4">
            <FaSchool />
          </div>
          <h3 className="text-lg font-semibold text-white mb-3">School Partnerships</h3>
          <p className="text-white text-sm">
            We collaborate with schools to build inclusive environments that support all learners.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hearthy;