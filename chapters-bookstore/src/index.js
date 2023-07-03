import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAH7uwZbxn4WjVc-Pr0PC_n4UTi_170tKc",
  authDomain: "chapters-spa.firebaseapp.com",
  projectId: "chapters-spa",
  storageBucket: "chapters-spa.appspot.com",
  messagingSenderId: "229941665688",
  appId: "1:229941665688:web:1f283f06f586611e1695ed",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
