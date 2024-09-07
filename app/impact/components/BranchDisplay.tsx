"use client";

import { useState, useEffect } from "react";
import useGalleryDisplayModal from "@/hooks/useGalleryDisplayModal";

import { DocumentData } from "firebase/firestore";
import { getGallery } from "@/utils/database";

interface BranchDisplayProps {
    branch: DocumentData;
}

const BranchDisplay: React.FC<BranchDisplayProps> = ({ branch }) => {
    const [gallery, setGallery] = useState<DocumentData[] | null>(null);

    const {
        onOpen,
        setGalleryItem
    } = useGalleryDisplayModal();

    useEffect(() => {
        const unsubscribe = getGallery(branch.city, branch.highschool, setGallery);
        return () => unsubscribe();
    }, []);

    return (
        <div className="flex flex-col justify-center items-center mt-14">
            <div className="w-full flex justify-start items-start gap-x-16">
                <img 
                    src={branch.photo} 
                    className="w-[300px] h-[300px] object-cover rounded-lg drop-shadow" 
                />
                <div>
                    <p className="uppercase font-title font-bold text-lg">
                        {branch.highschool} Founder
                    </p>
                    <h3 className="text-3xl mb-4">
                        {branch.firstName} {branch.lastName}
                    </h3>
                    <p>{branch.description}</p>
                </div>
            </div>
            <div className="w-full h-[500px] bg-black/30 rounded-lg p-6 my-6 overflow-y-auto no-scrollbar">
                <div className="flex flex-wrap gap-4">
                    {gallery?.map((item, index) => (
                        <button 
                            key={index} 
                            className="w-[24%] h-[250px] flex-shrink-0"
                            onClick={() => {
                                setGalleryItem(item);
                                onOpen();
                            }}
                        >
                            <img 
                                src={item.image} 
                                className="w-full h-full object-cover rounded-lg" 
                            />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BranchDisplay;
