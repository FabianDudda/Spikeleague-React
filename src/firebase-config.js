import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
