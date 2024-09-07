import { create } from 'zustand';
import { DocumentData } from 'firebase/firestore';

interface GalleryDisplayModal {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  galleryItem: DocumentData | null;
  setGalleryItem: (item: DocumentData | null) => void;
}

const useGalleryDisplayModal = create<GalleryDisplayModal>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  galleryItem: null,
  setGalleryItem: (item: DocumentData | null) => set({ galleryItem: item })
}));

export default useGalleryDisplayModal;
