import { useState, useEffect } from "react";
import { useBranchData } from "@/providers/useBranchData";
import useBranchModal from "@/hooks/useBranchModal";
import { deleteBranch } from "@/utils/database";
import useConfirmationModal from "@/hooks/useDeleteConfirmationModal";

import { MdDelete } from "react-icons/md";

const AdminDashboard = () => {
  const { branches } = useBranchData();
  
  const {
    onOpen: openConfirmationModal,
    setConfirmationMessage,
    setLocationToDelete
  } = useConfirmationModal();
  const {
    setLocation,
    setLat,
    setLng,
    setFirstName,
    setLastName,
    setBranchInstagram,
    setNewBranch,
    onOpen: openBranchModal,
    setPrevBranch,
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
                setLocation(item.location);
                setLat(item.lat);
                setLng(item.lng);
                setFirstName(item.firstName);
                setLastName(item.lastName);
                setBranchInstagram(item.branchInstagram);
                setPrevBranch(item.location);
                setNewBranch(false);

                // Opening the Modal
                openBranchModal();
              }}
              className="text-lg font-semibold font-title"
            >
              {item.location}
            </button>
            <button
            className="rounded-full text-lg"
            onClick={() => {
              setConfirmationMessage(`Are you sure you want to delete the branch ${item.location}?`);
              setLocationToDelete(item.location)
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
          setLocation("");
          setLat("");
          setLng("");
          setFirstName("");
          setLastName("");
          setBranchInstagram("");
          setPrevBranch("");
          setNewBranch(true);

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

export default AdminDashboard;
