import { create } from 'zustand';

type TobBarState = {
  isBackButtonVisible: boolean;
  setIsBackButtonVisible: (state: boolean) => void;
};

export const useTobBarStore = create<TobBarState>((set) => ({
  isBackButtonVisible: false,
  setIsBackButtonVisible: (state: boolean) =>
    set({ isBackButtonVisible: state }),
}));
