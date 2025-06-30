import React from 'react';
import { useNavigate } from 'react-router-dom';

const TeachinUS = () => {
  const navigate = useNavigate()

  const handleButton = () =>{
    window.location.href='https://buy.stripe.com/4gM6oI74EgTd1fNe3u7AI00'
  }
  return (
    <>
      <section>
        <div className='w-full px-4 bg-[#F4F9F8]'>
          <div className='w-full h-[40px] bg-white'>
            <marquee behavior="scroll" direction="left" scrollamount="5" className="text-primary py-2 text-sm font-bold">
              Creating inclusive classrooms, one teacher at a time Hearthy Consulting LLC empowers educators and supports families through our SpedEveryday initiative.
            </marquee>
          </div>

          {/* teach in the US Section */}
          <div id="teach-in-us" className="bg-light py-16 px-4 md:px-12">
            <div className="max-w-5xl mx-auto">
              <h2
                className="text-2xl md:text-4xl lg:text-4xl font-bold text-primary mt-[-30px] mb-4 fade-up text-center"
                data-aos="fade-up"
              >
                Teach in the U.S.: Your Path Starts Here
              </h2>

              <p className="text-lg text-text mb-4" data-aos="fade-up" data-aos-delay="100">
                Whether you're currently outside the U.S. or already living here, we help aspiring teachers find their way into American classrooms. From international recruitment programs to alternate certification routes, we guide you step-by-step.
              </p>

              <div className="bg-white rounded-2xl shadow-md p-6 md:p-10 mt-10 space-y-6 fade-up" data-aos="fade-up" data-aos-delay="200">
                <h3 className="text-2xl font-semibold text-primary">
                  Teach in the United States – We'll Help You Get There
                </h3>

                <p className="text-text">
                  Becoming a teacher in the U.S. can be life-changing but the process can feel overwhelming. That's where we come in.
                </p>

                <ul className="list-disc list-inside text-text space-y-1">
                  <li>
                    <strong>International teacher recruitment</strong> – for qualified educators seeking opportunities to work in U.S. schools
                  </li>
                  <li>
                    <strong>Alternate routes to teaching</strong> – for individuals already in the U.S. who want to become certified teachers through non-traditional pathways
                  </li>
                </ul>

                <p className="text-text font-medium">Our services include:</p>
                <ul className="list-disc list-inside text-text space-y-1">
                  <li> Understanding visa sponsorship options</li>
                  <li> Guidance on state-by-state teaching requirements</li>
                  <li> Credential evaluation and document preparation</li>
                  <li> Application assistance and interview prep</li>
                </ul>

                <p className="text-text mt-4">
                  Whether you're abroad or already in the U.S., we'll help you step into the classroom with confidence.
                </p>

                <div className="mt-6 flex gap-4 flex-wrap items-center justify-center" data-aos="fade-up" data-aos-delay="300">
                  <button 
                  onClick={handleButton}
                  className="bg-accent text-primary lg:px-6 px-3 py-2 rounded-xl shadow hover:bg-secondary/30 transition-all text-[15px]">
                    Schedule Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeachinUS;