import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import AboutFounder from "./components/AboutFounder";
import MissionStatement from "./components/MissionStatement";

const About = () => {
  return (
    <div>
      <NavBar transparent={false} />
      <MissionStatement />
      <AboutFounder />
      <Footer />
    </div>
  )
}

export default About