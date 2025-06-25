import React from 'react'
import ServicesHero from '../Components/Our Service/ServiceHero'
import HearthyServices from '../Components/Our Service/ServiceDetails'
import ServiceDetails from '../Components/Our Service/ServiceDetails'


const OurServicePage = () => {
  return (
    <>
    <section>
        {/* service hero section */}
    <div>
        <ServicesHero />
    </div>

    <div>
        {/* <HearthyServices /> */}
        <ServiceDetails />
    </div>
    </section>
    </>
  )
}

export default OurServicePage
