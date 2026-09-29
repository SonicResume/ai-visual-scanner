import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBrck1di7_N7B2d-H8mwZud17N9CYgC8wc",
  authDomain: "resume-97612.firebaseapp.com",
  projectId: "resume-97612",
  storageBucket: "resume-97612.firebasestorage.app",
  messagingSenderId: "1096541776873",
  appId: "1:1096541776873:web:5d4a18ab91bb98f28f7978",
};

// 🔥 THIS FIXES THE ERROR
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);