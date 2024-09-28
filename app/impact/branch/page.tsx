"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getGallery } from "@/utils/database";
import { useBranchData } from "@/providers/useBranchData";
import useGalleryDisplayModal from "@/hooks/useGalleryDisplayModal";

import Loader from "@/components/Loader";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const Branch = () => {
  const searchParams = useSearchParams();
  
  const country = searchParams.get("country");
  const city = searchParams.get("city");

  const {
    onOpen,
    setGalleryItem
    } = useGalleryDisplayModal();

  const { branches } = useBranchData();
  const [branchDataList, setBranchDataList] = useState<any[]>([]); 
  const [galleryItems, setGalleryItems] = useState<Record<string, any[]>>({}); 

  // Fetch all branches matching the country and city
  useEffect(() => {
    if (country && city && branches) {
      const matchingBranches = branches.filter(
        (branch: any) => branch.country === country && branch.city === city
      );
      setBranchDataList(matchingBranches || []);
    }
  }, [country, city, branches]);

  // Fetch gallery for each branch
  useEffect(() => {
    if (branchDataList.length > 0) {
      branchDataList.forEach((branch) => {
        const { city, highschool } = branch;
        getGallery(city, highschool, (items) => {
          setGalleryItems((prev) => ({
            ...prev,
            [`${city}-${highschool}`]: items,
          }));
        });
      });
    }
  }, [branchDataList]);

  if (!branchDataList.length) {
    return <Loader />;
  }

  return (
    <div className="">
        <NavBar transparent={false} />
        <div className="px-x max-w-max w-full mx-auto flex flex-col gap-y-36 my-16">
            {
                branchDataList.map((branch, index) => (
                  <div 
                  key={index}
                  className="flex flex-col gap-y-8">
                    <div className="flex gap-x-20
                    max-lg:flex-col max-lg:gap-y-8">
                        <img src={branch?.photo} className="w-[400px] h-[400px] object-cover rounded-md
                        max-lg:w-full max-lg:h-auto" />
                        <div className="flex flex-col gap-y-4 h-[400px] overflow-y-scroll no-scrollbar
                        max-lg:h-full" >
                            <div className="">
                                <p className="dynamic-text mb-1">{branch.highschool}</p>
                                <h3 className="dynamic-subheading">{branch.firstName} {branch.lastName}</h3>
                            </div>
                            <p className="dynamic-text">
                                {branch.description}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-4">
                            {
                                (galleryItems[`${branch.city}-${branch.highschool}`] || []).map((galleryItem, index) => (
                                    <button 
                                    key={index}
                                    onClick={() => {
                                        setGalleryItem(galleryItem);
                                        onOpen();
                                    }}
                                    className="p-4 border rounded shadow-sm">
                                        <h3 className="dynamic-text text-left text-nowrap overflow-hidden">{galleryItem.title}, {galleryItem.description}</h3>
                                    </button>
                                ))
                            }
                    </div>
                </div>
                ))
            }
        </div>
        <Footer />
    </div>
  );
};

export default Branch;
