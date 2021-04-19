import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./index.css";
import App from "./App";
import { FirebaseAppProvider } from "reactfire";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import "firebase/auth";
import "firebase/firestore";
import "firebase/messaging";
import "firebase/storage";
import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDMarr0skOx0qMEKUzD27vzAmhU_b55ciM",
  authDomain: "webappmothern.firebaseapp.com",
  projectId: "webappmothern",
  storageBucket: "webappmothern.appspot.com",
  messagingSenderId: "93383017963",
  appId: "1:93383017963:web:ea8fc20a0b7ea7f5dd85ae",
  measurementId: "G-R0N210G12F"
};

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <App history={history} />
    </FirebaseAppProvider>
  </Router>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

const messaging = firebase.messaging();