import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CountryList from "./components/CountryList";

const Impact = () => {
  return (
    <div>
      <NavBar transparent={false} />
      <CountryList />
      <Footer />
    </div>
  )
}

export default Impact