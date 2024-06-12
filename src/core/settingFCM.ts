// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAiKmaQel2lTnTBfHQoaa1tqoHmNCNkV2c',
  authDomain: 'dantong-59735.firebaseapp.com',
  projectId: 'dantong-59735',
  storageBucket: 'dantong-59735.appspot.com',
  messagingSenderId: '657637707990',
  appId: '1:657637707990:web:246c895cd85cf58f99b977',
  measurementId: 'G-9RQXXD0E1Y',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
