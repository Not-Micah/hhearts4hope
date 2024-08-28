import NavBar from "@/components/NavBar"
import Hero from "@/components/Hero"
import Pin from "@/components/Pin"
import Services from "@/components/Services"
import Gallery from "@/components/Gallery"
import SignUps from "@/components/SignUps"
import Branches from "@/components/Branches"
import Testimonials from "@/components/Testimonials"
import Footer from "@/components/Footer"

const Home = () => {
  return (
    <div>
      <NavBar transparent={true} />
      <Hero />
      <Pin />
      <Services />
      <Gallery />
      <SignUps />
      <Branches />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default Home