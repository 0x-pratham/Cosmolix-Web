import React from 'react'
import Footer from '../components/Footer'
import CTA from '../components/Cta'
import Products from '../components/Products'
import Services from '../components/Services'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

function Home() {
  return (
     <div style={{ backgroundColor: '#FAFAF8', minHeight: '100vh' }}>
          <Navbar />
          <Hero />
          <Services />
          <Products />
          <CTA />
          <Footer />
        </div>
  )
}

export default Home
