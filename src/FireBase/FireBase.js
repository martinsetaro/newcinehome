
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBIMDmlHBIDwJTPPgkQ2rCIQVhRYEo6cJY",
  authDomain: "cinehome1981.firebaseapp.com",
  projectId: "cinehome1981",
  storageBucket: "cinehome1981.appspot.com",
  messagingSenderId: "905350889883",
  appId: "1:905350889883:web:8b8db310cce1913254613e"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);