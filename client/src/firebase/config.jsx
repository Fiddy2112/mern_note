// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDfd7Ql7CK8mtp_4nW7tR3Boeceg3I4mgY",
  authDomain: "note-app-1ccad.firebaseapp.com",
  projectId: "note-app-1ccad",
  storageBucket: "note-app-1ccad.appspot.com",
  messagingSenderId: "139192411691",
  appId: "1:139192411691:web:b5ae5d7cdef51e57dfec6e",
  measurementId: "G-6FFEBXZ15E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
