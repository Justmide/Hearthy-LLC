import React from 'react';
import { FaChalkboardTeacher, FaGlobeAmericas, FaUmbrellaBeach } from 'react-icons/fa';

const About = () => {
  return (
    <section className="bg-[#f4f9f8] text-text py-16 px-6 md:px-20" id="about">
      {/* WHO WE ARE */}
      <div className="text-center max-w-4xl mx-auto mb-14" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">📘 Who We Are</h2>
        <p className="text-gray-700 text-base md:text-lg">
          At <strong>Hearthy Consulting LLC</strong>, we believe in transforming lives inside and outside the classroom. <br />
          We offer:
        </p>
        <ul className="text-gray-600 mt-4 space-y-2 text-base md:text-lg">
          <li>✔️ Professional development for educators and parents</li>
          <li>✔️ Transition support for international teachers</li>
          <li>✔️ Special needs training for inclusive communities</li>
          <li>✔️ Vacation planning and event celebration packages</li>
        </ul>
        <p className="mt-4 text-secondary font-medium">
          We’re where education meets empowerment—and where work meets well-being.
        </p>
      </div>

      {/* CORE SERVICES GRID */}
     <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
        {/* Training & Development */}
        <div
          className="bg-background border border-accent/30 shadow-md p-8 rounded-2xl text-center hover:shadow-xl transition"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="text-accent text-4xl mb-4 mx-auto">
            <FaChalkboardTeacher />
          </div>
          <h3 className="text-xl font-semibold text-primary mb-3">🎓 Training & Development</h3>
          <p className="text-gray-700 text-sm md:text-base">
            Workshops for teachers, parents, and students with disabilities. Learn behavior intervention, inclusion, and communication skills—virtually or in-person.
          </p>
        </div>

        {/* International Teacher Support */}
        <div
          className="bg-background border border-accent/30 shadow-md p-8 rounded-2xl text-center hover:shadow-xl transition"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="text-accent text-4xl mb-4 mx-auto">
            <FaGlobeAmericas />
          </div>
          <h3 className="text-xl font-semibold text-primary mb-3">🌐 International Teacher Support</h3>
          <p className="text-gray-700 text-sm md:text-base">
            We help new and aspiring U.S. educators with credentialing, cultural prep, classroom readiness, and personal coaching—step by step.
          </p>
        </div>

        {/* Cruise & Celebrations */}
        <div
          className="bg-background border border-accent/30 shadow-md p-8 rounded-2xl text-center hover:shadow-xl transition"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="text-accent text-4xl mb-4 mx-auto">
            <FaUmbrellaBeach />
          </div>
          <h3 className="text-xl font-semibold text-primary mb-3">🛳️ Cruise Vacations & Celebrations</h3>
          <p className="text-gray-700 text-sm md:text-base">
            Just wrapped a long school year? We’ve got you covered. Enjoy cruise trips, destination birthdays, and unforgettable events in dock cities and beyond.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
