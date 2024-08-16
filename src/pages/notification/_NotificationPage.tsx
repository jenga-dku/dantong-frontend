import { Box } from '@/components/ui/Box';
import { Button } from '@/components/ui/Button';
import { useEffect, useState } from 'react';
import { requestFcmToken, messaging } from '@/utils/firebaseUtils';
import { onMessage } from 'firebase/messaging';
import toast from 'react-hot-toast';
import { useTopBarStore } from '@/stores/topBar-stores';
import { useRegisterNotification } from '@/query-hooks/notification';
import { useAuthStore } from '@/stores/auth-stores';
import { useNavigate } from 'react-router-dom';

export const NotificationPage = () => {
  const notificationToken = (function () {
    return localStorage.getItem('notificationToken');
  })();
  const [isNotificationOn, setIsNotificationOn] = useState(!!notificationToken);
  const { mutate: registerNotification } = useRegisterNotification();
  const {
    userInfo: { studentId },
  } = useAuthStore();
  const navigate = useNavigate();

  const fetchFcmToken = async () => {
    if (!notificationToken && isNotificationOn) {
      await requestFcmToken()
        .then((res) => {
          localStorage.setItem('notificationToken', res!);
          registerNotification({
            studentId: studentId,
            token: res!,
          });
          onMessage(messaging, (payload) => {
            console.log(payload);
            toast(payload!.notification!.body!);
          });
        })
        .catch((err) => {
          console.error(err);
        });
    } else if (notificationToken && !isNotificationOn) {
      localStorage.setItem('notificationToken', '');
      registerNotification({
        studentId: studentId,
        token: '',
      });
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
          <p>푸시알림</p>
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
      <Button
        content="확인"
        onClick={() => {
          navigate(-1);
        }}
      />
    </Box>
  );
};
