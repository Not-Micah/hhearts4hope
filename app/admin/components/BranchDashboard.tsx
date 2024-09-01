import { useState, useEffect } from "react";
import { useBranchData } from "@/providers/useBranchData";
import useBranchModal from "@/hooks/useBranchModal";
import { deleteBranch } from "@/utils/database";
import useConfirmationModal from "@/hooks/useDeleteConfirmationModal";

import { MdDelete } from "react-icons/md";

const BranchDashboard = () => {
  const { branches } = useBranchData();
  
  const {
    onOpen: openConfirmationModal,
    setConfirmationMessage,
    setCityToDelete,
    setHighschoolToDelete
  } = useConfirmationModal();
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
    <div className="flex flex-col justify-center items-start gap-y-6
    overflow-y-scroll no-scrollbar py-12">
      <h3 className="dynamic-subheading font-title font-semibold">Branches</h3>
      <div className="flex flex-col justify-center items-start gap-y-2">
        {branches.map((item, index) => (
          <div
            key={index}
            className="flex flex-row justify-between items-center gap-x-4
            w-[500px] border-b-2 pb-3"
          >
            <button
              onClick={() => {
                console.log(item);
                // Setting Dialogue Data
                setCurrentBranch(item);
                setNewBranch(false);
                setUpdated(!updated);

                // Opening the Modal
                openBranchModal();
              }}
              className="text-lg font-semibold font-title"
            >
              {item.city} {item.country} --- {item.highschool}
            </button>
            <button
            className="rounded-full text-lg"
            onClick={() => {
              setConfirmationMessage(`Are you sure you want to delete the branch ${item.location}?`);
              setCityToDelete(item.city);
              setHighschoolToDelete(item.highschool);
              openConfirmationModal();
            }}>
              <MdDelete />
            </button>
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
