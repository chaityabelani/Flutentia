import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechMarquee from './components/TechMarquee'
import About from './components/About'
import Services from './components/Services'
import Industries from './components/Industries'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import CTABanner from './components/CTABanner'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <About />
        <Services />
        <Industries />
        <Process />
        <Testimonials />
        <CTABanner />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
