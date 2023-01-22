import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBUL2opnc7Q312qndAh-tFj83EXfbLddkc",
  authDomain: "ulna-db78c.firebaseapp.com",
  projectId: "ulna-db78c",
  storageBucket: "ulna-db78c.appspot.com",
  messagingSenderId: "366273505087",
  appId: "1:366273505087:web:a5abe2fc24eab8a1a3958a",
  measurementId: "G-TS1TF0RKB4",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
