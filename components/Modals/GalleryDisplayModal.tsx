"use client";

import Modal from "../Modal";
import useGalleryDisplayModal from "@/hooks/useGalleryDisplayModal";

const GalleryDisplayModal = () => {
  const { onClose, isOpen, galleryItem } =
  useGalleryDisplayModal();

  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  return (
    <Modal title={galleryItem?.title} isOpen={isOpen} onChange={onChange}>
        <div className="flex flex-col justify-center items-start gap-y-6">
            <img src={galleryItem?.image}
            className="w-full h-[400px] object-cover rounded-lg drop-shadow"/>
            <p className="text-lg">{galleryItem?.description}</p>
        </div>
    </Modal>
  );
};

export default GalleryDisplayModal;
