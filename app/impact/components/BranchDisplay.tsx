"use client";

import { useState, useEffect } from "react";
import { DocumentData } from "firebase/firestore";
import { getGallery } from "@/utils/database";

interface BranchDisplayProps {
    branch: DocumentData;
}

const BranchDisplay: React.FC<BranchDisplayProps> = ({ branch }) => {
    const [gallery, setGallery] = useState<DocumentData[] | null>(null);

    useEffect(() => {
        const unsubscribe = getGallery(branch.city, branch.highschool, setGallery);
        return () => unsubscribe();
    }, []);

  return (
    <div>
        <p>{branch.firstName} {branch.lastName}</p>
        <p>{branch.city}</p>
        <p>{branch.highschool}</p>
        <div>
            {gallery?.map((item, index) => (
                <div 
                key={index}
                className="">
                    {item.title}
                    <img src={item.image}
                    className="w-[300px] h-[300px] object-cover" />
                </div>
            ))}
        </div>
    </div>
  )
}

export default BranchDisplay