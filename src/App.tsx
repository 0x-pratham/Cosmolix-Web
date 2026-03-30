import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import CTA from './components/Cta'
import Products from './components/Products'
import Services from './components/Services'

function App() {
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

export default App