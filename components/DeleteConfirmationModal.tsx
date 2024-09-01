"use client";

import Modal from "./Modal";
import useDeleteConfirmationModal from "@/hooks/useDeleteConfirmationModal";
import { deleteBranch } from "@/utils/database";

const DeleteConfirmationModal = () => {
  const { onClose, isOpen, confirmationMessage, cityToDelete, highschoolToDelete } =
    useDeleteConfirmationModal();
  const buttonStyles = `px-4 py-2 bg-primary text-white font-bold rounded-full`;

  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  return (
    <Modal title={confirmationMessage} isOpen={isOpen} onChange={onChange}>
      <div className="w-full flex justify-start items-center gap-4 flex-wrap">
        <button
          className={buttonStyles}
          onClick={() => {
            deleteBranch(cityToDelete, highschoolToDelete);
            onClose();
          }}
        >
          Yes
        </button>
        <button className={buttonStyles} onClick={onClose}>
          No
        </button>
      </div>
    </Modal>
  );
};

export default DeleteConfirmationModal;
