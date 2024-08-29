import { useState, useEffect } from "react";
import { useBranchData } from "@/providers/useBranchData";
import useBranchModal from "@/hooks/useBranchModal";

const AdminDashboard = () => {
  const { branches } = useBranchData();
  const { setLocation, setLat, setLng, setFirstName, setLastName, setBranchInstagram, setNewBranch,
     onOpen, setPrevBranch } = useBranchModal();

  if (branches === null) {
    return (
      <div>
        Loading
      </div>
    )
  }

  return (
    <div className='flex flex-col justify-center items-start'>
        <h3 className='dynamic-subheading font-title font-semibold'>Branches</h3>
        <div className="flex flex-col justify-center items-start gap-y-2">
          {branches.map((item, index) => (
            <div key={index}
            onClick={() => {
              console.log(item)
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
              onOpen();
            }}>
              {item.location}
            </div>
          ))}
        </div>
        <button onClick={() => {
          // Clearing the Data
          setLocation("");
          setLat(0);
          setLng(0);
          setFirstName("");
          setLastName("");
          setBranchInstagram("");
          setPrevBranch("");
          setNewBranch(true);

          // Opening the Modal
          onOpen();
        }}>
          Create Branch
        </button>
    </div>
  )
}

export default AdminDashboard