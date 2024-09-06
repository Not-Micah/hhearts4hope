import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import BranchList from "./components/BranchList";

const Impact = () => {
  return (
    <div className="">
      <NavBar transparent={false} />
      <div className="max-w-max mx-auto py-8 px-4
      flex flex-col justify-start items-start gap-y-4">
        <h3 className="dynamic-subheading font-bold font-title">
          Branches
        </h3>
        <BranchList />
      </div>
      <Footer />
    </div>
  )
}

export default Impact