import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyAiKmaQel2lTnTBfHQoaa1tqoHmNCNkV2c",
  authDomain: "dantong-59735.firebaseapp.com",
  projectId: "dantong-59735",
  storageBucket: "dantong-59735.appspot.com",
  messagingSenderId: "657637707990",
  appId: "1:657637707990:web:246c895cd85cf58f99b977",
  measurementId: "G-9RQXXD0E1Y"
};


const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

async function requestPermission() {
  console.log('권한 요청 중...');

  const permission = await Notification.requestPermission();
  if (permission === 'denied') {
    console.log('알림 권한 허용 안됨');
    return;
  }

  console.log('알림 권한이 허용됨');

  const token = await getToken(messaging, {
    vapidKey: process.env.REACT_APP_VAPID_KEY,
  });

  if (token) console.log('token: ', token);
  else console.log('Can not get Token');

  onMessage(messaging, (payload) => {
    console.log('메시지가 도착했습니다.', payload);
    // ...
  });
}

requestPermission();
