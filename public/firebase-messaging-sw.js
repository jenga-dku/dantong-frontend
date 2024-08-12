importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

const firebaseConfig = {
	apiKey: "AIzaSyA5GL6PW1bR11Y_4ynLgZDLPHhqV7T2RHg",
	authDomain: "dantong-3edb7.firebaseapp.com",
	projectId: "dantong-3edb7",
	storageBucket: "dantong-3edb7.appspot.com",
	messagingSenderId: "978271250559",
	appId: "1:978271250559:web:5d6a336744b6fd4179f74a",
	measurementId: "G-YLZEGVGY4H"
  };

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log("백그라운드 메시지입니다.", payload);

	// customize notification
	const notificationTitle = payload.notification.title;
	const notificationOptions = {
		body: payload.notification.body,
		icon: payload.notification.image
	};

	self.registration.showNotification(notificationTitle, notificationOptions);

});