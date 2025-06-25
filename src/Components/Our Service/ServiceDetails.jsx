import React from "react";
import { useNavigate } from "react-router-dom";

const ServiceDetails = () => {
  const navigate = useNavigate()
  
  const handleContactUs = () =>{
    navigate('/contact')
  }
  return (
    <>
      <section className="bg-[#f4f9f8] w-full p-2 py-10 flex flex-col px-5">
        <div>
          {/* Heading  */}
          <div className="text-[17px] lg:text-3xl font-heading text-primary mb-3"
          data-aos="fade-up">
            <p>🌟Special Education Support</p>
          </div>

          {/* body */}
          <div className="lg:text-[20px] text-[13px]"
          data-aos="fade-up">
            <p className="text-gray-700 text-base md:text-lg">
             <strong>Hearthy Consulting LLC</strong>, believe that <strong>every
              child deserves a chance to thrive </strong> regardless of their abilities
              or challenges. Our <strong> Special Education Support </strong> services are designed
              to empower students with disabilities by offering personalized,
              inclusive, and compassionate assistance that meets their unique
              learning needs.
            </p>
          </div>

           {/* SubHeading  */}
          <div className="mt-4 text-[15px] lg:text-2xl font-heading text-primary mb-2"
          data-aos="fade-up">
            <p>
              💡 What We Offer:
            </p>

            {/* list of offer */}
              <ul className="text-gray-500 mt-4 space-y-2 text-[14px] md:text-lg flex flex-col gap-2"
                data-aos="fade-down">
          <li>
            ✔️ <strong className="mr-2">Individualized Education Plans (IEPs):</strong> 
            Customized learning goals and strategies developed in collaboration with teachers, specialists, and families.
            </li>

          <li>
            ✔️ <strong className="mr-2">Specialized Instruction:</strong>
            Adapted teaching methods tailored to cognitive, emotional, physical, or learning challenges.
            </li>

          <li>
            ✔️ <strong className="mr-2">Classroom Support:</strong>
            In-class aides, resource teachers, and modified materials to help students succeed alongside their peers.
          </li>

          <li>
            ✔️ <strong className="mr-2">Speech, Occupational & Physical Therapy:</strong>
            Professional support services provided as needed, in coordination with the IEP.
            </li>

            <li>
            ✔️ <strong className="mr-2">Behavioral & Emotional Support:</strong>
            Compassionate strategies and counseling to help students manage emotions and social interactions.
            </li>

            <li>
            ✔️ <strong className="mr-2">Assistive Technology:</strong>
            Tools and devices that help students communicate, learn, and participate more effectively.
            </li>
        </ul>
          </div>

             {/* SubHeading  */}
          <div className="mt-8 text-[14px] lg:text-2xl font-heading text-primary mb-2"
          data-aos="fade-up">
            <p>
             🤝 Our Approach:
            </p>

            {/* list of offer */}
              <ul className="text-gray-500 mt-4 space-y-2 text-[12px] md:text-lg flex flex-col gap-2 "
                    data-aos="fade-down">
          <li>
            ✔️ <strong className="mr-2">Inclusive:</strong> 
           We promote learning in the least restrictive environment possible, ensuring all students feel valued and included.
            </li>

          <li>
            ✔️ <strong className="mr-2">Collaborative:</strong>
           Parents, caregivers, teachers, therapists, and students work as a team in the planning and support process.
            </li>

          <li>
            ✔️ <strong className="mr-2">Strength-Based:</strong>
           We focus on each child’s unique strengths, not just their challenges, building confidence and resilience.
          </li>

        </ul>
          </div>

            <div className="mt-8 text-[15px] lg:text-2xl font-heading text-primary mb-3"
            data-aos="fade-up">
            <p>
            👨‍🏫 Who We Support:
            </p>


            <p className="lg:text-[16px] text-[12px] lg:px-10 px-4 mt-3">Our services are available for students with a variety of needs, including but not limited to:</p>
            {/* list of offer */}
              <ul className="text-gray-500 mt-4 space-y-2 text-[14px] md:text-lg flex flex-col gap-2 "
                    data-aos="fade-down">
          <li>
            ✔️ <strong className="mr-2">Autism Spectrum Disorders (ASD)</strong> 
            </li>

          <li>
            ✔️ <strong className="mr-2">ADHD</strong>
            </li>

          <li>
            ✔️ <strong className="mr-2">
              Dyslexia and other learning disabilities
            </strong>
          </li>

           <li>
            ✔️ <strong className="mr-2">
              Speech and language impairments
            </strong>
          </li>

           <li>
            ✔️ <strong className="mr-2">
              Physical and mobility challenges
            </strong>
          </li>

           <li>
            ✔️ <strong className="mr-2">
              Intellectual disabilities
            </strong>
          </li>

           <li>
            ✔️ <strong className="mr-2">
              Emotional or behavioral disorders
            </strong>
          </li>

        </ul>
          </div>

          {/* Service highlights */}
          <div className="">
            {/* headlight */}
             <div className="mt-8 text-[15px] lg:text-2xl font-heading text-primary mb-3"
            data-aos="fade-down">
              <p>
              📌 Service Highlights
              </p>
            </div>
           
           {/* 2box  */}
           <div className="lg:flex-row md:flex-row flex flex-col gap-7 justify-center "
           data-aos="fade-down">
             <div className="bg-[#cce4ed] p-6 rounded-xl backdrop-blur-sm lg:w-[500px] text-center">
              <h3 className="lg:text-xl text-[15px] font-bold text-gray-500 mb-2">Advocacy Services</h3>
              <p className="lg:text-[16px] text-[12px] font-heading text-primary">
                Expert guidance through IEP processes, parent empowerment, and systemic advocacy for equitable education access.
              </p>
            </div>
            <div className="bg-[#cce4ed] p-6 rounded-xl backdrop-blur-sm lg:w-[500px] text-center">
              <h3 className="lg:text-xl text-[15px] font-bold text-gray-500 mb-2">Comprehensive Assessments</h3>
                <p className="lg:text-[16px] font-heading text-primary text-[12px]">
                Multidisciplinary evaluations to identify learning needs and create targeted intervention plans.
              </p>
            </div>
           </div>
          </div>


          {/* need help */}
          <div className="mt-8 text-[15px] lg:text-2xl font-heading text-primary mb-3"
            data-aos="fade-down">
              <p>
                💬 Need Help?
              </p>

              <div className="flex flex-col justify-center items-center gap-3 h-[160px] mt-7 rounded-[10px] lg:px-[80px] px-[10px] bg-[#cce4ed]">
                <p className="lg:text-[16px] text-center text-[10px]"
                 data-aos="fade-down">If you believe your child may benefit from special education services, or you just have questions, we’re here for you. Reach out today for a confidential consultation with our support team
</p>
              <button 
              className="w-[130px] lg:w-[150px] h-[30px] lg:h-[40px] border-primary rounded-[7px] text-[14px] text-white bg-primary"
              data-aos="fade-down"
              onClick={handleContactUs}>
                Contact Us
              </button>
              </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetails;
