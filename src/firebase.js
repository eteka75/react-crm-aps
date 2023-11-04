// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxg5pkQ7M-tbvCeeyyJTUM4co6JvDUTA8",
  authDomain: "crm-react-9d8a9.firebaseapp.com",
  projectId: "crm-react-9d8a9",
  storageBucket: "crm-react-9d8a9.appspot.com",
  messagingSenderId: "805745043530",
  appId: "1:805745043530:web:e9de240cce54b6affc5eb3",
  measurementId: "G-9BNPF5Z1Q0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;