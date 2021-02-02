import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAEUDQdQCdkkONNEVcrEoBHk7aaaXEsaS0",
  authDomain: "fastrewardsnew.firebaseapp.com",
  projectId: "fastrewardsnew",
  storageBucket: "fastrewardsnew.appspot.com",
  messagingSenderId: "813032466791",
  appId: "1:813032466791:web:5feced4a416d20533827c2",
  measurementId: "G-8VP2KBZHBX"
};
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
ReactDOM.render(<App />,document.getElementById('root'));

reportWebVitals();
