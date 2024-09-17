import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ApplicationInformation from "./components/ApplicationInformation";

const GetInvolved = () => {
  return (
    <div>
      <NavBar transparent={false} />
      <ApplicationInformation />
      <Footer />
    </div>
  )
}

export default GetInvolved