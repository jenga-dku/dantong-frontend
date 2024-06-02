import { useContext, useState } from 'react';
import { ModalContext } from '../components/modal/ModalProvider';

export const useModal = () => {
  const { setModalState } = useContext(ModalContext);

  const open = ({ title, desc }: { title: string; desc?: string }) => {
    setModalState({
      title,
      desc: desc ?? '',
      visible: true,
    });
  };
  const close = () => {
    setModalState({
      title: '',
      desc: '',
      visible: false,
    });
  };
  return { open, close };
};
