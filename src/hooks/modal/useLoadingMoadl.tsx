import { Loader } from '@/components/ui/Loader';
import { useModal } from './useModal';

export const useLoadingModal = () => {
  const { open, close } = useModal();
  const openLoadingModal = (loadingMsg: string) => {
    open({
      title: <p className="flex w-full justify-center">{loadingMsg}</p>,
      desc: <Loader type="clip" className="mt-5" size={30} />,
      option: {
        type: 'DISABLE_CANCLE',
      },
    });
  };
  const closeLoadingModal = () => {
    close();
  };
  return { openLoadingModal, closeLoadingModal };
};
