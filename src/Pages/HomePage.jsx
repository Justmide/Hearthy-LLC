import React from 'react'
import { CarouselDarkVariant } from '../Components/HeroSection'
import Hearthy from '../Components/Hearthy'
import TeachinUS from '../Components/TeachinUS'
import About from '../Components/Aboutus'
import TrainingAndEvents from '../Components/TrainingAndEvents'
import VideoSection from '../Components/VideoSection'
const HomePage = () => {
  return (
    <>
    {/* HERO SECTION  */}
  <div>
  <CarouselDarkVariant />
</div>

{/* SECTION TWO */}
<div>
  <About />
</div>

{/* SECTION THREE */}
<div>
  <Hearthy />
</div>

{/* VIDEO SECTION */}
<div>
  <VideoSection />
</div>

{/* OUR GOALS/SERVICE */}
<div>
  <TeachinUS />
</div>

{/* TRAINING AND EVENT */}
<div>
  <TrainingAndEvents />
</div>


    </>
  )
}

export default HomePage
