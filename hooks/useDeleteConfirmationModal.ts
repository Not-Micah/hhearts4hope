import { create } from 'zustand';

interface DeleteConfirmationModal {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  confirmationMessage: string;
  setConfirmationMessage: (newMessage: string) => void;
  cityToDelete: string;
  setCityToDelete: (city: string) => void;
  highschoolToDelete: string;
  setHighschoolToDelete: (highschool: string) => void;
}

const useDeleteConfirmationModal = create<DeleteConfirmationModal>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  confirmationMessage: "",
  setConfirmationMessage: (newMessage: string) => set({ confirmationMessage: newMessage }),
  cityToDelete: "",
  setCityToDelete: (city: string) => set({ cityToDelete: city }),
  highschoolToDelete: "",
  setHighschoolToDelete: (highschool: string) => set({ highschoolToDelete: highschool })
}));

export default useDeleteConfirmationModal;
