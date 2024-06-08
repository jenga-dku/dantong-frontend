import { ReactNode } from 'react';

export type ModalState = {
  title: ReactNode | string;
  desc?: ReactNode | string;
  visible: boolean;
  option?: {
    type: ModalType;
    confirmEvent?: () => void;
  };
};

export type ModalType = 'CONFIRM' | 'DISABLE_CANCLE';
