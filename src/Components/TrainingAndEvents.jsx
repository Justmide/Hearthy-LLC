import React from 'react';
import training from '../assets/Images/training.jpg';
import cruise from '../assets/Images/vacation.jpg';

const TrainingAndEvents = () => {
  return (
    <>
    <section className='bg-[#cce4ed] text-[#000000]'>
      <div className="w-full text-center lg:text-[40px] text-[25px] text-[#000000] font-bold pt-5">
        <p>Hearthy Training & Events</p>
      </div>

      <div className="w-full bg-[#cce4ed] py-10 px-4 space-y-20 text-[#000000]">

        {/* TRAINING SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div className="flex justify-center">
            <img
              src={training}
              alt="training session"
              className="w-full max-w-[500px] h-auto rounded-3xl shadow-md"
              loading="lazy"
            />
          </div>

          <div className="pt-4 flex flex-col lg:justify-normal lg:items-start items-center justify-center text-[#000000]">
            <div className="text-sm pb-2 font-semibold border-b-4 border-primary w-fit lg:mx-0 text-[#000000]">
              🧑🏾‍🏫 TRAINING & DEVELOPMENT
            </div>
            <div className="pt-4 text-[20px] lg:text-[40px] font-bold leading-snug lg:text-left text-[#000000]">
              <p>Empowering Educators & Families Through Training</p>
            </div>
            <div className="text-[15px] text-[#000000] font-medium italic pt-4 lg:text-justify text-center">
              <p>
                Whether you're an educator, parent, or student advocate, our workshops equip you with practical, inclusive skills to support learners with disabilities.
              </p>
              <ul className="list-none pt-4 space-y-2">
                <li>✅ Behavior Intervention Techniques</li>
                <li>✅ Inclusive Classroom Strategies</li>
                <li>✅ IEP & Communication Tools</li>
                <li>✅ Virtual & In-Person Options</li>
              </ul>
              <p className="pt-4">
                Build a foundation of confidence and compassion in every learning space.
              </p>
            </div>
          </div>
        </div>

        {/* EVENTS SECTION */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-6 px-2 lg:px-1">
          <div className="w-full lg:w-1/2 lg:justify-normal lg:items-start justify-center items-center flex flex-col text-[#000000]">
            <div className="lg:text-justify text-[16px] pb-2 font-semibold border-b-4 border-primary w-fit text-[#000000] mb-4">
              🛳️ EVENTS & VACATIONS
            </div>
            <h2 className="text-[20px] lg:text-[40px] md:text-[35px] sm:text-[30px] font-bold leading-snug text-[#000000]">
              Celebrate Life Beyond the Classroom
            </h2>
            <div className="text-[15px] text-[#000000] font-medium italic pt-4 leading-relaxed lg:text-justify text-center">
              <p>
               Educators and families deserve support and joy. That’s why we also plan vacations and events to inspire connection, celebration, and well-deserved rest.
              </p>
              <br />
              <strong className="text-[#000000]">Travel With Purpose</strong>
<br />
✅ <strong>Cruise Adventures</strong> <br />
✅ <strong>Milestone Celebrations</strong> <br />
✅ <strong>Dockside Experiences</strong> <br />
✅ <strong>Hassle-Free Getaways</strong><br />
<br />
<em>Celebrate your journey. Restore your joy. Make moments that last forever.</em>
              <br />
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={cruise}
              alt="people enjoying cruise vacation"
              className="w-full max-w-[550px] h-auto rounded-3xl shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
      
    </>
  );
};

export default TrainingAndEvents;
