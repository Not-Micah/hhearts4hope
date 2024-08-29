"use client";

import { useEffect, useState } from "react";
import BranchModal from "@/components/BranchModal";

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
    </>
  );
};

export default ModalProvider;