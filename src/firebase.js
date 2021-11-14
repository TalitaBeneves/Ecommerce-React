import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDXkRscofmJVzZqsdjZ6NTCioQgdOvjzNs",
  authDomain: "shop-5dab8.firebaseapp.com",
  projectId: "shop-5dab8",
  storageBucket: "shop-5dab8.appspot.com",
  messagingSenderId: "911319887957",
  appId: "1:911319887957:web:1738bbbeb55678fcb724dc"
};

const app = initializeApp(firebaseConfig);

export default app;