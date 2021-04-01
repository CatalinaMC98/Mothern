import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./index.css";
import App from "./App";
import { FirebaseAppProvider} from 'reactfire';

const firebaseConfig = {
  apiKey: "AIzaSyAoxPLe-nP6Q3JoswTT-_Cc8IpoLew_10U",
  authDomain: "mothern-eac5a.firebaseapp.com",
  projectId: "mothern-eac5a",
  storageBucket: "mothern-eac5a.appspot.com",
  messagingSenderId: "190334513765",
  appId: "1:190334513765:web:401420ec9e8ed4757a8c8c"
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
