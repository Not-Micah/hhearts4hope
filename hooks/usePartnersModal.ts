import { create } from 'zustand';
import { DocumentData } from 'firebase/firestore';

interface PartnerModal {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  //////////////////
  currentPartner: DocumentData | null;
  setCurrentPartner: (partner: DocumentData | null) => void;
  //////////////////
  newPartner: boolean;
  setNewPartner: (newBranchStatus: boolean) => void;
  //////////////////
  updated: boolean;
  setUpdated: (status: boolean) => void;
}

const usePartnerModal = create<PartnerModal>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  //////////////////
  currentPartner: null,
  setCurrentPartner: (partner: DocumentData | null) => set({currentPartner: partner}),
  //////////////////
  newPartner: false,
  setNewPartner: (status: boolean) => set({ newPartner: status }),
  //////////////////
  updated: false,
  setUpdated: (status: boolean) => set({updated: status})
}));

export default usePartnerModal;
