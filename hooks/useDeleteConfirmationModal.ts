import { create } from 'zustand';

interface DeleteConfirmationModal {
  isOpen: boolean;
  onOpen: () => void
  onClose: () => void;
  confirmationMessage: string;
  setConfirmationMessage: (newMessage: string) => void;
  locationToDelete: string;
  setLocationToDelete: (location: string) => void;
}

const useDeleteConfirmationModal = create<DeleteConfirmationModal>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  confirmationMessage: "",
  setConfirmationMessage: (newMessage: string) => set({ confirmationMessage: newMessage }),
  locationToDelete: "",
  setLocationToDelete: (location: string) => set({locationToDelete: location})
}));


export default useDeleteConfirmationModal;