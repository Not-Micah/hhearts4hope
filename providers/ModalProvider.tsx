"use client";

import { useEffect, useState } from "react";

import BranchModal from "@/components/Modals/BranchModal";
import DeleteConfirmationModal from "@/components/Modals/DeleteConfirmationModal";
import GalleryModal from "@/components/Modals/GalleryItemModal";
import StatisticsModal from "@/components/Modals/StatisticsModal";
import GalleryDisplayModal from "@/components/Modals/GalleryDisplayModal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
        <BranchModal />
        <DeleteConfirmationModal />
        <GalleryModal />
        <StatisticsModal />
        <GalleryDisplayModal />
    </>
  );
};

export default ModalProvider;