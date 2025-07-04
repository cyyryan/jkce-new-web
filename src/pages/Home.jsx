import React from 'react'
import HeroSection from '../components/HeroSection'
import ServicesOverview from '../components/ServicesOverview'
import WhyChooseUs from '../components/WhyChooseUs'
import RecentProjects from '../components/RecentProjects'
import Testimonials from '../components/Testimonials'
import CTASection from '../components/CTASection'

const Home = ({ language, onPageChange }) => {
  return (
    <div>
      <HeroSection language={language} onPageChange={onPageChange} />
      <ServicesOverview language={language} />
      <WhyChooseUs language={language} />
      <RecentProjects language={language} onPageChange={onPageChange} />
      <Testimonials language={language} />
      <CTASection language={language} />
    </div>
  )
}

export default Home 