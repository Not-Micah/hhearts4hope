import { create } from 'zustand';
import { DocumentData } from 'firebase/firestore';

interface GalleryModal {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  //////////////////
  galleryBranch: DocumentData | null;
  setGalleryBranch: (branch: DocumentData | null) => void;
  //////////////////
  currentGalleryItem: DocumentData | null;
  setCurrentGalleryItem: (branch: DocumentData | null) => void;
  //////////////////
  newGalleryItem: boolean;
  setNewGalleryItem: (status: boolean) => void;
  //////////////////
  updated: boolean;
  setUpdated: (status: boolean) => void;
}

const useGalleryModal = create<GalleryModal>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  //////////////////
  galleryBranch: null,
  setGalleryBranch: (branch: DocumentData | null) => set({ galleryBranch: branch }),
  //////////////////
  currentGalleryItem: null,
  setCurrentGalleryItem: (galleryItem: DocumentData | null) => set({currentGalleryItem: galleryItem}),
  //////////////////
  newGalleryItem: false,
  setNewGalleryItem: (status: boolean) => set({ newGalleryItem: status }),
  //////////////////
  updated: false,
  setUpdated: (status: boolean) => set({updated: status})
}));

export default useGalleryModal;
