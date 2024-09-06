"use client";

import { useBranchData } from "@/providers/useBranchData";
import useBranchModal from "@/hooks/useBranchModal";
import BranchItem from "./BranchItem";

import { sortBranchesAlphabetically } from "@/utils/functions";


const BranchDashboard = () => {
  const { branches } = useBranchData();

  const {
    setNewBranch,
    onOpen: openBranchModal,
    setCurrentBranch,
    updated,
    setUpdated
  } = useBranchModal();

  if (branches === null) {
    return <div>Loading</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center gap-y-6
    overflow-y-scroll no-scrollbar py-12">
      <h3 className="dynamic-subheading font-title font-semibold">Branches</h3>
      <div className="flex flex-col justify-center items-start gap-y-2">
        {branches && sortBranchesAlphabetically(branches).map((item, index) => (
          <div
            key={index}
            className="flex flex-row justify-between items-center gap-x-4
            w-[500px] border-b-2 pb-3"
          >
              <BranchItem branch={item} />
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          // Clearing the Data
          setCurrentBranch(null);
          setNewBranch(true);
          setUpdated(!updated);

          // Opening the Modal
          openBranchModal();
        }}
        className="px-6 py-2 bg-primary rounded-full
        text-white font-bold"
      >
        Create Branch
      </button>
    </div>
  );
};

export default BranchDashboard;
