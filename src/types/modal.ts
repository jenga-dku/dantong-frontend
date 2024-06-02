export type ModalState = {
  title: string;
  desc?: string;
  visible: boolean;
  option?: {
    type: ModalType;
    confirmEvent: () => void;
  };
};

export type ModalType = 'CONFIRM';
