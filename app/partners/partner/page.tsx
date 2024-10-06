"use client";

import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import Loader from "@/components/Loader";

import { FaInstagram, FaExternalLinkAlt } from "react-icons/fa";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import { useBranchData } from "@/providers/useBranchData";
import { DocumentData } from "firebase/firestore";

const PartnerContent = () => {
    const searchParams = useSearchParams();
    const name = searchParams.get("name");

    const { partners } = useBranchData();
    const [partner, setPartner] = useState<DocumentData | null>(null); 
    
    useEffect(() => {
        if (name) {
            const matchingPartner = partners?.find(
                (partner: any) => partner.name === name
            );
            setPartner(matchingPartner || null);
        }
    }, [name, partners]);    

  return (
    <div className="">
        <NavBar transparent={false}/>
        <div 
            className="
            max-w-max w-full mx-auto
            px-x py-32 max-lg:py-8 max-lg:mb-16
            flex flex-col gap-y-8">
            <div className="flex gap-x-20 w-full
            max-lg:flex-col max-lg:gap-y-8">
                <img src={partner?.photo} className="w-[400px] h-[400px] object-cover rounded-md
                max-lg:w-full max-lg:h-auto" />
                <div className="flex flex-col gap-y-4 h-[400px] overflow-y-scroll no-scrollbar
                max-lg:h-full w-full" >
                    <h3 className="dynamic-subheading">{partner?.name}</h3>
                    <p className="dynamic-text">
                        {partner?.description}
                    </p>
                    <div className="flex gap-x-6">
                        <a 
                        className="flex justify-center items-center gap-x-2
                        text-gray-500 underline"
                        href={partner?.instagram}>
                            Instagram <FaInstagram />  
                        </a>
                        <a
                        className="flex justify-center items-center gap-x-2
                        text-gray-500 underline"
                        href={partner?.website}>
                            Website <FaExternalLinkAlt />
                        </a>
                    </div>
                </div>
            </div>  
        </div>
        <Footer />
    </div>
  )
}

const Partner = () => {
    return (
        <Suspense fallback={<Loader />}>
            <PartnerContent />
        </Suspense>
    )
}

export default Partner