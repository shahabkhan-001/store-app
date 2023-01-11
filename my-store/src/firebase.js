import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAs2bzMDxZJqsWGoe8LqtDyjJrTxb5C4wY",
  authDomain: "fakestore-f8f68.firebaseapp.com",
  projectId: "fakestore-f8f68",
  storageBucket: "fakestore-f8f68.appspot.com",
  messagingSenderId: "759352094429",
  appId: "1:759352094429:web:8e283cfe42e0118b803534"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db  , auth };