import { useContext, useState } from 'react';
import { ModalContext } from '../components/modal/ModalProvider';

export const useModal = () => {
  const { setModalState } = useContext(ModalContext);
  const [isOpen, setIsOpen] = useState(false);
  const handleModal = () => setIsOpen((prev) => !prev);

  const open = ({ title, desc }: { title: string; desc?: string }) => {
    setIsOpen(true);
    setModalState({
      title,
      desc: desc ?? '',
      visible: isOpen,
      onClose: handleModal,
    });
  };
  const close = () => {
    setIsOpen(false);
    setModalState({
      title: '',
      desc: '',
      visible: isOpen,
      onClose: handleModal,
    });
  };
  return { open, close };
};
