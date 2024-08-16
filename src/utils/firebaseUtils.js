import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getToken } from 'firebase/messaging';
import { getMessaging } from 'firebase/messaging';

const firebaseConfig = {
	apiKey: "AIzaSyA5GL6PW1bR11Y_4ynLgZDLPHhqV7T2RHg",
	authDomain: "dantong-3edb7.firebaseapp.com",
	projectId: "dantong-3edb7",
	storageBucket: "dantong-3edb7.appspot.com",
	messagingSenderId: "978271250559",
	appId: "1:978271250559:web:5d6a336744b6fd4179f74a",
	measurementId: "G-YLZEGVGY4H"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const messaging = getMessaging(app);

const token = await getToken(messaging, {
  vapidKey: process.env.REACT_APP_VAPID_KEY,
});

export const issueFcmToken = async () => {
	return Notification.requestPermission()
		.then((permission) => {
			if (permission === "granted") {
				console.log("알림 권한이 허용됨");
				return token;
				// FCM 메세지 처리
			} else {
				console.log("알림 권한 허용 안됨");
			}
		})
		.catch((err) => {
			console.error("토큰 발급 중 에러 발생: ", err);
			throw err;
		})
}