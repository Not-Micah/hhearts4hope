"use client";

import { useBranchData } from "@/providers/useBranchData";
usePartnerModal
import BranchItem from "./BranchItem";
import usePartnerModal from "@/hooks/usePartnersModal";

const PartnersDashboard = () => {
  const { partners } = useBranchData();

  const {
    setNewPartner,
    onOpen: openPartnerModal,
    setCurrentPartner,
    updated,
    setUpdated
  } = usePartnerModal();

  if (partners === null) {
    return <div>Loading</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center gap-y-6
    overflow-y-scroll no-scrollbar py-12 w-full">
      <h3 className="dynamic-subheading font-semibold">Partners</h3>
      <div className="flex flex-col justify-center items-start gap-y-2 w-full">
        {partners && partners.map((partner, index) => (
          <div
            key={index}
            className="flex flex-row justify-between items-center gap-x-4
            w-full border-b-2 pb-3"
          >
              {/* <BranchItem branch={item} /> */}
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          // Clearing the Data
          setCurrentPartner(null);
          setNewPartner(true);
          setUpdated(!updated);

          // Opening the Modal
          openPartnerModal();
        }}
        className="px-6 py-2 bg-primary rounded-full
        text-white font-bold"
      >
        Create Partner
      </button>
    </div>
  );
};

export default PartnersDashboard;
