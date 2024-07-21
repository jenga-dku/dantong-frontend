import { useContext, useEffect, useRef } from 'react';
import { ModalContext } from './ModalProvider';
import { ModalState } from '@src/types/modal';
import { RxCross2 } from 'react-icons/rx';

export const Modal = ({ title, desc, visible, option }: ModalState) => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const { setModalState } = useContext(ModalContext);
  const handleClose = () => {
    setModalState({ title: '', desc: '', visible: false });
  };
  useEffect(() => {
    if (!modalRef.current) {
      return;
    }
    visible ? modalRef.current.showModal() : modalRef.current.close();
  }, [visible]);

  const handleESC = (event: React.SyntheticEvent<HTMLDialogElement, Event>) => {
    event.preventDefault();
    handleClose();
  };

  return (
    <dialog ref={modalRef} className="modal " onCancel={handleESC}>
      <form
        method="dialog"
        className="modal-box w-[calc(100%-20px)] max-w-[380px] justify-self-center overflow-hidden"
      >
        {option?.type !== 'DISABLE_CANCLE' && (
          <RxCross2
            className="absolute right-5 cursor-pointer"
            onClick={() => {
              handleClose();
            }}
          />
        )}
        <div className=" flex w-full flex-col gap-2">
          <h3 className="text-lg font-bold">{title}</h3>
          <div className="flex w-full">{desc}</div>
        </div>
        <div className="modal-action">
          {option?.type !== 'DISABLE_CANCLE' && (
            <button
              className="btn w-full"
              onClick={() => {
                option?.confirmEvent && option?.confirmEvent();
                handleClose();
              }}
            >
              확인
            </button>
          )}
        </div>
      </form>
    </dialog>
  );
};
