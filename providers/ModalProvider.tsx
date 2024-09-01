"use client";

import { useEffect, useState } from "react";
import BranchModal from "@/components/BranchModal";
import DeleteConfirmationModal from "@/components/DeleteConfirmationModal";
import GalleryModal from "@/components/GalleryItemModal";

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
    </>
  );
};

export default ModalProvider;