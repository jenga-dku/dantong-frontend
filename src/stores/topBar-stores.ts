import { create } from 'zustand';

type TopBarState = {
  isBackButtonVisible: boolean;
  setIsBackButtonVisible: (state: boolean) => void;
  isNotificationButtonVisible: boolean;
  setIsNotificationButtonVisible: (state: boolean) => void;
};

export const useTopBarStore = create<TopBarState>((set) => ({
  isBackButtonVisible: false,
  setIsBackButtonVisible: (state: boolean) =>
    set({ isBackButtonVisible: state }),
  isNotificationButtonVisible: false,
  setIsNotificationButtonVisible: (state: boolean) =>
    set({ isNotificationButtonVisible: state }),
}));
