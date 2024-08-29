import { create } from 'zustand';

interface BranchModal {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  //////////////////
  location: string;
  setLocation: (newLocation: string) => void;
  lat: number;
  setLat: (newLat: number) => void;
  lng: number;
  setLng: (newLng: number) => void;
  firstName: string;
  setFirstName: (newFirstName: string) => void;
  lastName: string;
  setLastName: (newLastName: string) => void;
  branchInstagram: string;
  setBranchInstagram: (newBranchInstagram: string) => void;
  //////////////////
  prevBranch: string;
  setPrevBranch: (newPrevBranch: string) => void;
  //////////////////
  newBranch: boolean;
  setNewBranch: (newBranchStatus: boolean) => void;
  // if newBranch is true, createBranch, otherwise editBranch
}

const useBranchModal = create<BranchModal>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  //////////////////
  location: "",
  setLocation: (newLocation: string) => set({ location: newLocation }),
  lat: 0,
  setLat: (newLat: number) => set({ lat: newLat }),
  lng: 0,
  setLng: (newLng: number) => set({ lng: newLng }),
  firstName: "",
  setFirstName: (newFirstName: string) => set({ firstName: newFirstName }),
  lastName: "",
  setLastName: (newLastName: string) => set({ lastName: newLastName }),
  branchInstagram: "",
  setBranchInstagram: (newBranchInstagram: string) => set({ branchInstagram: newBranchInstagram }),
  //////////////////
  prevBranch: "",
  setPrevBranch: (newPrevBranch: string) => set({prevBranch: newPrevBranch}),
  //////////////////
  newBranch: false,
  setNewBranch: (newBranchStatus: boolean) => set({ newBranch: newBranchStatus }),
}));

export default useBranchModal;
