// app/page.js
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Certifications from '../components/Certifications'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Certifications />
      <About />
      <Contact />
      <Footer />
    </>
  )
}
