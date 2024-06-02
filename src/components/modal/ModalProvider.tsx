import { ReactNode, createContext, useState } from 'react';
import ReactDOM from 'react-dom';
import { Modal } from './Modal';
import { ModalState } from '../../types/modal';

const modalRoot = document.getElementById('modal-root') as HTMLElement;
export const ModalContext = createContext({
  setModalState: ({ title, desc, visible }: ModalState) => {},
});

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modalState, setModalState] = useState<ModalState>();

  return (
    <ModalContext.Provider value={{ setModalState }}>
      {children}
      {modalState?.visible &&
        ReactDOM.createPortal(
          <Modal
            title={modalState.title}
            desc={modalState.desc}
            visible={modalState.visible}
          />,
          modalRoot,
        )}
    </ModalContext.Provider>
  );
};
