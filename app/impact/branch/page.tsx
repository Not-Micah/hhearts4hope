"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getGallery } from "@/utils/database";
import { useBranchData } from "@/providers/useBranchData";

import Loader from "@/components/Loader";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const Branch = () => {
  const searchParams = useSearchParams();
  
  const country = searchParams.get("country");
  const city = searchParams.get("city");

  const { branches } = useBranchData();
  const [branchDataList, setBranchDataList] = useState<any[]>([]); // List of branches for same city & country
  const [galleryItems, setGalleryItems] = useState<Record<string, any[]>>({}); // Store gallery items per branch

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
        <div className="px-4 py-20 mt-20 max-w-max w-full mx-auto flex flex-col gap-y-20">
            {branchDataList.map((branch) => (
                <div
                key={`${branch.city}-${branch.highschool}`}
                className="flex gap-x-20 max-lg:flex-col max-lg:items-center"
                >
                <img
                    src={branch?.photo}
                    className="w-[500px] h-[500px] object-cover drop-shadow max-[500px]:w-full max-[500px]:h-auto"
                />
                <div className="flex flex-col gap-y-6 max-lg:max-w-[500px] max-lg:w-full max-lg:mt-8">
                    <div>
                    <h3 className="text-header/80 font-bold uppercase font-title dynamic-text">
                        About {branch.city}, {branch.state} {branch.country}
                    </h3>
                    <h3 className="text-3xl font-bold font-title uppercase text-header">
                        {branch.firstName} {branch.lastName}
                    </h3>
                    <p className="dynamic-text text-body">{branch.description}</p>
                    </div>

                    {/* Display Gallery Items for the branch */}
                    <div className="mt-4">
                    <h4 className="text-xl font-bold">Gallery</h4>
                    <div className="grid grid-cols-1 gap-4 max-md:grid-cols-2 max-lg:grid-cols-3">
                        {(galleryItems[`${branch.city}-${branch.highschool}`] || []).map(
                        (galleryItem, index) => (
                            <div
                            key={index}
                            className="p-4 border rounded shadow-sm hover:shadow-lg"
                            >
                            <h5 className="font-bold">{galleryItem.title}</h5>
                            <p>{galleryItem.description}</p>
                            </div>
                        )
                        )}
                    </div>
                    </div>
                </div>
                </div>
            ))}
        </div>
        <Footer />
    </div>
  );
};

export default Branch;
