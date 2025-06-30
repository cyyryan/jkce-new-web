import React from 'react'
import { Link } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import ServicesOverview from '../components/ServicesOverview'
import WhyChooseUs from '../components/WhyChooseUs'
import RecentProjects from '../components/RecentProjects'
import Testimonials from '../components/Testimonials'
import CTASection from '../components/CTASection'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ServicesOverview />
      <WhyChooseUs />
      <RecentProjects />
      <Testimonials />
      <CTASection />
    </div>
  )
}

export default Home 