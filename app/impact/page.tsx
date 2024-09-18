"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import BranchList from "./components/BranchList";
import BranchMap from "@/components/BranchMap";
import Loader from "@/components/Loader";

import { useBranchData } from "@/providers/useBranchData";

const Impact = () => {
  const {
    branches
  } = useBranchData();

  return (
    <div className="">
      <NavBar transparent={false} />
        {
          branches ? (
            <div className="">
              <BranchList branches={branches} />
              <div className="max-w-max w-full mx-auto h-[500px]
              px-4 py-8 mb-8">
                <BranchMap branches={branches}/>
              </div>
            </div>
          ) : (
            <Loader />
          )
        }
      <Footer />
    </div>
  )
}

export default Impact