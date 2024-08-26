import Hero from "@/components/Hero"
import Services from "@/components/Services"
import Gallery from "@/components/Gallery"
import SignUps from "@/components/SignUps"
import Branches from "@/components/Branches"
import Testimonials from "@/components/Testimonials"

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Gallery />
      <SignUps />
      <Branches />
      <Testimonials />
    </div>
  )
}

export default Home