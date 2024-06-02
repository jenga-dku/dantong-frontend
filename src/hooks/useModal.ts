import { useContext } from 'react';
import { ModalContext } from '../components/modal/ModalProvider';
import { ModalState } from '../types/modal';

export const useModal = () => {
  const { setModalState } = useContext(ModalContext);

  const open = ({ title, desc, option }: Omit<ModalState, 'visible'>) => {
    setModalState({
      title,
      desc: desc ?? '',
      visible: true,
      option: option,
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
