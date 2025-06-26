import react from "react";
import training from '../../assets/Images/training.jpg';

const TrainingHero = () =>{
    return (
        <>
            <section className="relative w-full overflow-hidden flex items-center justify-center h-[500px] bg-white">
              {/* background with overlay */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={training}
                  alt="training-events-hero"
                  className="w-full h-full object-cover opacity-70"
                  loading='lazy'
                />
                {/* White overlay */}
                <div className="absolute inset-0 bg-black/40"></div> 
              </div>
      
              <div className="relative z-10 text-center px-4 w-full max-w-5xl mx-auto">
                {/* headline */}
                <div className="flex flex-col items-center justify-center h-full">
                  <h1 className="text-2xl lg:text-4xl font-bold text-[#1877F3] mb-4 drop-shadow-lg">
                    <span className="text-[#1877F3]">Training & Events</span>
                  </h1>
                  <p className="text-[#1877F3]/90 text-[15px] md:text-[23px] max-w-2xl mb-8 leading-relaxed">
                    Join our expert-led training sessions and engaging events designed to empower educators, families, and advocates. Learn, connect, and celebrate with the Hearthy community!
                  </p>
                  <button className="bg-[#1877F3] hover:bg-[#145db2] text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg flex items-center">
                    View Upcoming Events
                  </button>
                </div>
              </div>
            </section>
        </>
    );
};

export default TrainingHero