"use client";

import { useEffect, useState } from "react";

import BranchModal from "@/components/Modals/BranchModal";
import DeleteConfirmationModal from "@/components/Modals/DeleteConfirmationModal";
import GalleryModal from "@/components/Modals/GalleryItemModal";
import StatisticsModal from "@/components/Modals/StatisticsModal";
import GalleryDisplayModal from "@/components/Modals/GalleryDisplayModal";
import PartnerModal from "@/components/Modals/PartnersModal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div>
        <BranchModal />
        <DeleteConfirmationModal />
        <GalleryModal />
        <StatisticsModal />
        <GalleryDisplayModal />
        <PartnerModal />
    </div>
  );
};

export default ModalProvider;