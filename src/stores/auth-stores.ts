import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  isLoggedIn: boolean;
  setIsLoggedIn: (state: boolean) => void;
  userInfo: UserInfo;
  setUserInfo: (state: UserInfo) => void;
  isTokenIssued: boolean;
  setIsTokenIssued: (state: boolean) => void;
}

interface UserInfo {
  name: string;
  role: string;
  studentId: string;
}

export const useAuthStore = create(
  persist<AuthState>(
    (set) => ({
      isLoggedIn: false,
      setIsLoggedIn: (state: boolean) => {
        set({ isLoggedIn: state });
      },
      userInfo: {
        name: '',
        role: '',
        studentId: '',
      },
      setUserInfo: (state: UserInfo) => {
        set({ userInfo: state });
      },
      isTokenIssued: false,
      setIsTokenIssued: (state: boolean) => set({ isTokenIssued: state }),
    }),
    {
      name: 'auth',
    },
  ),
);
