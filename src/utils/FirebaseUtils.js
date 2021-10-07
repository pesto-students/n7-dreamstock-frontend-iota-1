// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALQdgbF3Vcdpd-BaSj8a8GqpGodsx5hSU",
  authDomain: "dreamstock-n7.firebaseapp.com",
  projectId: "dreamstock-n7",
  storageBucket: "dreamstock-n7.appspot.com",
  messagingSenderId: "610233614673",
  appId: "1:610233614673:web:5959d6c337924c12915370",
  measurementId: "G-NBYSSGV3GD",
};

// Initialize Firebase
export const InitFirebase = () => {
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
};
