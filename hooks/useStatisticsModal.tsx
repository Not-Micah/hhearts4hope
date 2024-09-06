import { create } from 'zustand';
import { DocumentData } from 'firebase/firestore';

interface StatisticsModal {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  //////////////////
  currentStatistic: DocumentData | null;
  setCurrentStatistic: (statistic: DocumentData | null) => void;
  //////////////////
  updated: boolean;
  setUpdated: (status: boolean) => void;
}

const useStatisticsModal = create<StatisticsModal>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  //////////////////
  currentStatistic: null,
  setCurrentStatistic: (statistic: DocumentData | null) => set({currentStatistic: statistic}),
  //////////////////
  updated: false,
  setUpdated: (status: boolean) => set({updated: status})
}));

export default useStatisticsModal;
