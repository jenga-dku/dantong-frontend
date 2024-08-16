import { Notification } from '@/api/notification';
import { NotificationRegister } from '@/api/notification/types';
import { ErrorResponse } from '@/api/types';
import { Loader } from '@/components/ui/Loader';
import { useModal } from '@/hooks/modal/useModal';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const useRegisterNotification = () => {
  const { open, close } = useModal();
  const { mutate: sendNotification } = useSendNotification();
  return useMutation({
    mutationFn: (data: NotificationRegister) => Notification.register(data),
    onMutate: () => {
      open({
        title: <p className="flex w-full justify-center">설정 중</p>,
        desc: <Loader type="clip" className="mt-5" size={30} />,
        option: {
          type: 'DISABLE_CANCEL',
        },
      });
    },
    onSuccess: async () => {
      sendNotification();
      close();
    },
    onError: ({ response }: AxiosError<ErrorResponse>) =>
      open({
        title: '오류',
        desc: response?.data.message[0],
      }),
  });
};

export const useSendNotification = () => {
  return useMutation({
    mutationFn: () => Notification.send(),
    onError: (e) => console.log(e),
  });
};
