import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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
  getAnalytics(app);
};
