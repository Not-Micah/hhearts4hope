"use client";

import Highlight from "@/components/Highlight"
import { DocumentData } from "firebase/firestore"

import { useRouter } from "next/navigation";

interface PartnerListsProps {
    partners: DocumentData[] | null;
}

const PartnersList: React.FC<PartnerListsProps> = ({ partners }) => {
    const router = useRouter();

  return (
    <div className="max-w-max w-full mx-auto
    px-x py-8 mb-28
    flex flex-col gap-y-4">
        <div className="">
            <Highlight text="Here are our partners!" />
        </div>
        <div className="flex flex-wrap gap-4">
            {
                partners?.map((partner, index) => (
                    <button 
                    key={index}
                    onClick={() => router.push(`/partners/partner?name=${partner?.name}`)}
                    className="w-[200px] h-[200px]">
                        <img src={partner?.photo} className="w-full h-full object-cover"/>
                    </button>
                ))
            }
        </div>
    </div>
  )
}

export default PartnersList