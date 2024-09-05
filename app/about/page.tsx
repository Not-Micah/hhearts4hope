import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import AboutFounder from "./components/AboutFounder";

const About = () => {
  return (
    <div>
      <NavBar transparent={false} />
      <AboutFounder />
      <Footer />
    </div>
  )
}

export default About