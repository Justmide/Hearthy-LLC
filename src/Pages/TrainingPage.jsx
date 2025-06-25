import react from "react";
import TrainingHero from "../Components/Training/TrainingHero";
import TrainingAndEvents from "../Components/TrainingAndEvents";

const TrainingPage = () => {
  return (
   <>
   {/* HERO  */}
   <section>
    <div>
        <TrainingHero />
    </div>
 </section>

 <section>
    <div>
        <TrainingAndEvents />
    </div>
 </section>
  
   </>
  );
}

export default TrainingPage