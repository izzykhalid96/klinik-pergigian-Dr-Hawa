import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Results from './components/Results'
import WhySection from './components/WhySection'
import Team from './components/Team'
import Reviews from './components/Reviews'
import Location from './components/Location'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Results />
        <WhySection />
        <Team />
        <Reviews />
        <Location />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
