import { Box } from '@/components/ui/Box';
import { Button } from '@/components/ui/Button';
import { useEffect, useState } from 'react';
import { requestFcmToken, messaging } from '@/utils/firebaseUtils';
import { onMessage } from 'firebase/messaging';
import toast from 'react-hot-toast';
import { useTopBarStore } from '@/stores/topBar-stores';

export const NotificationPage = () => {
  const notificationToken = (function () {
    return localStorage.getItem('notificationToken');
  })();
  const [isNotificationOn, setIsNotificationOn] = useState(!!notificationToken);

  const fetchFcmToken = async () => {
    if (!notificationToken && isNotificationOn) {
      await requestFcmToken()
        .then((res) => {
          localStorage.setItem('notificationToken', res!);
          toast('알림을 설정하였습니다.');
          onMessage(messaging, (payload) => {
            console.log(payload);
            toast(payload!.notification!.body!);
          });
        })
        .catch((err) => {
          console.error(err);
        });
    } else if (notificationToken && !isNotificationOn) {
      toast('알림을 해제하였습니다.');
      localStorage.setItem('notificationToken', '');
    }
  };

  useEffect(() => {
    fetchFcmToken();
  }, [isNotificationOn]);

  useEffect(() => {
    useTopBarStore.setState({
      isBackButtonVisible: true,
      isNotificationButtonVisible: false,
    });
  }, []);

  return (
    <Box className="flex-col gap-7">
      <div
        className="tooltip-full tooltip tooltip-open tooltip-primary mt-7 w-full before:w-full before:text-primary after:left-[10px]"
        data-tip="행사 소식을 푸시알림을 통해 바로 받아보세요!"
      >
        <div className="mt-2 flex w-full items-center justify-between">
          <p>PUSH 알림</p>
          <input
            type="checkbox"
            className="toggle toggle-primary"
            defaultChecked={!!notificationToken}
            onClick={() => {
              setIsNotificationOn((prev) => !prev);
            }}
          />
        </div>
      </div>
      <Button content="적용" />
    </Box>
  );
};
