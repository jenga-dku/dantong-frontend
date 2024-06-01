import { useEffect, useRef } from 'react';

export const Modal = ({
  title,
  desc,
  visible,
  onClose,
}: {
  title: string;
  desc: string;
  visible: boolean;
  onClose: () => void;
}) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!modalRef.current) {
      return;
    }
    visible ? modalRef.current.showModal() : modalRef.current.close();
  }, [visible]);

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  const handleESC = (event: React.SyntheticEvent<HTMLDialogElement, Event>) => {
    event.preventDefault();
    handleClose();
  };

  return (
    <dialog ref={modalRef} className="modal " onCancel={handleESC}>
      <form
        method="dialog"
        className="modal-box w-full max-w-[380px] justify-self-center overflow-hidden"
      >
        <div className=" flex flex-col gap-2 ">
          <h3 className="text-lg font-bold">{title}</h3>
          <p>{desc}</p>
        </div>
        <div className="modal-action">
          <button className="btn w-full" onClick={handleClose}>
            확인
          </button>
        </div>
      </form>
    </dialog>
  );
};
