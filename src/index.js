import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBLa4vPoEVr8CIb897rjysOBZkj7pH8MEY",
    authDomain: "chatdemo-87cdd.firebaseapp.com",
    databaseURL: "https://chatdemo-87cdd.firebaseio.com",
    projectId: "chatdemo-87cdd",
    storageBucket: "chatdemo-87cdd.appspot.com",
    messagingSenderId: "1074255104712",
    appId: "1:1074255104712:web:d8622c8b46cb18bb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
