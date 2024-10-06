"use client";

import NavBar from "@/components/NavBar"
import AboutPartners from "./components/AboutPartners"
import PartnersList from "./components/PartnersList"
import Footer from "@/components/Footer"
import Loader from "@/components/Loader";

import { useBranchData } from "@/providers/useBranchData";

const Partners = () => {
    const {
        partners
    } = useBranchData();

  return (
    <div>
        <NavBar transparent={false} />
        {partners ? (
            <div className="">
                <AboutPartners />
                <PartnersList partners={partners} />
            </div>
        ) : (
            <Loader />
        )}
        <Footer />
    </div>
  )
}

export default Partners