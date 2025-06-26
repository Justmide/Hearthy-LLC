import React from 'react';
import training from '../assets/Images/training.jpg';
import cruise from '../assets/Images/vacation.jpg';

const TrainingAndEvents = () => {
  return (
    <>
    <section className='bg-[#1877F3] text-white'>
      <div className="w-full text-center lg:text-[40px] text-[25px] text-white font-bold pt-5">
        <p>Hearthy Training & Events</p>
      </div>

      <div className="w-full bg-[#1877F3] py-10 px-4 space-y-20 text-white">

        {/* TRAINING SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div className="flex justify-center">
            <img
              src={training}
              alt="training session"
              className="w-full max-w-[500px] h-auto rounded-3xl shadow-md bg-white"
              loading="lazy"
            />
          </div>

          <div className="pt-4 flex flex-col lg:justify-normal lg:items-start items-center justify-center text-white">
            <div className="text-sm pb-2 font-semibold border-b-4 border-white w-fit lg:mx-0 text-white">
              🧑🏾‍🏫 TRAINING & DEVELOPMENT
            </div>
            <div className="text-center pt-4 text-[20px] lg:text-[40px] font-bold leading-snug lg:text-left text-white">
              <p>Empowering Educators & Families Through Training</p>
            </div>
            <div className="text-[15px] text-white font-medium italic pt-4 lg:text-justify text-center">
              <p>
                Whether you're an educator, parent, or student advocate, our workshops equip you with practical, inclusive skills to support learners with disabilities.
              </p>
              <ul className="list-none pt-4 space-y-2">
                <li className="bg-[#145db2] rounded px-2 py-1 inline-block">✅ Behavior Intervention Techniques</li>
                <li className="bg-[#145db2] rounded px-2 py-1 inline-block">✅ Inclusive Classroom Strategies</li>
                <li className="bg-[#145db2] rounded px-2 py-1 inline-block">✅ IEP & Communication Tools</li>
                <li className="bg-[#145db2] rounded px-2 py-1 inline-block">✅ Virtual & In-Person Options</li>
              </ul>
              <p className="pt-4">
                Build a foundation of confidence and compassion in every learning space.
              </p>
            </div>
          </div>
        </div>

        {/* EVENTS SECTION */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-6 px-2 lg:px-1">
          <div className="w-full lg:w-1/2 lg:justify-normal lg:items-start justify-center items-center flex flex-col text-white">
            <div className="lg:text-justify text-[16px] pb-2 font-semibold border-b-4 border-white w-fit text-white mb-4">
              🛳️ EVENTS & VACATIONS
            </div>
            <h2 className="text-center text-[20px] lg:text-[40px] md:text-[35px] sm:text-[30px] font-bold leading-snug text-white">
              Celebrate Life Beyond the Classroom
            </h2>
            <div className="text-[15px] text-white font-medium italic pt-4 leading-relaxed lg:text-justify text-center">
              <p>
               Educators and families deserve support and joy. That’s why we also plan vacations and events to inspire connection, celebration, and well-deserved rest.
              </p>
              <br />
              <strong className="text-white">Travel With Purpose</strong>
<br />
<span className="bg-[#145db2] rounded px-2 py-1 inline-block">✅ <strong>Cruise Adventures</strong></span> <br />
<span className="bg-[#145db2] rounded px-2 py-1 inline-block">✅ <strong>Milestone Celebrations</strong></span> <br />
<span className="bg-[#145db2] rounded px-2 py-1 inline-block">✅ <strong>Dockside Experiences</strong></span> <br />
<span className="bg-[#145db2] rounded px-2 py-1 inline-block">✅ <strong>Hassle-Free Getaways</strong></span><br />
<br />
<em>Celebrate your journey. Restore your joy. Make moments that last forever.</em>
              <br />
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={cruise}
              alt="people enjoying cruise vacation"
              className="w-full max-w-[550px] h-auto rounded-3xl shadow-lg bg-white"
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
