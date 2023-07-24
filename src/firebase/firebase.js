import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDMTXsB1GtF0ICUZCf4TIpvNX5Jmi2XwVA",
  authDomain: "sportstading.firebaseapp.com",
  projectId: "sportstading",
  storageBucket: "sportstading.appspot.com",
  messagingSenderId: "992813877224",
  appId: "1:992813877224:web:0f479264cce8d11945065d",
  measurementId: "G-E5ZVD0DBX0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);