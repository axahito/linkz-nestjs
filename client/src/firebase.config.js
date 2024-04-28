import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyALSXHqxvVEGD_u-7Q3um4LqExX-gmoxuA",
  authDomain: "linkz-nestjs.firebaseapp.com",
  projectId: "linkz-nestjs",
  storageBucket: "linkz-nestjs.appspot.com",
  messagingSenderId: "741885762813",
  appId: "1:741885762813:web:a0c0fdbb0a284cad543294",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);